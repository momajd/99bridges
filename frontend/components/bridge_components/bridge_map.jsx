var React = require('react');
var ReactDOM = require('react-dom');
var BridgeStore = require('../../stores/bridge_store');
var ClientActions = require('../../actions/client_actions');

var BridgeMap = React.createClass({
  componentDidMount: function() {
    this.placeMap();
    this.markers = {};

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
      center: {lat: 37.7758, lng: -122.435}, // TODO update to user location
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
    var newBridges = [];

    // add if a bridge in the props is not yet in this.markers
    var self = this;
    Object.keys(allBridges).forEach(function(key) {
      var bridge = allBridges[key];
      if (!self.markers.hasOwnProperty(bridge.id) ) {
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

    var self = this;
    Object.keys(this.markers).forEach(function(bridgeId) {
      var marker = self.markers[bridgeId];
      if (!allBridgeIds.includes(parseInt(bridgeId))) {
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
    this.markers[bridge.id] = marker;
  },

  removeMarker: function (marker) {
    marker.setMap(null);
    delete this.markers[marker.bridgeId];
  },

  createHoverEffects: function() {
    var index = $('.bridge-index-item');

    var self = this;
    for (let i=1; i <= index.length; i++) {
      var indexItem = $('.bridge-index-item:nth-child('+i+')');
      let bridgeId = indexItem[0].id;
      indexItem.hover(function(){
        self.markers[bridgeId].setAnimation(google.maps.Animation.BOUNCE);
      }, function() {
        self.markers[bridgeId].setAnimation(null);
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
