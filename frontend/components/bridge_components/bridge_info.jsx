var React = require('react');
var PageHeader = require('react-bootstrap').PageHeader;
var ListGroup = require('react-bootstrap').ListGroup;
var ListGroupItem = require('react-bootstrap').ListGroupItem;
var Image = require('react-bootstrap').Image;

var BridgeInfo = React.createClass({

  render: function() {
    var bridge = this.props.bridge;
    // TODO add collapsable table for additional input
    return (
      <div className='show-page-info'>
        <PageHeader>
          <Image src={bridge.img_url} rounded responsive/>
          {bridge.title}
          <br/>
          <small>{bridge.description}</small>
        </PageHeader>

        <ListGroup>
          <ListGroupItem header='Listed By'>{bridge.author}</ListGroupItem>
          <ListGroupItem header='Latitude'>{bridge.lat}</ListGroupItem>
          <ListGroupItem header='Longitude'>{bridge.lng}</ListGroupItem>
        </ListGroup>
      </div>
    );
  }
});

module.exports = BridgeInfo;
