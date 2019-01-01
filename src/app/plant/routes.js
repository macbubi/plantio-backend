const router = require('express').Router();
const controller = require('./controller');

router.get("/getData", getData);


module.exports = router;

async function getData(req, res, next) {
  const {
    startDate,
    endDate,
    plantId
  } = req.body;
  
  // if (required parms not provided) {
  //     return res.status(400).send('error message');
  // }

  try {
      const data = await controller.getData(startDate, endDate, plantId);
      res.set('Access-Control-Allow-Origin', 'http://localhost:4200');
      return res.status(200).send(data);
  }
  catch (err) {
      return res.status(500).send(err);
  }
  
  res.status(200).send({
    response: 'success',
    message: 'not yet configured'
  })
}