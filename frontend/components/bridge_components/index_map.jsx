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
    }
  },

  closeModal: function() {
    this.setState({showModal: false});
  },

  openModal: function() {
    this.setState({showModal: true});
  },

  updateMapClickability: function() {
    this.setState({mapIsClickable: (SessionStore.isUserLoggedIn() ? true : false)})
  },

  componentDidMount: function() {
    this.placeMap();
    this.markers = {};

    this.sessionListener = SessionStore.addListener(this.updateMapClickability);

    // fetch bridges after map location has been changed
    var self = this;
    google.maps.event.addListener(this.map, 'idle', function() {
      var bounds = self.getMapBounds();
      ClientActions.fetchAllBridges(bounds);
    });

    // Open form for new bridge when map is clicked
    google.maps.event.addListener(this.map, 'click', function(e) {
      if (self.state.mapIsClickable) {
        self.newBridgeCoords = e.latLng;
        self.openModal();
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
    this.updateMarkers();
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
    Object.keys(allBridges).forEach(function(bridgeId) {
      if (!self.markers.hasOwnProperty(bridgeId) ) {
        newBridges.push(allBridges[bridgeId]);
      }
    });
    return newBridges;
  },

  markersToRemove: function () {
    var allBridges = this.props.bridges;
    var removeMarkers = [];

    // remove a bridge if it is in the markers but wasn't received by props
    var self = this;
    Object.keys(this.markers).forEach(function(bridgeId) {
      var marker = self.markers[bridgeId];
      if ( !allBridges.hasOwnProperty(bridgeId) ) {
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
        url: 'http://maps.google.com/mapfiles/marker_purple.png'
      },
      url: "/bridges/" + bridge.id
    });
    google.maps.event.addListener(marker, 'click', function() {
      hashHistory.push(marker.url);
    })

    this.createInfoWindow(bridge, marker);
    this.createMarkerHoverEffects();
    this.markers[bridge.id] = marker;
  },

  createInfoWindow: function (bridge, marker) {
    var bridgeId = bridge.id;
    var infoWindow = new google.maps.InfoWindow({
      content: (
        `<div class=info-window-text>
          <h4> <a href=#/bridges/${bridge.id}> ${bridge.title} </a></h4>
        </div>
        <div class=street-view id=${bridge.id}></div>`
      )
    });
    //keep a reference to each marker's infoWindow (see createMarkerHoverEffects)
    marker.infoWindow = infoWindow;

    // for street view
    var pano = null;
    google.maps.event.addListener(infoWindow, 'domready', function () {
        if (pano != null) {
            pano.unbind("position");
            pano.setVisible(false);
        }
        pano = new google.maps.StreetViewPanorama(document.getElementById(bridgeId), {
            navigationControl: true,
            navigationControlOptions: { style: google.maps.NavigationControlStyle.ANDROID },
            enableCloseButton: false,
            addressControl: false,
            linksControl: false
        });
        pano.bindTo("position", marker);
        pano.setVisible(true);
    });

    var self = this;
    google.maps.event.addListener(marker, 'mouseover', function() {
      infoWindow.open(self.map, marker);
    });

    google.maps.event.addListener(this.map, 'mousemove', function() {
      infoWindow.close();
    });
  },

  removeMarker: function (marker) {
    marker.setMap(null);
    delete this.markers[marker.bridgeId];
  },

  createMarkerHoverEffects: function() {
    var index = $('.bridge-index-item');

    var self = this;
    for (let i=1; i <= index.length; i++) {
      var indexItem = $(`.bridge-index-item:nth-child(${i})`);
      let bridgeId = indexItem[0].id;

      indexItem.hover(function(){
        self.markers[bridgeId].setAnimation(google.maps.Animation.BOUNCE);
        self.markers[bridgeId].infoWindow.open(self.map, self.markers[bridgeId])
      }, function() {
        self.markers[bridgeId].setAnimation(null);
        self.markers[bridgeId].infoWindow.close();
      });
    }
  },

  render: function () {
    var popoverMessage = this.state.mapIsClickable ? (
      'Click map to create a bridge') :
      ('Sign in to create a bridge')

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
