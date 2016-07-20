var React = require('react');
var SessionStore = require('../../stores/session_store');
var ClientActions = require('../../actions/client_actions');


var ItemFavoriteButton = React.createClass({

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
    var text = this.isFavorite() ? 'unsave' : 'save';

    return (
      <button onClick={this.toggleFavorite}>{text}</button>
    );
  }

});

module.exports = ItemFavoriteButton;
