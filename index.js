const server = require('./src/server');
const db = require('./src/database');


Promise.all([
  db.start(),
  server.start()
]).then(function(res) {
  console.info("Server Done Initialized Successfully!");
}, function (err) {
  throw "[Error starting server] " + err.message;
})