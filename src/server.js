const http = require("http");
const express = require("express");
const bodyParser = require('body-parser');
const router = express.Router();

var dataRoutes = require('./data/routes');
var appRoutes = require('./app/routes');

const app = express();

app.use(bodyParser.json({limit:'1mb'}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(router);

// TODO authentication
// const auth = require( '../middlewares/security-strategies' ).growAuth;
// const authz = require( '../middlewares/security-strategies' ).growAuthz;
// Secured routes
// router.post( "*", auth, authz );
// router.get( "*", auth, authz );
// router.delete( "*", auth, authz );
// router.put( "*", auth, authz );

router.use("/data", dataRoutes);
router.use("/app", appRoutes);

// health_check
router.get('/health_check', function (req, res, next) {
  res.status(200).send('ok');
});

module.exports = {
    start
};

async function start() {
    const server = http.createServer(app);
    const port = process.env.PORT || 3000;
    console.log("listening on port: " + port);
    return await server.listen(port);
};