var AppDispatcher = require('../dispatcher/dispatcher');
var BridgeConstants = require('../constants/bridge_constants');

module.exports = {
  receiveBridges: function(bridges) {
    AppDispatcher.dispatch({
      actionType: BridgeConstants.BRIDGES_RECEIVED,
      bridges: bridges
    });
  }
};
