var React = require('react');
var BridgeStore = require('../../stores/bridge_store');
var ClientActions = require('../../actions/client_actions');
var BridgeIndexItem = require('./bridge_index_item');

var BridgeIndex = React.createClass({

  render: function() {
    var bridgeKeys = Object.keys(this.props.bridges);
    var bridges = this.props.bridges;
    return (
      <div className="bridge-index">
        {
          bridgeKeys.map(function(key) {
            var bridge = bridges[key];
            return <BridgeIndexItem key={bridge.id} bridge={bridge} />;
          })
        }
      </div>
    );
  }
});

module.exports = BridgeIndex;
