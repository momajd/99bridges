var AppDispatcher = require('../dispatcher/dispatcher');
var BridgeConstants = require('../constants/bridge_constants');

module.exports = {
  receiveBridges: function(bridges) {
    AppDispatcher.dispatch({
      actionType: BridgeConstants.BRIDGES_RECEIVED,
      bridges: bridges
    });
  },

  receiveSingleBridge: function(bridge) {
    AppDispatcher.dispatch({
      actionType: BridgeConstants.SINGLE_BRIDGE_RECEIVED,
      bridge: bridge,
    });
  }
};
