var React = require('react');
var BridgeStore = require('../../stores/bridge_store');
var ClientActions = require('../../actions/client_actions');
var BridgeMap = require('./bridge_map');
var BridgeIndex = require('./bridge_index');

var SearchContainer = React.createClass({

  getInitialState: function () {
    return {bridges: BridgeStore.all()};
  },

  updateBridges: function () {
    this.setState({bridges: BridgeStore.all()});
  },

  componentDidMount: function () {
    BridgeStore.addListener(this.updateBridges);
  },

  render: function() {
    return (
      <div className='search-container'>
        <BridgeMap bridges={this.state.bridges}/>
        <BridgeIndex bridges={this.state.bridges}/>
      </div>
    );
  }
});

module.exports = SearchContainer;
