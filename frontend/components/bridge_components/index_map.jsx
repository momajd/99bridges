/* global google */
/* eslint max-len: "off" */
var React = require('react');
var ReactDOM = require('react-dom');
var hashHistory = require('react-router').hashHistory;
var ClientActions = require('../../actions/client_actions');
var BridgeFormModal = require('./bridge_form');
var NewBridgeForm = require('./bridge_form');
var SessionStore = require('../../stores/session_store');
var Modal = require('react-bootstrap').Modal;
var Button = require('react-bootstrap').Button;
var OverlayTrigger = require('react-bootstrap').OverlayTrigger;
var Popover = require('react-bootstrap').Popover;

var IndexMap = React.createClass({

  getInitialState: function() {
    return {
      showModal: false,
      mapIsClickable: (SessionStore.isUserLoggedIn() ? true : false)
    };
  },

  closeModal: function() {
    this.setState({showModal: false});
  },

  openModal: function() {
    this.setState({showModal: true});
  },

  updateMapClickability: function() {
    this.setState(
      {mapIsClickable: (SessionStore.isUserLoggedIn() ? true : false)}
    );
  },

  componentDidMount: function() {
    this.placeMap();
    this.polygons = {};

    this.sessionListener = SessionStore.addListener(this.updateMapClickability);

    // fetch bridges after map location has been changed
    var self = this;
    google.maps.event.addListener(this.map, 'idle', function() {
      var bounds = self.getMapBounds();
      ClientActions.fetchAllBridges(bounds);
    });

    this.newBridgeCoords = [];
    this.tempMarkers = [];
    google.maps.event.addListener(this.map, 'click', function(e) {
      if (self.state.mapIsClickable) {
        var coord = {lat: e.latLng.lat(), lng: e.latLng.lng()};
        self.newBridgeCoords.push(coord);

        // temporary marker to represent a corner
        var marker = new google.maps.Marker(
          {position: e.latLng, map: self.map}
          );
        self.tempMarkers.push(marker);

        if (self.newBridgeCoords.length === 4) {
          self.tempMarkers.forEach(tempMarker => tempMarker.setMap(null));
          self.openModal();
          self.newBridgeCoords = [];
        }
      }
    });

    //Close modal when form for new bridge has been submitted
    document.addEventListener('submit', this.closeModal);
  },

  componentWillUnmount: function() {
    document.removeEventListener('submit', this.closeModal);
    this.sessionListener.remove();
  },

  componentDidUpdate: function() {
    this.updatePolygons();
    this.addIndexHoverEffects();
  },

  getMapBounds: function() {
  // return object to be parsed by backend API
    var latLngBoundsObj = this.map.getBounds();
    var northEast = latLngBoundsObj.getNorthEast();
    var southWest = latLngBoundsObj.getSouthWest();

    return {
      northEast: {lat: northEast.lat(), lng: northEast.lng()},
      southWest: {lat: southWest.lat(), lng: southWest.lng()}
    };
  },

  placeMap: function () {
    var mapDOMNode = document.getElementById('index-map');
    var mapOptions = {
      // center: {lat: 37.7758, lng: -122.435}, //SF
      center: {lat: 40.7049859197089, lng: -73.9956557750702}, //NYC
      zoom: 11,
    };
    this.map = new google.maps.Map(mapDOMNode, mapOptions);
  },

  updatePolygons: function () {
    this.newBridgesToAdd().forEach( bridge => { this.createPolygon(bridge);} );
    this.polygonsToRemove().forEach( poly => {this.removePolygon(poly); });
  },

  newBridgesToAdd: function () {
    var allBridges = this.props.bridges;
    var newBridges = [];
    // add if a bridge in the props is not yet in this.polygons
    var self = this;
    for (var bridgeId in allBridges) {
      if (!self.polygons.hasOwnProperty(bridgeId) ) {
        newBridges.push(allBridges[bridgeId]);
      }
    }
    return newBridges;
  },

  polygonsToRemove: function () {
    var allBridges = this.props.bridges;
    var removePolygons = [];

    // remove a bridge if it is in this.polygons but wasn't received by props
    var self = this;
    Object.keys(this.polygons).forEach(function(bridgeId) {
      var polygon = self.polygons[bridgeId];
      if ( !allBridges.hasOwnProperty(bridgeId) ) {
         removePolygons.push(polygon);
      }
    });
    return removePolygons;
  },

  removePolygon: function (polygon) {
    polygon.setMap(null);
    delete this.polygons[polygon.bridgeId];
  },

  createPolygon: function (bridge) {
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
        bridgeId: bridge.id,
        centerCoord: {lat: bridge.center_lat, lng: bridge.center_lng},
        url: 'bridges/' + bridge.id
      });

    google.maps.event.addListener(polygon, 'click', function() {
      hashHistory.push(polygon.url);
    });

    this.createInfoWindow(bridge, polygon);
    this.addPolygonHoverEffects(polygon);
    this.polygons[bridge.id] = polygon;
  },

  createInfoWindow: function (bridge, polygon) {
    var bridgeId = bridge.id;
    var infoWindow = new google.maps.InfoWindow({
      content: (
        `<div class=info-window>
          <strong> <a href=#/bridges/${bridge.id}> ${bridge.title} </a></strong>
          <div>
            lat: ${bridge.center_lat.toFixed(5)},
            lng: ${bridge.center_lng.toFixed(5)}
          </div>
        </div>`
      )
    });
    polygon.infoWindow = infoWindow;
  },

  addPolygonHoverEffects: function(polygon) {
    var self = this;
    google.maps.event.addListener(polygon, 'mouseover', function() {
      polygon.setOptions({fillColor: "#FF0000", strokeColor: "#FF0000"});
      polygon.infoWindow.open(self.map);
      polygon.infoWindow.setPosition(polygon.centerCoord);
    });

    google.maps.event.addListener(this.map, 'mousemove', function() {
      polygon.setOptions({fillColor: "#000080", strokeColor: "#000080"});
      polygon.infoWindow.close();
    });
  },

  addIndexHoverEffects: function() {
    // highlight polygon when user hovers over the respective index item
    var index = $('.bridge-index-item');

    var self = this;
    for (let i=1; i <= index.length; i++) {
      var indexItem = $(`.bridge-index-item:nth-child(${i})`);
      let bridgeId = indexItem[0].id;

      indexItem.hover(function(){
        var polygon = self.polygons[bridgeId];
        polygon.setOptions({fillColor: "#FF0000", strokeColor: "#FF0000"});
        polygon.infoWindow.open(self.map);
        polygon.infoWindow.setPosition(polygon.centerCoord);
      }, function() {
        var polygon = self.polygons[bridgeId];
        polygon.setOptions({fillColor: "#000080", strokeColor: "#000080"});
        polygon.infoWindow.close();
      });
    }
  },

  render: function () {
    var popoverMessage = this.state.mapIsClickable ? (
      'For new bridge, click 4 points') :
      ('Sign in to create a bridge');

    return (
      <OverlayTrigger placement="top"
        overlay={<Popover id='popover'>{popoverMessage}</Popover>}>

        <div className='map-container'>
          <div className='index-map' id='index-map'></div>

          <Modal show={this.state.showModal} onHide={this.closeModal}>
            <Modal.Header closeButton>
              <Modal.Title>Create a New Bridge</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <NewBridgeForm coords={this.newBridgeCoords}/>
            </Modal.Body>
          </Modal>
        </div>
      </OverlayTrigger>
    );
  }
});

module.exports = IndexMap;

// TODO use to move map to user location
// var geocoder = new google.maps.Geocoder;
// var location
//
// var self = this;
// geocoder.geocode({address: 'San Diego, CA'}, function(results, status) {
//   console.log(arguments);
//   if (status === "OK") {
//     location = results[0].geometry.location;
//     self.map.panTo(location);
//   }
// });

// for street view (removed from infoWindow)
// var pano = null;
// google.maps.event.addListener(infoWindow, 'domready', function () {
//     if (pano !== null) {
//         pano.unbind("position");
//         pano.setVisible(false);
//     }
//     pano = new google.maps.StreetViewPanorama(document.getElementById(bridgeId), {
//         navigationControl: true,
//         navigationControlOptions: { style: google.maps.NavigationControlStyle.ANDROID },
//         enableCloseButton: false,
//         addressControl: false,
//         linksControl: false
//     });
//     pano.bindTo("position", polygon.centerCoord);
//     pano.setVisible(true);
// });
