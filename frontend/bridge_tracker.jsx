var React = require('react');
var ReactDOM = require('react-dom');

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
