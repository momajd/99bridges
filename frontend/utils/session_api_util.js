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
      error: function(response) {
        var errors = response.responseJSON;
        console.log(errors);
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
        ServerActions.loginUser(userData);
      },
      error: function(response) {
        console.log(response.responseJSON);
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
