var ServerActions = require('../actions/server_actions');

module.exports = {
  signUp: function(user) {
    $.ajax({
      type: 'POST',
      url: 'api/users',
      data: {user: user},
      success: function(userData) {
        ServerActions.loginUser(userData);
      }
    });
  },

  logIn: function(user) {
    $.ajax({
      type: 'POST',
      url: 'api/session',
      data: {user: user},
      success: function(userData) {
        ServerActions.loginUser(userData);
      }
    });
  },

  logOut: function() {
    $.ajax({
      type: 'DELETE',
      url: 'api/session',
      success: function(user) {
        ServerActions.logoutUser(user);
      }
    });
  }
};
