var React = require('react');
var ClientActions = require('../actions/client_actions');
var Errors = require('../components/errors');
var SessionStore = require('../stores/session_store');
var NavItem = require('react-bootstrap').NavItem;
var Modal = require('react-bootstrap').Modal;
var FormControl = require('react-bootstrap').FormControl;
var Button = require('react-bootstrap').Button;

var LoginForm = React.createClass({

  getInitialState: function() {
    return {showModal: false, username: '', password: ''};
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

  handleSubmit: function() {
    var user = {username: this.state.username, password: this.state.password};
    ClientActions.login(user);
  },

  render: function() {
    return (
      <NavItem onClick={this.open}>
        Login

          <Modal show={this.state.showModal} onHide={this.close}>
            <Modal.Header closeButton>
              <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form onSubmit={this.handleSubmit}>
                <FormControl
                  value={this.state.username}
                  placeholder='Username'
                  onChange={this.handleUsernameChange}>
                </FormControl>
                <br/>
                <FormControl
                  type='password'
                  value={this.state.password}
                  placeholder='Password'
                  onChange={this.handlePasswordChange}>
                </FormControl>
                <hr/>
                <Errors/>

                <Button type="submit">
                  Login
                </Button>
              </form>

            </Modal.Body>
          </Modal>

      </NavItem>
    );
  }
});

module.exports = LoginForm;
