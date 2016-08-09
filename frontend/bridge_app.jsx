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
var About = require('./components/about');
// Actions
var ServerActions = require('./actions/server_actions');
// Stores
var SessionStore = require('./stores/session_store');

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
      <Route path="about" component={About}/>
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
