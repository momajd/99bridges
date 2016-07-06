var React = require('react');

var BridgeMap = React.createClass({
  render: function () {
    return (
      <div className='map' ref='map'>I'm the map!</div>
    );
  }
});

module.exports = BridgeMap;
