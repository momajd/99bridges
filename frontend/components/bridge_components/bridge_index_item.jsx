var React = require('react');
var hashHistory = require('react-router').hashHistory;
var SessionStore = require('../../stores/session_store');
var ClientActions = require('../../actions/client_actions');
var Image = require('react-bootstrap').Image;

var BridgeIndexItem = React.createClass({
  getInitialState: function() {
    return {test: "testing"}
  },

  handleClick: function (e) {
    if (e.target.nodeName === "BUTTON") return;
    hashHistory.push(`/bridges/${this.props.bridge.id}`);
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
    var text = this.isFavorite() ? 'unsave' : 'save';

    return (
      <div
        className='bridge-index-item'
        id={this.props.bridge.id}
        onClick={this.handleClick}>

        <Image src={this.props.bridge.img_url} rounded responsive/>
        <div>
          <h3>{this.props.bridge.title}</h3>
          {this.props.bridge.description}
        </div>

        <button onClick={this.toggleFavorite}>{text}</button>

      </div>
    );
  }
});

module.exports = BridgeIndexItem;
