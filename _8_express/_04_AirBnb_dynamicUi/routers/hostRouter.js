const express = require('express');
const path = require('path');
const rootDir = require('../utils.js/path-util');
const { render } = require('ejs');

const hostRouter = express.Router();

const registeredHomes = [];

hostRouter.get('/add-home',(req,res,next)=>{
  res.status(200).render('add-home',{pageTitle: 'Add Home'});
});

hostRouter.post('/add-home', (req, res, next) => {
  const homeName = req.body;
  registeredHomes.push(homeName);
  res.status(200).render('home-added',{pageTitle: 'Home Added'});
});

module.exports = {
  hostRouter: hostRouter,
  registeredHomes: registeredHomes
}