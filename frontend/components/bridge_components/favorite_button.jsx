var React = require('react');
var SessionStore = require('../../stores/session_store');
var ClientActions = require('../../actions/client_actions');
var Button = require('react-bootstrap').Button;
var Glyphicon = require('react-bootstrap').Glyphicon;

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
    if (!bridge.favorites) return;

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
    var favoriteButton;
    if (this.state.isUserLoggedIn) {
      //is there a better way to check if we are at the index page?
      if (window.location.hash.includes('#/?') ) {
        // button for the index page
        var glyph = this.isFavorite() ? "star" : "star-empty";
        favoriteButton = (
        <Glyphicon id="glyphicon" title="Add to Saved Bridges" onClick={this.toggleFavorite} glyph={glyph} />
        );
      } else {
        // button for the user pager
        var buttonText, style, checkmark;
        if (this.isFavorite() ) {
          buttonText = "Saved ";
          style = "warning";
          checkmark = <Glyphicon glyph="ok" />;
        } else {
          buttonText = "Add to Saved Bridges";
          style = "primary";
        }

        favoriteButton = (
          <Button bsStyle={style }onClick={this.toggleFavorite}>
            {buttonText}
            {checkmark}
          </Button>
        );
      }
    }

    return (
      <div>
        {favoriteButton}
      </div>
    );
  }

});

module.exports = ItemFavoriteButton;
