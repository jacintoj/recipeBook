const express = require('express'),
  bodyParser = require('body-parser'),
  Routes = require('./components/router'),
  config = require('./config.json');

const app = express();

const Storage = require('./components/storage');

Storage.connect();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/jsonº
app.use(bodyParser.json());


// MIDDLEWARE
// Only Accept x-www-form-urlencoded because of the standards

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

const port = config.port || 3000;

const server = app.listen(port, () => {
  console.log(`Here we go ${port}`);
});

Routes(app);
