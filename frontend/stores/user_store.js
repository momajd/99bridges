var AppDispatcher = require('../dispatcher/dispatcher');
var Store = require('flux/utils').Store;
var UserConstants = require('../constants/user_constants');

var UserStore = new Store(AppDispatcher);

var _user = {};

var updateUser = function (user) {
  _user = user;
};

UserStore.user = function () {
  return Object.assign({}, _user);
};

UserStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case UserConstants.USER_RECEIVED:
      updateUser(payload.user);
      UserStore.__emitChange();
      break;
  }
};

module.exports = UserStore;
