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

// TODO remove after testing
window.BridgeStore = require('./stores/bridge_store');
window.SessionStore = require('./stores/session_store');
window.ClientActions = require('./actions/client_actions');
window.SessionUtils = require('./utils/session_api_util');

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
    </Route>
  </Router>
);

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(appRouter, document.getElementById('content'));
});
