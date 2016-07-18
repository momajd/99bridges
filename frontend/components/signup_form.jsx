var React = require('react');
var ClientActions = require('../actions/client_actions');
var Errors = require('../components/errors');
var SessionStore = require('../stores/session_store');
var NavItem = require('react-bootstrap').NavItem;
var Modal = require('react-bootstrap').Modal;
var FormGroup = require('react-bootstrap').FormGroup;
var FormControl = require('react-bootstrap').FormControl;
var ControlLabel = require('react-bootstrap').ControlLabel;
var HelpBlock = require('react-bootstrap').HelpBlock;
var Button = require('react-bootstrap').Button;

var SignUpForm = React.createClass({

  getInitialState: function() {
    return {showModal: false, username: '', password1: '', password2: '',
      location: ''};
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

  handlePassword1Change: function(e) {
    this.setState({ password1: e.target.value });
  },

  handlePassword2Change: function(e) {
    this.setState({ password2: e.target.value });
  },

  handleLocationChange: function(e) {
    this.setState({ location: e.target.value });
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var user = {
      username: this.state.username,
      password: this.state.password1,
      location: this.state.location
    };
    ClientActions.signUp(user);
  },

  handleDemo: function() {
    var user = {username: "Guest", password: "password"};
    ClientActions.login(user);
  },

  getValidationState: function() {
    if ((this.state.password1.length === 0) && (this.state.password2.length === 0)) {
      return null;
    }
    if ((this.state.password1 === this.state.password2) && (this.state.password1.length > 5)) {
      return 'success';
    } else {
      return 'error';
    }
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
                  onChange={this.handleUsernameChange}/>
                <br/>

                <FormGroup validationState={this.getValidationState()}>
                  <ControlLabel>Password</ControlLabel>
                  <FormControl
                    type='password'
                    value={this.state.password1}
                    onChange={this.handlePassword1Change} />
                  <FormControl.Feedback/>
                </FormGroup>

                <FormGroup validationState={this.getValidationState()}>
                  <ControlLabel>Confirm Password</ControlLabel>
                  <FormControl
                    type='password'
                    value={this.state.password2}
                    onChange={this.handlePassword2Change} />
                  <FormControl.Feedback/>
                  <HelpBlock>Minimum is 6 characters</HelpBlock>
                </FormGroup>

                <ControlLabel>Location</ControlLabel>
                <FormControl
                  placeholder='e.g. New York City, NY'
                  value={this.state.location}
                  onChange={this.handleLocationChange}/>
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
