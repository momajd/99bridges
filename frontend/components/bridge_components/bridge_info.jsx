var React = require('react');
var ClientActions = require('../../actions/client_actions');
var SessionStore = require('../../stores/session_store');
var AdditionalInfo = require('./additional_info');
var FavoriteButton = require('./favorite_button');
var DirectionsLink = require('../directions');
var PageHeader = require('react-bootstrap').PageHeader;
var ListGroup = require('react-bootstrap').ListGroup;
var ListGroupItem = require('react-bootstrap').ListGroupItem;
var Image = require('react-bootstrap').Image;
var Button = require('react-bootstrap').Button;

var BridgeInfo = React.createClass({

  deleteBridge: function() {
    if (confirm("Are you sure? This can't be undone")) {
      ClientActions.deleteBridge(this.props.bridge);
      window.location = '#';
    }
  },

  render: function() {
    var bridge = this.props.bridge;

    var deleteButton = SessionStore.isUserLoggedIn() ? (
      <Button bsStyle='danger' onClick={this.deleteBridge}>Delete Bridge
      </Button> ) : null;

    return (
      <div className='show-page-info'>
        <PageHeader>
          <Image src={bridge.img_url} rounded responsive/>
          {bridge.title}
          <br/>
          <small>{bridge.description}</small>
          <FavoriteButton bridge={this.props.bridge}/>
        </PageHeader>

        <h4>

        </h4>
        <ListGroup>
          <ListGroupItem header='Listed By'>{bridge.author}</ListGroupItem>
          <ListGroupItem header='Latitude'>{bridge.lat}</ListGroupItem>
          <ListGroupItem header='Longitude'>{bridge.lng}</ListGroupItem>
          <ListGroupItem header='Directions'>
            <DirectionsLink bridge={bridge} linkText="Link to Google Maps"/>
          </ListGroupItem>
        </ListGroup>

        <AdditionalInfo bridge={bridge}/>
        {deleteButton}
      </div>
    );
  }
});

module.exports = BridgeInfo;
