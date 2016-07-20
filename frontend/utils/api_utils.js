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
      url: 'api/users/' + userId,
      success: function(user) {
        ServerActions.receiveUser(user);
      }
    });
  },

  createFavorite: function (favorite) {
    $.ajax({
      url: 'api/favorites',
      type: 'POST',
      data: {favorite: favorite},
      success: function(favoriteData) {
        ServerActions.receiveFavorite(favoriteData);
      }
    });
  },

  deleteFavorite: function (favorite) {
    $.ajax({
      url: 'api/favorites/1', //the id from params will not be used
      type: 'DELETE',
      data: {favorite: favorite},
      success: function(favoriteData) {
        ServerActions.removeFavorite(favoriteData);
      }
    });
  }
};
