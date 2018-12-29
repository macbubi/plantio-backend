var mongoose = require('mongoose');

const MONGO_URI = "mongodb://localhost/";
const DB_NAME = "plantio";
const DB_URI = MONGO_URI + DB_NAME;

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