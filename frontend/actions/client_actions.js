var ApiUtils = require('../utils/api_utils');

module.exports = {
  fetchAllBridges: function (bounds) {
    ApiUtils.fetchAllBridges(bounds);
    console.log("action to fetch bridges");
  }
};
