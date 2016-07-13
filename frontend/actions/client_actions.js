var ApiUtils = require('../utils/api_utils');

module.exports = {
  fetchAllBridges: function (bounds) {
    ApiUtils.fetchAllBridges(bounds);
  },

  fetchSingleBridge: function (bridgeId) {
    ApiUtils.fetchSingleBridge(bridgeId);
  },

  createBridge: function(bridge) {
    ApiUtils.createBridge(bridge);
  }

};
