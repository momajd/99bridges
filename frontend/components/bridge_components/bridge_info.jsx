var React = require('react');
var AdditionalInfo = require('./additional_info');
var FavoriteButton = require('./favorite_button');
var DirectionsLink = require('../directions');
var PageHeader = require('react-bootstrap').PageHeader;
var ListGroup = require('react-bootstrap').ListGroup;
var ListGroupItem = require('react-bootstrap').ListGroupItem;
var Image = require('react-bootstrap').Image;

var BridgeInfo = React.createClass({

  render: function() {
    var bridge = this.props.bridge;
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
          <DirectionsLink bridge={bridge} linkText="Get Directions"/>
        </h4>
        <ListGroup>
          <ListGroupItem header='Listed By'>{bridge.author}</ListGroupItem>
          <ListGroupItem header='Latitude'>{bridge.lat}</ListGroupItem>
          <ListGroupItem header='Longitude'>{bridge.lng}</ListGroupItem>
        </ListGroup>

        <AdditionalInfo bridge={bridge}/>
      </div>
    );
  }
});

module.exports = BridgeInfo;
