var React = require('react');
var UserBridges = require('./user_bridges');
var ClientActions = require('../../actions/client_actions');
var UserStore = require('../../stores/user_store');
var PageHeader = require('react-bootstrap').PageHeader;
var ListGroup = require('react-bootstrap').ListGroup;
var ListGroupItem = require('react-bootstrap').ListGroupItem;

var UserShow = React.createClass({

  getInitialState: function() {
    return { user: {} };
  },

  updateUser: function() {
    this.setState({user: UserStore.user()});
  },

  componentDidMount: function() {
    ClientActions.fetchUser(this.props.params.userId);
    this.listener = UserStore.addListener(this.updateUser);
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },

  render: function() {
    var user = this.state.user;
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
