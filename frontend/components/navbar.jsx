var React = require('react');
var SessionStore = require('../stores/session_store');
var ClientActions = require('../actions/client_actions');
var LoginForm = require('./login_form');
// react-bootstrap
var Navbar = require('react-bootstrap').Navbar;
var Nav = require('react-bootstrap').Nav;
var NavItem = require('react-bootstrap').NavItem;
var NavDropdown = require('react-bootstrap').NavDropdown;
var MenuItem = require('react-bootstrap').MenuItem;
var FormControl = require('react-bootstrap').FormControl;

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

  render: function () {
    var username = this.state.currentUser.username || "" ; 
    var dropDown = (
      <NavDropdown eventKey={3} title={username} id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Action</MenuItem>
        <MenuItem eventKey={3.2}>Another action</MenuItem>
        <MenuItem eventKey={3.3}>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.3}>Logout</MenuItem>
      </NavDropdown>
    );

    var navRightItems = SessionStore.isUserLoggedIn() ? (
      dropDown
    ) : (
      <LoginForm />
    );

    var handleSelect = function(eventKey) {
      switch (eventKey) {
        case 3.3:
          ClientActions.logout();
          break;

      }
    };

    return (
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">99Bridges</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">Link</NavItem>
            <NavItem eventKey={2} href="#">Link</NavItem>
          </Nav>
          <Nav pullRight onSelect={handleSelect}>
            <NavItem eventKey={1} href="#">Link Right</NavItem>
            <NavItem eventKey={2} href="#">Link Right</NavItem>
            {navRightItems}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
});

module.exports = Navigation;
