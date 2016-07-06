var React = require('react');
var ReactDOM = require('react-dom');

var BridgeMap = React.createClass({
  componentDidMount: function() {
    var mapDOMNode = ReactDOM.findDOMNode(this.refs.map);
    var mapOptions = {
      center: {lat: 37.7758, lng: -122.435}, // this is SF
      zoom: 13
    };
    this.map = new google.maps.Map(mapDOMNode, mapOptions);
  },

  render: function () {
    return (
      <div className='map' ref='map'></div>
    );
  }
});

module.exports = BridgeMap;
