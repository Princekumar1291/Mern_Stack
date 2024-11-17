const express = require('express');
const { getAddHome, postAddHome } = require('../controllers/hostController');

const hostRouter = express.Router();


hostRouter.get('/add-home',getAddHome);
hostRouter.post('/add-home',postAddHome);

module.exports = hostRouter;