var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
// Components
var SearchContainer = require('./components/bridge_components/search_container');
var Navbar = require('./components/navbar');
var BridgeShow = require('./components/bridge_components/bridge_show');
var UserShow = require('./components/user_components/user_show');
// Actions
var ServerActions = require('./actions/server_actions');
// Stores
var SessionStore = require('./stores/session_store');

// TODO remove after testing
window.BridgeStore = require('./stores/bridge_store');
window.SessionStore = require('./stores/session_store');
window.ClientActions = require('./actions/client_actions');
window.SessionUtils = require('./utils/session_api_utils');
window.ErrorStore = require('./stores/error_store');
window.UserStore = require('./stores/user_store');

var App = React.createClass({
  render: function () {
    return (
      <div>
        <Navbar />
        {this.props.children}
      </div>
    );
  }
});

var appRouter = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={SearchContainer}/>
      <Route path="bridges/:bridgeId" component={BridgeShow}/>
      <Route path="users/:userId" component={UserShow} onEnter={_ensureLoggedIn}/>
    </Route>
  </Router>
);

function _ensureLoggedIn(nextState, replace) {
    if (!SessionStore.isUserLoggedIn()) {
      replace('#');
    }
}

document.addEventListener("DOMContentLoaded", function() {
  if (window.currentUser) {ServerActions.receiveCurrentUser(window.currentUser)};
  ReactDOM.render(appRouter, document.getElementById('content'));
});
