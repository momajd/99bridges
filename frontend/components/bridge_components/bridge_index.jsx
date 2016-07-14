var React = require('react');
var BridgeStore = require('../../stores/bridge_store');
var ClientActions = require('../../actions/client_actions');
var BridgeIndexItem = require('./bridge_index_item');

var BridgeIndex = React.createClass({
  // TODO add message to click on map if no bridges are present

  render: function() {
    var bridgeIds = Object.keys(this.props.bridges);
    var bridges = this.props.bridges;
    return (
      <div className="bridge-index">
        {
          bridgeIds.map(function(id) {
            var bridge = bridges[id];
            return <BridgeIndexItem key={id} bridge={bridge} />;
          })
        }
      </div>
    );
  }
});

module.exports = BridgeIndex;
