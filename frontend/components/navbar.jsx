var React = require('react');
var hashHistory = require('react-router').hashHistory;
var SessionStore = require('../stores/session_store');
var ClientActions = require('../actions/client_actions');
var LoginForm = require('./login_form');
var SignUpForm = require('./signup_form');
// react-bootstrap
var Navbar = require('react-bootstrap').Navbar;
var Nav = require('react-bootstrap').Nav;
var NavItem = require('react-bootstrap').NavItem;
var NavDropdown = require('react-bootstrap').NavDropdown;
var MenuItem = require('react-bootstrap').MenuItem;

var Navigation = React.createClass({

  getInitialState: function () {
    return {currentUser: SessionStore.currentUser()};
  },

  updateUser: function () {
    this.setState({currentUser: SessionStore.currentUser()});
  },

  componentDidMount: function() {
    this.listener = SessionStore.addListener(this.updateUser);
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },

  handleSelect: function(eventKey) {
    switch (eventKey) {
      case 1.1:
        hashHistory.push('/users/' + this.state.currentUser.id);
        break;
      case 1.2:
        ClientActions.logout();
        hashHistory.push('#');
        break;
    }
  },

  render: function () {
    var username = this.state.currentUser.username || "" ;
    var dropDown = (
      <Nav pullRight onSelect={this.handleSelect}>
        <NavDropdown eventKey={1} title={username} id="basic-nav-dropdown">
          <MenuItem eventKey={1.1}>My Bridges</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={1.2}>Logout</MenuItem>
        </NavDropdown>
      </Nav>
    );

    var navRightItems = SessionStore.isUserLoggedIn() ? (
      dropDown
    ) : (
      <Nav pullRight>
        <SignUpForm />
        <LoginForm />
      </Nav>
    );
    // TODO give credit to "http://www.flaticon.com/authors/freepik"
    return (
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">
              <img className="logo-icon" src="assets/modern-bridge-road-symbol.png"></img>
              99Bridges
            </a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>

        <Navbar.Collapse>
          {navRightItems}
        </Navbar.Collapse>
      </Navbar>
    );
  }
});

module.exports = Navigation;
