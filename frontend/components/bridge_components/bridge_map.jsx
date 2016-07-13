var React = require('react');
var ReactDOM = require('react-dom');
var ClientActions = require('../../actions/client_actions');
var BridgeFormModal = require('./bridge_form');
var Modal = require('react-bootstrap').Modal;
var Button = require('react-bootstrap').Button;
var NewBridgeForm = require('./bridge_form');

var BridgeMap = React.createClass({

  getInitialState: function() {
    return { showModal: false}
  },

  closeModal: function() {
    this.setState({showModal: false});
  },

  openModal: function() {
    this.setState({showModal: true});
  },

  componentDidMount: function() {
    this.placeMap();
    this.markers = {};

    // fetch bridges after map location has been changed
    var self = this;
    google.maps.event.addListener(this.map, 'idle', function() {
      var bounds = self.getMapBounds();
      ClientActions.fetchAllBridges(bounds);
    });

    // Open form for new bridge when map is clicked
    google.maps.event.addListener(this.map, 'click', function(e) {
      self.newBridgeCoords = e.latLng;
      self.openModal();
    });

    //Close modal when form for new bridge has been submitted
    document.addEventListener('submit', this.closeModal);
  },

  componentWillUnmount: function() {
    document.removeEventListener('submit', this.closeModal);
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
    var mapDOMNode = ReactDOM.findDOMNode(this.refs.map);
    var mapOptions = {
      center: {lat: 37.7758, lng: -122.435}, // TODO update to user location
      zoom: 12,
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

  // TODO: must add credit: Designed by Freepik and distributed by Flaticon
  createMarker: function (bridge) {
    var markerPos = {lat: bridge.lat, lng: bridge.lng};
    var marker = new google.maps.Marker({
      position: markerPos,
      map: this.map,
      bridgeId: bridge.id,
      icon: {
        url: 'http://maps.google.com/mapfiles/marker_purple.png'
      }
    });

    this.createInfoWindow(bridge, marker);
    this.createMarkerHoverEffects();
    this.markers[bridge.id] = marker;
  },

  createInfoWindow: function (bridge, marker) {
    var bridgeId = bridge.id;
    var infoWindow = new google.maps.InfoWindow({
      content: '<h3>' + bridge.title + '</h3>' + '<div class=street-view id='+ bridgeId + '></div>'
    });
    marker.infoWindow = infoWindow; //keep a reference to each marker's infoWindow

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
      var indexItem = $('.bridge-index-item:nth-child('+i+')');
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
    return (
      <div className='map-container'>
        <div className='map' ref='map'></div>

        <Modal show={this.state.showModal} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Create a New Bridge</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <NewBridgeForm coords={this.newBridgeCoords}/>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
});

module.exports = BridgeMap;
