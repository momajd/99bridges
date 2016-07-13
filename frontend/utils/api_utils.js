var ServerActions = require('../actions/server_actions');

module.exports = {
  fetchAllBridges: function(bounds) {
    $.ajax({
      url: 'api/bridges',
      data: {bounds: bounds},
      success: function(bridges){
        ServerActions.receiveBridges(bridges);
      }
    });
  },

  fetchSingleBridge: function (bridgeId) {
    $.ajax({
      url: 'api/bridges/' + bridgeId,
      success: function (bridge) {
        ServerActions.receiveSingleBridge(bridge);
      }
    });
  },

  createBridge: function(bridge) {
    $.ajax({
      type: 'POST',
      url: 'api/bridges',
      data: {bridge: bridge},
      success: function(bridge) {
        ServerActions.receiveSingleBridge(bridge);
      }
    });
  }
};
