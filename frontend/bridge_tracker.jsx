const React = require('react');
const ReactDOM = require('react-dom');

var BridgeTracker = React.createClass({
  render: function () {
    <div>
      Hello there
    </div>
  }
});

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<BridgeTracker/>, document.getElementById('content'))
});
