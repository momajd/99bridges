var React = require('react');
var ReactDOM = require('react-dom');
// Components
var BridgeIndex = require('./components/bridge_components/bridge_index');

// TODO remove after testing
window.BridgeStore = require('./stores/bridge_store');
window.ClientActions = require('./actions/client_actions');

var BridgeTracker = React.createClass({
  render: function () {
    return (
      <div>
        <BridgeIndex />
      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(<BridgeTracker />, document.getElementById('content'));
});
