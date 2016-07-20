var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var BridgeStore = new Store(AppDispatcher);
var BridgeConstants = require('../constants/bridge_constants');
var SessionStore = require('../stores/session_store');

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

function addFavorite (favorite) {
  _bridges[favorite.bridge_id].favorites.push(favorite);
}

function removeFavorite (favorite) {
  var favorites = _bridges[favorite.bridge_id].favorites;
  for (var i = 0; i < favorites.length; i++) {
    if (favorites[i].bridge_id === favorite.bridge_id &&
        favorites[i].user_id === SessionStore.currentUser().id) {
          return favorites.splice(i, 1);
        }
  }
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
    case BridgeConstants.FAVORITE_RECEIVED:
      addFavorite(payload.favorite);
      BridgeStore.__emitChange();
      break;
    case BridgeConstants.FAVORITE_REMOVED:
      removeFavorite(payload.favorite);
      BridgeStore.__emitChange();
      break;
  }
};

module.exports = BridgeStore;
