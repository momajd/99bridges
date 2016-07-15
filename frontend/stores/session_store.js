var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var SessionConstants = require('../constants/session_constants');

var SessionStore = new Store(AppDispatcher);

SessionStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case SessionConstants.USER_LOGIN:
      console.log('success');
      break;

  }
};

module.exports = SessionStore;
