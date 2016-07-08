var React = require('react');
var ReactDOM = require('react-dom');
// Components
var SearchContainer = require('./components/bridge_components/search_container');

// TODO remove after testing
window.BridgeStore = require('./stores/bridge_store');
window.ClientActions = require('./actions/client_actions');

var BridgeTracker = React.createClass({
  render: function () {
    return (
      <div>
        <SearchContainer />
      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(<BridgeTracker />, document.getElementById('content'));
});
