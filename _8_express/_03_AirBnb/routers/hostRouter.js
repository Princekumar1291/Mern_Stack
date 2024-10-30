const express = require('express');
const path = require('path');
const rootDir = require('../utils.js/path-util');

const hostRouter = express.Router();


hostRouter.post('/add-home', (req, res, next) => {
  const homeName = req.body.name;
  console.log(homeName);
  res.status(200).sendFile(path.join(rootDir, 'views', 'home-added.html'));
});

hostRouter.get('/add-home',(req,res,next)=>{
  res.status(200).sendFile(path.join(rootDir, 'views', 'add-home.html'));
});

module.exports = hostRouter 