/* global google */
/* eslint max-len: "off" */
var React = require('react');

var ShowMap = React.createClass({

  componentDidUpdate: function () {
    this.placeMap();
  },

  placeMap: function () {
    var bridge = this.props.bridge;
    var latLng = new google.maps.LatLng(bridge.center_lat, bridge.center_lng);
    var mapDOMNode = document.getElementById('show-page-map');

    this.map = new google.maps.Map(mapDOMNode);
    this.map.fitBounds(this.getBridgeBounds(bridge));

    this.placePolygon(bridge);
    this.placePanorama(latLng);
  },

  placePolygon: function (bridge) {
    var bridgeCoords = [
      bridge.corner1, bridge.corner2, bridge.corner3, bridge.corner4
    ];
    var bridgeCoordsParsed = bridgeCoords.map(coord => {
      return {lat: Number(coord.lat), lng: Number(coord.lng)};
    });

    var polygon = new google.maps.Polygon({
        paths: bridgeCoordsParsed,
        strokeColor: '#000080',
        strokeOpacity: 0.9,
        strokeWeight: 2,
        fillColor: '#000080',
        fillOpacity: 0.6,
        map: this.map,
      });
  },

  getBridgeBounds: function(bridge) {
    var coords = [bridge.corner1, bridge.corner2, bridge.corner3, bridge.corner4];
    var maxSouth, maxEast, maxNorth, maxWest;

    coords.forEach( coord => {
      var lat = Number(coord.lat), lng = Number(coord.lng);
      if (maxSouth === undefined || lat < maxSouth ) {maxSouth = lat; }
      if (maxEast === undefined || lng > maxEast) { maxEast = lng;}
      if (maxNorth === undefined || lat > maxNorth) { maxNorth = lat; }
      if (maxWest === undefined || lng < maxWest ) { maxWest = lng; }
    });

    // LatLngBoundsLiteral
    return {
      south: Number(maxSouth),
      east: Number(maxEast),
      north: Number(maxNorth),
      west: Number(maxWest)
    };
  },

  placePanorama: function (latLng) {
    var mapDOMNode = document.getElementById('show-page-pano');
    var panoOptions = {position: latLng, clickToGo: true};
    var pano = new google.maps.StreetViewPanorama(mapDOMNode, panoOptions);
    this.map.setStreetView(pano);
  },

  render: function() {
    return (
      <div className='show-page-map-container'>
        <div className='show-page-map' id='show-page-map'></div>
        <div className='show-page-pano' id='show-page-pano'></div>
      </div>
    );
  }
});

module.exports = ShowMap;
