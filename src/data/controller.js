const moment = require('moment');

function plantData(data) {
  console.log("[" + new moment().format("DD.MM.YYYY HH:mm:ss") + "] incoming data:", data);
}

module.exports = {
    plantData
};
