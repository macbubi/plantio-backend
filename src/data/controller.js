const moment = require('moment');

const DataService = require('./service');
const dataService = new DataService();

function plantData(data) {
  dataService.create(data).then(function (suc) {
    console.log("[" + new moment().format("DD.MM.YYYY HH:mm:ss") + "] data saved:", suc);
  }, function (err) {
    console.error("[Error] " + err);
  });
}

module.exports = {
    plantData
};
