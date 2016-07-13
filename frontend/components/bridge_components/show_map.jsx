var React = require('react');

var ShowMap = React.createClass({

  componentDidUpdate: function () {
    this.placeMap();
  },

  placeMap: function () {
    var bridge = this.props.bridge;
    var latLng = new google.maps.LatLng(bridge.lat, bridge.lng);
    var mapDOMNode = document.getElementById('show-page-map');
    var mapOptions = {
      center: latLng,
      zoom: 14,
    };
    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    this.placeMarker(latLng);
    this.placePanorama(latLng);
    window.map = this.map;
  },

  placeMarker: function (latLng) {
    var marker = new google.maps.Marker({
      position: latLng,
      map: this.map,
      icon: {
        url: 'http://maps.google.com/mapfiles/marker_purple.png'
      },
    });
  },

  placePanorama: function (latLng) {
    var mapDOMNode = document.getElementById('show-page-pano');
    var panoOptions = {position: latLng}
    var pano = new google.maps.StreetViewPanorama(mapDOMNode, panoOptions);
    this.map.setStreetView(pano);
  },

  render: function() {
    return (
      <div>
        <div className='show-page-map' id='show-page-map'></div>
        <div className='show-page-pano' id='show-page-pano'></div>
      </div>
    );
  }
});

module.exports = ShowMap;
