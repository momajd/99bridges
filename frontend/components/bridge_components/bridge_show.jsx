var React = require('react');
var ClientActions = require('../../actions/client_actions');
var BridgeStore = require('../../stores/bridge_store');
var BridgeMap = require('./bridge_map');

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

  // TODO change map to undraggable??

  render: function() {
    var bridges = {};
    return (
      <div className='bridge-show'>
        {this.state.bridge.title}
        <BridgeMap bridges={bridges}/>
      </div>
    );
  }
});

module.exports = BridgeShow;
