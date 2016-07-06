var ServerActions = require('../actions/server_actions');

module.exports = {
  fetchAllBridges: function() {
    $.ajax({
      url: 'api/bridges',
      success: function(bridges){
        ServerActions.receiveBridges(bridges);
      }
    });
  }
};
