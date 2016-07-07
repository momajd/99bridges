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
  }
};
