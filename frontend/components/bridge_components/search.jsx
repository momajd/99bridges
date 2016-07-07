var React = require('react');
var BridgeStore = require('../../stores/bridge_store');
var ClientActions = require('../../actions/client_actions');
var BridgeMap = require('./bridge_map');
var BridgeIndex = require('./bridge_index');

var Search = React.createClass({

  getInitialState: function () {
    return {bridges: BridgeStore.all()};
  },

  updateBridges: function () {
    console.log("bridges updated in Search component");
    this.setState({bridges: BridgeStore.all()});
  },

  componentDidMount: function () {
    BridgeStore.addListener(this.updateBridges);
    // ClientActions.fetchAllBridges();
    console.log("Search componentDidMount");
  },

  render: function() {
    console.log("Search-render");
    return (
      <div>
        <BridgeMap bridges={this.state.bridges}/>
        <BridgeIndex bridges={this.state.bridges}/>
      </div>
    );
  }
});

module.exports = Search;
