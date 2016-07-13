var React = require('react');
var PageHeader = require('react-bootstrap').PageHeader;
var ListGroup = require('react-bootstrap').ListGroup;
var ListGroupItem = require('react-bootstrap').ListGroupItem;

var BridgeInfo = React.createClass({

  render: function() {
    var bridge = this.props.bridge;

    return (
      <div className='show-page-info'>
        <PageHeader>{bridge.title}</PageHeader>
        <ListGroup>
          <ListGroupItem header='Description'>{bridge.description}</ListGroupItem>
          <ListGroupItem header='Latitude'>{bridge.lat}</ListGroupItem>
          <ListGroupItem header='Longitude'>{bridge.lng}</ListGroupItem>
        </ListGroup>
      </div>
    );
  }
});

module.exports = BridgeInfo;
