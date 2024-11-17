const express=require('express');
const Home = require('../models/Home');
const ownerRouter=express.Router();


ownerRouter.get('/add-data',(req,res,next)=>{
  res.render('add-data');
})

ownerRouter.post('/add-data',(req,res,next)=>{
  Home.save(req.body);
  res.render('home',{datas:Home.fetchAll()});
})



module.exports=ownerRouter;
