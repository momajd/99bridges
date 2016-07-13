var React = require('react');
var BridgeStore = require('../../stores/bridge_store');
var ClientActions = require('../../actions/client_actions');
var IndexMap = require('./index_map');
var BridgeIndex = require('./bridge_index');
var BridgeFormModal = require('./bridge_form');

var SearchContainer = React.createClass({

  getInitialState: function () {
    return {bridges: BridgeStore.all()};
  },

  updateBridges: function () {
    this.setState({bridges: BridgeStore.all()});
  },

  componentDidMount: function () {
    this.listener = BridgeStore.addListener(this.updateBridges);
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  render: function() {

    return (
      <div className='search-container'>
        <IndexMap bridges={this.state.bridges}/>
        <div className='search-container-right'>
          <BridgeIndex bridges={this.state.bridges}/>
        </div>
      </div>
    );
  }
});

module.exports = SearchContainer;
