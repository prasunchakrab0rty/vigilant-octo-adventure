const log4js = require('log4js');
const config = require('../../config');
const MasterCityModel = require('../../models/masterCity.model');
const UserCheckModel = require('../../models/userCheck.model');

const logger = log4js.getLogger('users.controller');
logger.level = config.logLevel;

function radians(deg) {
  return deg * (Math.PI / 180);
}

async function checkCity(req, res) {
  const { name, latitude, longitude } = req.body;
  try {
    const centroidList = await MasterCityModel.find({})
      .sort({ _id: -1 })
      .limit(1);
    const centroid = centroidList[0];
    const long1 = radians(centroid.longitude);
    const long2 = radians(longitude);
    const lat1 = radians(centroid.latitude);
    const lat2 = radians(latitude);
    //  Haversine formula
    const long = long2 - long1;
    const lat = lat2 - lat1;
    const a =
      Math.sin(lat / 2) ** 2 +
      Math.cos(lat1) * Math.cos(lat2) * Math.sin(long / 2) ** 2;
    const c = 2 * Math.asin(Math.sqrt(a));
    const distance = c * 6371;
    const userCheckDoc = new UserCheckModel({
      centroid,
      target: { name, latitude, longitude },
      distance
    });
    userCheckDoc.save();
    return res.status(201).send({ message: 'Central City Saved', distance });
  } catch (err) {
    logger.error(err);
    return res.status(400).send({ message: 'Error Saving City', result: {} });
  }
}

module.exports = {
  checkCity
};
