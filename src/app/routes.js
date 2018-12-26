const router = require('express').Router();

const plant = require('./plant/routes');
// ..
// ..

router.post("/plant", plant);
// ...
// post, get, put, delete
// ...

module.exports = router;