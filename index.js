const server = require('./src/server');

server.start().then(function(res) {
  console.log("Server Initialized Successfully!");
}, function (err) {
  throw "[Error starting server] " + err.message;
})