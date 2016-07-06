var React = require('react');
var ReactDOM = require('react-dom');

// TODO remove after testing
window.BridgeStore = require('./stores/bridge_store');
window.ClientActions = require('./actions/client_actions');

var BridgeTracker = React.createClass({
  render: function () {
    return (
      <div>
      Hello there
      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(<BridgeTracker />, document.getElementById('content'));
});
