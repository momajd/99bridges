var ApiUtils = require('../utils/api_utils');

module.exports = {
  fetchAllBridges: function (bounds) {
    ApiUtils.fetchAllBridges(bounds);
  },

  createBridge: function(bridge) {
    ApiUtils.createBridge(bridge);
  }

};
