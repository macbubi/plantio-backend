
// TODO logger
// const logger = require('../config/logger')(module.filename);

const router = require('express').Router();
const controller = require('./controller');

router.post("/plant", plantData);
// ...
// post, get, put, delete
// ...

async function plantData(req, res, next) {
  
  const {
    humidity,
    moisture,
    temprature,
    sunlight
  } = req.body;
  
  if (!humidity || !moisture || !temprature || !sunlight) {
      return res.status(400).send('humidity, moisture, temprature and sunlight body-params are required');
  }

  try {
      await controller.plantData({humidity, moisture, temprature, sunlight});
      return res.status(200).send('ok');
  }
  catch (err) {
      return res.status(500).send(err);
  }
}
module.exports = router;