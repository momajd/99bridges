var React = require('react');

var ShowMap = React.createClass({

  componentDidUpdate: function () {
    this.placeMap();
  },

  placeMap: function () {
    var bridge = this.props.bridge;
    var mapDOMNode = document.getElementById('show-page-map');
    var mapOptions = {
      center: {lat: bridge.lat, lng: bridge.lng},
      zoom: 14,
    };
    this.map = new google.maps.Map(mapDOMNode, mapOptions);
  },

  render: function() {
    return (
      <div className='show-page-map' id='show-page-map'>
      </div>
    );
  }
});

module.exports = ShowMap;
