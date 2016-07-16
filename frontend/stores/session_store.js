var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var SessionConstants = require('../constants/session_constants');

var SessionStore = new Store(AppDispatcher);

var _currentUser = {};

var _login = function (user) {
  _currentUser = user;
};

var _logout = function () {
  _currentUser = {};
};

SessionStore.currentUser = function () {
  return Object.assign({}, _currentUser);
};

SessionStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case SessionConstants.USER_LOGIN:
      _login(payload.user);
      SessionStore.__emitChange();
      break;
    case SessionConstants.USER_LOGOUT:
      _logout();
      SessionStore.__emitChange();
      break;
  }
};

module.exports = SessionStore;
