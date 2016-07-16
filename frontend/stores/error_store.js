var AppDispatcher = require('../dispatcher/dispatcher');
var Store = require('flux/utils').Store;
var ErrorConstants = require('../constants/error_constants');

var ErrorStore = new Store(AppDispatcher);

var _errors = [];

var setErrors = function (errors) {
  _errors = errors;
};

ErrorStore.errors = function () {
  return _errors.slice();
};

ErrorStore.__onDispatch = function (payload) {
  console.log('error store received dispatch');
  switch (payload.actionType) {
    case ErrorConstants.ERRORS_RECEIVED:
      setErrors(payload.errors);
      ErrorStore.__emitChange();
      break;
  }
};

module.exports = ErrorStore;
