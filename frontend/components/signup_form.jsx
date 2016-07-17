var React = require('react');
var ClientActions = require('../actions/client_actions');
var Errors = require('../components/errors');
var SessionStore = require('../stores/session_store');
var NavItem = require('react-bootstrap').NavItem;
var Modal = require('react-bootstrap').Modal;
var FormControl = require('react-bootstrap').FormControl;
var ControlLabel = require('react-bootstrap').ControlLabel;
var Button = require('react-bootstrap').Button;

var SignUpForm = React.createClass({

  getInitialState: function() {
    return {showModal: false, username: '', password: '', location: ''};
  },

  componentDidMount: function() {
    this.listener = SessionStore.addListener(this.close);
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },

  close: function() {
    this.setState({ showModal: false });
  },

  open: function() {
    this.setState({ showModal: true });
  },

  handleUsernameChange: function(e) {
    this.setState({ username: e.target.value });
  },

  handlePasswordChange: function(e) {
    this.setState({ password: e.target.value });
  },

  handleLocationChange: function(e) {
    this.setState({ location: e.target.value });
  },

  handleSubmit: function() {
    var user = {
      username: this.state.username,
      password: this.state.password,
      location: this.state.location
    };
    ClientActions.signUp(user);
  },

  handleDemo: function() {
    var user = {username: "Guest", password: "password"};
    ClientActions.login(user);
  },

  render: function() {
    return (
      <NavItem onClick={this.open}>
        Sign Up

          <Modal show={this.state.showModal} onHide={this.close}>
            <Modal.Header closeButton>
              <Modal.Title>Create a New Account</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form onSubmit={this.handleSubmit}>

                <ControlLabel>Username</ControlLabel>
                <FormControl
                  value={this.state.username}
                  onChange={this.handleUsernameChange}>
                </FormControl>
                <br/>

                <ControlLabel>Password</ControlLabel>
                <FormControl
                  type='password'
                  value={this.state.password}
                  onChange={this.handlePasswordChange}>
                </FormControl>
                <br/>

                <ControlLabel>Location</ControlLabel>
                <FormControl
                  type='password'
                  value={this.state.location}
                  onChange={this.handleLocationChange}>
                </FormControl>
                <hr/>
                <Errors/>

                <Button type="submit">
                  Submit
                </Button>
                <br/>
              </form>
              <Button onClick={this.handleDemo}>
                Demo Account
              </Button>
            </Modal.Body>
          </Modal>

      </NavItem>
    );
  }
});

module.exports = SignUpForm;
