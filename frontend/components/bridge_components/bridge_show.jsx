var React = require('react');
var ClientActions = require('../../actions/client_actions');
var BridgeStore = require('../../stores/bridge_store');
var ShowMap = require('./show_map');
var BridgeInfo = require('./bridge_info');

var BridgeShow = React.createClass({
  getInitialState: function() {
    this.bridgeId = this.props.params.bridgeId;
    return { bridge: {} };
  },

  onChange: function () {
    var bridge = BridgeStore.find(this.bridgeId);
    this.setState({bridge: bridge});
  },

  componentDidMount: function() {
    this.listener = BridgeStore.addListener(this.onChange);
    ClientActions.fetchSingleBridge(this.bridgeId);
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },

  render: function() {
    return (
      <div className='bridge-show'>
        <BridgeInfo bridge={this.state.bridge}/>
        <ShowMap bridge={this.state.bridge}/>
      </div>
    );
  }
});

module.exports = BridgeShow;
