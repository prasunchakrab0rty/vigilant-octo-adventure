const log4js = require('log4js');
const config = require('../../config');
const MasterCityModel = require('../../models/masterCity.model');

const logger = log4js.getLogger('admin.controller');
logger.level = config.logLevel;

async function setCity(req, res) {
  const { name, latitude, longitude, radius } = req.body;
  try {
    const setCityDoc = new MasterCityModel({
      name,
      latitude,
      longitude,
      radius
    });
    const result = await setCityDoc.save();
    return res.status(201).send({ message: 'Central City Saved', result });
  } catch (err) {
    logger.error(err);
    return res.status(400).send({ message: 'Error Saving City', result: {} });
  }
}

module.exports = {
  setCity
};
