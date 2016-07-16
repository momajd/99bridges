var ServerActions = require('../actions/server_actions');

module.exports = {
  signUp: function(user) {
    $.ajax({
      type: 'POST',
      url: 'api/users',
      data: {user: user},
      success: function(userData) {
        ServerActions.loginUser(userData);
      },
      error: function(xhrObject) {
        var errors = xhrObject.responseJSON;
        ServerActions.receiveErrors(errors);
      }
    });
  },

  login: function(user) {
    $.ajax({
      type: 'POST',
      url: 'api/session',
      data: {user: user},
      success: function(userData) {
        ServerActions.receiveCurrentUser(userData);
      },
      error: function(xhrObject) {
        var errors = xhrObject.responseJSON;
        ServerActions.receiveErrors(errors);
      }
    });
  },

  logout: function() {
    $.ajax({
      type: 'DELETE',
      url: 'api/session',
      success: function(user) {
        ServerActions.logoutUser(user);
      }
    });
  }
};
