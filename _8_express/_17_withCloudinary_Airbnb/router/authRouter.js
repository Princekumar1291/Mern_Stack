const express=require('express');
const authRouter=express.Router();
const authController=require('../controllers/authController');

authRouter.get('/login',authController.getLogin);
authRouter.post('/login',authController.postLogin);
authRouter.post('/logout',authController.logout);
authRouter.get('/signup',authController.getSignup);
authRouter.post('/signup',authController.postSignup);
authRouter.get('/forgot-password',authController.getForgotPassword);
authRouter.post('/forgot-password',authController.postForgotPassword);
authRouter.get('/verify-otp',authController.getVerifyOtp);
authRouter.post('/verify-otp',authController.postVerifyOtp);
authRouter.get('/reset-password',authController.getResetPassword);
authRouter.post('/reset-password',authController.postResetPassword);

module.exports={authRouter}; 