const log4js = require('log4js');
const nodeGeocoder = require('node-geocoder');
const config = require('../../config');
const SetCityModel = require('../../models/setCity.model');

const logger = log4js.getLogger('admin.controller');
logger.level = config.logLevel;
const options = {
  provider: config.geoProvider.name
};
const geoCoder = nodeGeocoder(options);

async function setCity(req, res) {
  // eslint-disable-next-line object-curly-newline
  const { name, latitude, longitude, radius } = req.body;
  try {
    const setCityDoc = new SetCityModel({
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

async function getCity(req, res) {
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
  setCity,
  getCity
};
