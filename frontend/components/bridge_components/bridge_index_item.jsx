var React = require('react');
var hashHistory = require('react-router').hashHistory;

var BridgeIndexItem = React.createClass({
  handleClick: function () {
    hashHistory.push(`/bridges/${this.props.bridge.id}`);
  },

  render: function() {
    return (
      <div
        className='bridge-index-item'
        id={this.props.bridge.id}
        onClick={this.handleClick}>

        <h3>{this.props.bridge.title}</h3>
        {this.props.bridge.description}
      </div>
    );
  }
});

module.exports = BridgeIndexItem;
