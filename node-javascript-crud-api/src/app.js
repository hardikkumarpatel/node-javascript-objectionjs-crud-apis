const express = require('express');
const cors = require('cors');
const logger = require('./logger/index');
const routes = require('./routes/index');
const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

module.exports = app;
