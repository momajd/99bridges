var React = require('react');

var BridgeIndexItem = React.createClass({
  render: function() {
    return (
      <div className='bridge-index-item' id={this.props.bridge.id}>
        <h3>{this.props.bridge.title}</h3>
        {this.props.bridge.description}
      </div>
    );
  }
});

module.exports = BridgeIndexItem;
