const http = require("http");
const express = require("express");
const routes = require('./routes');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json({limit:'1mb'}));
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', routes);

module.exports = {
    start
};

async function start() {
    const server = http.createServer(app);
    const port = process.env.PORT || 3000;
    console.log("listening on port: " + port);
    return await server.listen(port);
};




