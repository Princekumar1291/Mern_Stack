const express = require('express');
const rootDir = require('../utils.js/path-util');
const path = require('path');

const storeRouter = express.Router();

storeRouter.get('/',(req, res, next) => {
  res.status(200).sendFile(path.join(rootDir, 'views', 'index.html'));
});

module.exports = storeRouter
