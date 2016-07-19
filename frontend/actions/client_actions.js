var ApiUtils = require('../utils/api_utils');
var SessionApiUtils = require('../utils/session_api_utils');

module.exports = {
  fetchAllBridges: function (bounds) {
    ApiUtils.fetchAllBridges(bounds);
  },

  fetchSingleBridge: function (bridgeId) {
    ApiUtils.fetchSingleBridge(bridgeId);
  },

  createBridge: function (bridge) {
    ApiUtils.createBridge(bridge);
  },

  updateBridge: function (bridge) {
    ApiUtils.updateBridge(bridge);
  },

  signUp: function (user) {
    SessionApiUtils.signUp(user);
  },

  login: function (user) {
    SessionApiUtils.login(user);
  },

  logout: function (user) {
    SessionApiUtils.logout(user);
  },

  fetchUser: function (userId) {
    ApiUtils.fetchUser(userId);
  }
};
