var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var BridgeStore = new Store(AppDispatcher);
var BridgeConstants = require('../constants/bridge_constants');

var _bridges = {};

BridgeStore.all = function () {
  return Object.assign({}, _bridges);
};

BridgeStore.find = function (id) {
  return Object.assign({}, _bridges[id]);
};

function resetAllBridges (bridges) {
  _bridges = bridges;
}

function resetSingleBridge (bridge) {
  _bridges[bridge.id] = bridge;
}

BridgeStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case BridgeConstants.BRIDGES_RECEIVED:
      resetAllBridges(payload.bridges);
      BridgeStore.__emitChange();
      break;
    case BridgeConstants.SINGLE_BRIDGE_RECEIVED:
      resetSingleBridge(payload.bridge);
      BridgeStore.__emitChange();
      break;
  }
};

module.exports = BridgeStore;
