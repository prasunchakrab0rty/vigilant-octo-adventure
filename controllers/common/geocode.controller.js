const nodeGeocoder = require('node-geocoder');
const log4js = require('log4js');
const config = require('../../config');

const options = {
  provider: config.geoProvider.name
};
const geoCoder = nodeGeocoder(options);
const logger = log4js.getLogger('geocode.controller');
logger.level = config.logLevel;

async function getLatLong(req, res) {
  const { cityName } = req.query;
  try {
    const result = await geoCoder.geocode(cityName);
    return res.status(201).send({ message: 'City List', result });
  } catch (err) {
    logger.error(err);
    return res
      .status(400)
      .send({ message: 'Error fetching City List', result: {} });
  }
}

module.exports = {
  getLatLong
};
