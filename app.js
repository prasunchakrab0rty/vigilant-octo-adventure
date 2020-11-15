const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const log4js = require('log4js');

const app = express();
const logger = log4js.getLogger();
logger.level = 'debug'; // TODO: Move to config
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  req.header('Access-Control-Allow-Origin', ['*']);
  res.header('Access-Control-Allow-Origin', ['*']);
  next();
});

// app.use('/api', appRouter);

app.get('/', (req, res) => {
  res.send('Welcome to Geo Distance API');
});

try {
  mongoose.connect(
    'mongodb://localhost/TestDb',
    {
      useUnifiedTopology: true,
      useNewUrlParser: true
    },
    () => {
      logger.info('MongoDb Connected!!!');
    }
  );
} catch (err) {
  logger.error(err);
}

app.listen(port, () => {
  logger.info(`Server Running on port ${port}`);
});
