const DataService = require('../../data/service');
const dataService = new DataService();

function getData(startDate, endDate, plantId) {
  return dataService.read();
}

module.exports = {
  getData
}