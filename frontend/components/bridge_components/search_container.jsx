var React = require('react');
var BridgeStore = require('../../stores/bridge_store');
var ClientActions = require('../../actions/client_actions');
var IndexMap = require('./index_map');
var BridgeIndex = require('./bridge_index');
var BridgeFormModal = require('./bridge_form');
var Button = require('react-bootstrap').Button;

var SearchContainer = React.createClass({

  getInitialState: function () {
    return {bridges: BridgeStore.all(), creatingBridge: false};
  },

  updateBridges: function () {
    this.setState({bridges: BridgeStore.all() });
  },

  componentDidMount: function () {
    this.listener = BridgeStore.addListener(this.updateBridges);
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  toggleButton: function () {
    window.mapIsActive = !window.mapIsActive;
    this.setState({creatingBridge: !this.state.creatingBridge});
  },

  render: function() {
    var buttonText = this.state.creatingBridge ? 'Click Map to Create' : 'Create A New Bridge';

    return (
      <div className='search-container'>
        <IndexMap bridges={this.state.bridges}/>
        <div className='index-container'>

          <Button onClick={this.toggleButton}>
            {buttonText}
          </Button>
          <BridgeIndex bridges={this.state.bridges}/>
        </div>
      </div>
    );
  }
});

module.exports = SearchContainer;
