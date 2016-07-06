var React = require('react');
var BridgeStore = require('../../stores/bridge_store');
var ClientActions = require('../../actions/client_actions');

var BridgeIndex = React.createClass({
  getInitialState: function() {
    return {bridges: BridgeStore.all()};
  },

  updateBenches: function() {
    this.setState({bridges: BridgeStore.all()});
  },

  componentDidMount: function() {
    BridgeStore.addListener(this.updateBenches);
    ClientActions.fetchAllBridges();
  },

  render: function() {
    var bridgeKeys = Object.keys(this.state.bridges);
    var bridges = this.state.bridges;
    return (
      <div>
        {
          bridgeKeys.map(function(key) {
            var bridge = bridges[key];
            return <div key={bridge.id}>{bridge.title}</div>;
          })
        }
      </div>
    );
  }
});

module.exports = BridgeIndex;
