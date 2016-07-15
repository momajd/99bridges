module.exports = {
  signUp: function(user) {
    $.ajax({
      type: 'POST',
      url: 'api/users',
      data: {user: user}
    });
  },

  signIn: function(user) {
    $.ajax({
      type: 'POST',
      url: 'api/session',
      data: {user: user}
    });
  },

  signOut: function() {
    $.ajax({
      type: 'DELETE',
      url: 'api/session',
    });
  }
};
