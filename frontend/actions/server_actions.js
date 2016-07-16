var AppDispatcher = require('../dispatcher/dispatcher');
var BridgeConstants = require('../constants/bridge_constants');
var SessionConstants = require('../constants/session_constants');
var ErrorConstants = require('../constants/error_constants');

module.exports = {
  receiveBridges: function(bridges) {
    AppDispatcher.dispatch({
      actionType: BridgeConstants.BRIDGES_RECEIVED,
      bridges: bridges
    });
  },

  receiveSingleBridge: function(bridge) {
    AppDispatcher.dispatch({
      actionType: BridgeConstants.SINGLE_BRIDGE_RECEIVED,
      bridge: bridge,
    });
  },

  loginUser: function(user) {
    AppDispatcher.dispatch({
      actionType: SessionConstants.USER_LOGIN,
      user: user
    });
  },

  logoutUser: function(user) {
    AppDispatcher.dispatch({
      actionType: SessionConstants.USER_LOGOUT,
      user: user
    });
  },

  receiveErrors: function(errors) {
    console.log('server actions')
    AppDispatcher.dispatch({
      actionType: ErrorConstants.ERRORS_RECEIVED,
      errors: errors
    });
  }
};
