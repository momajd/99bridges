var React = require('react');
var ReactDOM = require('react-dom');
var BridgeStore = require('../../stores/bridge_store');
var ClientActions = require('../../actions/client_actions');

var BridgeMap = React.createClass({
  componentDidMount: function() {
    this.placeMap();

    // fetch bridges after map location has been changed
    var self = this;
    google.maps.event.addListener(this.map, 'idle', function() {
      var bounds = self.getMapBounds();
      ClientActions.fetchAllBridges(bounds);
    });
  },

  componentDidUpdate: function() {
    this.placeMarkers();
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

    // TODO remove after testing
    window.map = this.map;
  },

  placeMarkers: function () {
    var bridgeKeys = Object.keys(this.props.bridges);

    bridgeKeys.forEach(function(key) {
      var location = this.props.bridges[key];
      var markerPos = {lat: location.lat, lng: location.lng};

      var marker = new google.maps.Marker({
        position: markerPos,
        map: this.map
      });
    }, this);
  },

  render: function () {
    return (
      <div className='map' ref='map'></div>
    );
  }
});

module.exports = BridgeMap;
