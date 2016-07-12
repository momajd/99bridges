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

  createBridge: function(bridge) {
    $.ajax({
      type: 'POST',
      url: 'api/bridges',
      data: {bridge: bridge},
      success: ServerActions.receiveSingleBridge(bridge)
    });
  }
};
