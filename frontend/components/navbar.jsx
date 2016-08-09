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
      case 2:
        hashHistory.push('/about');
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

    return (
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">
              <img className='logo-icon' src="data:image/png;base64,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" />
              99Bridges
            </a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>

        <Navbar.Collapse>
          {navRightItems}
          <Nav pullRight onSelect={this.handleSelect}>
            <MenuItem eventKey={2}>About</MenuItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
});

module.exports = Navigation;

// asset pipeline not working on heroku??
// <img className="logo-icon" src="assets/modern-bridge-road-symbol.png"></img>
