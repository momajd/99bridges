var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var BridgeStore = new Store(AppDispatcher);
var BridgeConstants = require('../constants/bridge_constants');

var _bridges = {};

BridgeStore.all = function () {
  return Object.assign({}, _bridges);
};

function resetAllBridges (bridges) {
  console.log("bridges reset in BridgeStore");
  _bridges = bridges;
}

BridgeStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case BridgeConstants.BRIDGES_RECEIVED:
      resetAllBridges(payload.bridges);
      BridgeStore.__emitChange();
      break;

  }
};

module.exports = BridgeStore;
