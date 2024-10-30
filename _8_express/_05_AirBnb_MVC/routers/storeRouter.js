const express = require('express');
const { getHome } = require('../controllers/storeController');
const storeRouter = express.Router();

storeRouter.get('/',getHome);

module.exports = storeRouter;
