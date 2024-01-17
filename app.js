var express = require('express'),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose');

var app = express();

app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.use(cors());

var server = app.listen(3000, function() {
  console.log('Listening on port ' + server.address().port);
})