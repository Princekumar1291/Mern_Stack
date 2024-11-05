const express = require('express');
const path = require('path');
const rootDir = require('../utils.js/path-util');
const { render } = require('ejs');
const { getAddHome, postAddHome } = require('../controllers/hostController');

const hostRouter = express.Router();


hostRouter.get('/add-home',getAddHome);
hostRouter.post('/add-home',postAddHome);

module.exports = hostRouter;