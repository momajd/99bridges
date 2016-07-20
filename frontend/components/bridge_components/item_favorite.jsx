var React = require('react');
var SessionStore = require('../../stores/session_store');
var ClientActions = require('../../actions/client_actions');
var Button = require('react-bootstrap').Button;
var Glyphicon = require('react-bootstrap').Glyphicon;
// TODO include credit in readme http://glyphicons.com/

var ItemFavoriteButton = React.createClass({

  getInitialState: function() {
    return {isUserLoggedIn: SessionStore.isUserLoggedIn()};
  },

  updateLoggedIn: function() {
    this.setState({isUserLoggedIn: SessionStore.isUserLoggedIn()});
  },

  componentDidMount: function() {
    this.listener = SessionStore.addListener(this.updateLoggedIn);
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },

  isFavorite: function() {
    var bridge = this.props.bridge;
    var currentUser = SessionStore.currentUser();

    for (var i = 0; i < bridge.favorites.length; i++) {
      if (bridge.favorites[i].user_id === currentUser.id) {
        return true;
      }
    }
  },

  toggleFavorite: function() {
    var data = {bridge_id: this.props.bridge.id};

    if (this.isFavorite()) {
      ClientActions.deleteFavorite(data);
    } else {
      ClientActions.createFavorite(data);
    }
  },

  render: function() {
    var glyph;
    if (this.state.isUserLoggedIn) {
      glyph = this.isFavorite() ? "star" : "star-empty";
    }

    return (
      <Glyphicon id="glyphicon" onClick={this.toggleFavorite} glyph={glyph} />
    );
  }

});
// <button onClick={this.toggleFavorite}>{text}</button>

module.exports = ItemFavoriteButton;
