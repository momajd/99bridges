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
      success: function(bridgeData) {
        ServerActions.receiveSingleBridge(bridgeData);
      }
    });
  },

  updateBridge: function(bridge) {
    $.ajax({
      url: 'api/bridges/' + bridge.id,
      type: 'PATCH',
      data: {bridge: bridge},
      success: function (bridgeData) {
        ServerActions.receiveSingleBridge(bridgeData);
      }
    });
  },

  fetchUser: function (userId) {
    $.ajax({
      url: '/api/users/' + userId,
      success: function(user) {
        ServerActions.receiveUser(user);
      }
    });
  }
};
