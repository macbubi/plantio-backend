const router = require('express').Router();

router.get("/", get);


module.exports = router;

function get(req, res, next) {
  res.status(200).send({
    response: 'success',
    message: 'not yet configured'
  })
}