var React = require('react');
var SessionStore = require('../../stores/session_store');
var UserBridges = require('./user_bridges');
var PageHeader = require('react-bootstrap').PageHeader;
var ListGroup = require('react-bootstrap').ListGroup;
var ListGroupItem = require('react-bootstrap').ListGroupItem;

var UserShow = React.createClass({

  render: function() {
    var user = SessionStore.currentUser();
    return (
      <div className='user-show-page'>
        <PageHeader>
          {user.username}
          <br/>
          <small>{user.location}</small>
        </PageHeader>
        <UserBridges user={user}/>
      </div>
    );
  }

});

module.exports = UserShow;
