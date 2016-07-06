var React = require('react');

var BridgeIndexItem = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.bridge.title}
        {this.props.bridge.description}
      </div>
    );
  }
});

module.exports = BridgeIndexItem;
