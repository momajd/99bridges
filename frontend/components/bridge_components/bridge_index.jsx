var React = require('react');
var BridgeStore = require('../../stores/bridge_store');
var ClientActions = require('../../actions/client_actions');
var BridgeIndexItem = require('./bridge_index_item');

var BridgeIndex = React.createClass({
  getInitialState: function() {
    return {bridges: BridgeStore.all()};
  },

  updateBridges: function() {
    this.setState({bridges: BridgeStore.all()});
  },

  componentDidMount: function() {
    BridgeStore.addListener(this.updateBridges);
    ClientActions.fetchAllBridges();
  },

  render: function() {
    var bridgeKeys = Object.keys(this.props.bridges);
    var bridges = this.props.bridges;
    return (
      <div>
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
