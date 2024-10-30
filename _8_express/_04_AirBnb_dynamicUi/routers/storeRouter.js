const express = require('express');
const rootDir = require('../utils.js/path-util');
const path = require('path');
const {registeredHomes} = require('./hostRouter');

const storeRouter = express.Router();

storeRouter.get('/',(req, res, next) => {
  console.log(registeredHomes)
  res.render('index',{registeredHomes: registeredHomes, pageTitle: 'Hamara Bnb'});
});

module.exports = storeRouter
