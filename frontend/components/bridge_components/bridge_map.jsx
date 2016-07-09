var React = require('react');
var ReactDOM = require('react-dom');
var BridgeStore = require('../../stores/bridge_store');
var ClientActions = require('../../actions/client_actions');

var BridgeMap = React.createClass({
  componentDidMount: function() {
    this.placeMap();
    this.markers = [];

    // fetch bridges after map location has been changed
    var self = this;
    google.maps.event.addListener(this.map, 'idle', function() {
      var bounds = self.getMapBounds();
      ClientActions.fetchAllBridges(bounds);
    });

    // TODO: OPEN A INFOWINDOW WITHOUT A MARKER. DELETE IF NOT USED
    // google.maps.event.addListener(this.map, 'click', function (e) {
    //   var position = e.latLng;
    //   var myLatLng = new google.maps.LatLng({lat: -34, lng: 151});
    //
    //   var infoWindow = new google.maps.InfoWindow({
    //     content: 'testing..'
    //   });
    //
    //   infoWindow.setPosition(position);
    //   infoWindow.open(self.map)
    // });
  },

  componentDidUpdate: function() {
    this.updateMarkers();
  },

  getMapBounds: function() {
  // return object to be parsed by backend API
  // https://developers.google.com/maps/documentation/javascript/reference#LatLngBounds

    var latLngBoundsObj = this.map.getBounds();
    var northEast = latLngBoundsObj.getNorthEast();
    var southWest = latLngBoundsObj.getSouthWest();

    return {
      northEast: {lat: northEast.lat(), lng: northEast.lng()},
      southWest: {lat: southWest.lat(), lng: southWest.lng()}
    };
  },

  placeMap: function () {
    var mapDOMNode = ReactDOM.findDOMNode(this.refs.map);
    var mapOptions = {
      center: {lat: 37.7758, lng: -122.435}, // this is SF
      zoom: 12
    };
    this.map = new google.maps.Map(mapDOMNode, mapOptions);
  },

  updateMarkers: function () {
    this.newBridgesToAdd().forEach(function(bridge) {
      this.createMarker(bridge);
    }, this);

    this.markersToRemove().forEach(function(marker) {
      this.removeMarker(marker);
    }, this);
  },

  newBridgesToAdd: function () {
    var allBridges = this.props.bridges;
    var currentMarkerIds = this.markers.map(function(marker){return marker.bridgeId});
    var newBridges = [];

    // add if a bridge in the props in not yet in this.markers
    Object.keys(allBridges).forEach(function(key) {
      var bridge = allBridges[key];
      if (!currentMarkerIds.includes(bridge.id) ) {
        newBridges.push(bridge);
      }
    });
    return newBridges;
  },

  markersToRemove: function () {
    var allBridges = this.props.bridges;
    var allBridgeIds = Object.keys(allBridges).map(function(key) {
      return allBridges[key].id;
    });
    var removeMarkers = [];

    // remove from view if a marker is not in the props that were received
    this.markers.forEach(function(marker) {
      if (!allBridgeIds.includes(marker.bridgeId)) {
        removeMarkers.push(marker);
      }
    });
    return removeMarkers;
  },

  createMarker: function (bridge) {
    var markerPos = {lat: bridge.lat, lng: bridge.lng};
    var marker = new google.maps.Marker({
      position: markerPos,
      map: this.map,
      bridgeId: bridge.id,
      icon: {
          url: "http://www.dot.state.oh.us/districts/D11/newsreleases/Map%20Icons/Bridge-icon.png",
          scaledSize: {
           width: 100,
           height: 80
          }
      }
      // title: "test"
    });

    var infoWindow = new google.maps.InfoWindow({
      content: '<h3>' + bridge.title + '</h3>'
    });

    google.maps.event.addListener(marker, 'click', function() {
      infoWindow.open(this.map, marker);
    });

    google.maps.event.addListener(this.map, 'click', function() {
      infoWindow.close();
    });

    this.createHoverEffects();
    this.markers.push(marker);
  },

  removeMarker: function (marker) {
    marker.setMap(null);
    var idx = this.markers.indexOf(marker);
    this.markers.splice(idx, 1);
  },

  createHoverEffects: function() {
    var index = $('.bridge-index-item');

    var self = this;
    for (let i=1; i <= index.length; i++) {
      $('.bridge-index-item:nth-child('+i+')').hover(function(){
        self.markers[i-1].setAnimation(google.maps.Animation.BOUNCE);
      });

      $('.bridge-index-item:nth-child('+i+')').mouseout(function(){
        self.markers[i-1].setAnimation(null);
      });
    }
  },

  render: function () {
    return (
      <div className='map' ref='map'></div>
    );
  }
});

module.exports = BridgeMap;
