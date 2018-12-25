const moment = require('moment');
const router = require('express').Router();
const controller = require('./controller');

router.post("/plant-data", plantData);

module.exports = router;

async function plantData(req, res, next) {
  console.log("[" + new moment().format("DD.MM.YYYY HH:mm:ss") + "] incoming request:", req.body);
  
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
      await controller.plantData(humidity, moisture, temprature, sunlight);
      return res.status(200).send('ok');
  }
  catch (err) {
      return res.status(500).send(err);
  }
}