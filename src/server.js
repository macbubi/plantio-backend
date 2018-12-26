const http = require("http");
const express = require("express");
const bodyParser = require('body-parser');
const router = require('express').Router();

var dataRoutes = require('./data/routes');
var appRoutes = require('./app/routes');

const app = express();

app.use(bodyParser.json({limit:'1mb'}));
app.use(bodyParser.urlencoded({extended: false}));

// TODO authentication
// const auth = require( '../middlewares/security-strategies' ).growAuth;
// const authz = require( '../middlewares/security-strategies' ).growAuthz;
// Secured routes
// router.post( "*", auth, authz );
// router.get( "*", auth, authz );
// router.delete( "*", auth, authz );
// router.put( "*", auth, authz );
debugger

router.use("/data", dataRoutes);
router.use("/app", appRoutes);

module.exports = {
    start
};

async function start() {
    const server = http.createServer(app);
    const port = process.env.PORT || 3000;
    console.log("listening on port: " + port);
    return await server.listen(port);
};




