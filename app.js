var express = require('express'),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  config = require('./config'),
  compression = require('compression'),
  mongoose = require('mongoose');

const db_conn = require('./utils/DB');

const app = express();

app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(compression());

app.use(cors());

app.use('/musics', require('./routes/music'));

const server = app.listen(config.PORT || 3001, function() {
  console.log('Listening on port ' + server.address().port);
})