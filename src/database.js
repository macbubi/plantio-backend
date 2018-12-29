var mongoose = require('mongoose');
var config = require('../config/config');

const DB_URI = config.mongodbURI;

function start() {
  return new Promise(function (resolve, reject) {
    mongoose.connect(DB_URI);
    var db = mongoose.connection;
    db.on('error', function (err) {
      reject(err);
    });
    db.once('open', function callback () {
      console.info("mongo connected (" + DB_URI + ")");
      resolve();
    });
  });
}

module.exports = {
  start
};