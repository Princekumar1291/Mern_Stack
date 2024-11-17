const express=require('express');
const userRouter=express.Router();


userRouter.get('/', (req, res, next) => {
  res.render('home',{datas:"Hello World"});
})

userRouter.get('/about',(req,res,next)=>{
  res.render('about')
})

userRouter.get('/products', (req, res) => {
  res.render('products');
})

module.exports=userRouter;