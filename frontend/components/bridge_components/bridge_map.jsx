var React = require('react');
var ReactDOM = require('react-dom');
var BridgeStore = require('../../stores/bridge_store');
var ClientActions = require('../../actions/client_actions');

var BridgeMap = React.createClass({
  componentDidMount: function() {
    this.placeMap();
    BridgeStore.addListener(this.placeMarkers);

    // fetch bridges after map location has been changed
    google.maps.event.addListener(this.map, 'idle', function() {
      ClientActions.fetchAllBridges();
    })

    console.log("BridgeMap - componentDidMount");
  },

  placeMap: function () {
    var mapDOMNode = ReactDOM.findDOMNode(this.refs.map);
    var mapOptions = {
      center: {lat: 37.7758, lng: -122.435}, // this is SF
      zoom: 12
    };
    this.map = new google.maps.Map(mapDOMNode, mapOptions);
  },

  placeMarkers: function () {
    var bridgeKeys = Object.keys(this.props.bridges);

    bridgeKeys.forEach(function(key) {
      var lat = this.props.bridges[key].lat;
      var lng = this.props.bridges[key].long;
      var markerPos = {lat: lat, lng: lng};

      var marker = new google.maps.Marker({
        position: markerPos,
        map: this.map
      });
    }, this);
  },

  render: function () {
    console.log("BridgeMap-render");
    return (
      <div className='map' ref='map'></div>
    );
  }
});

module.exports = BridgeMap;
