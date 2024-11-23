const express=require("express");
const authRouter=express.Router();
const authController=require("../controllers/authController");

authRouter.get("/login", authController.getLogin);
authRouter.post("/login", authController.postLogin);
authRouter.post("/logout", authController.postLogout);
authRouter.get("/signup", authController.getSignup);
// authRouter.post("/signup", authController.preSignupAuth, authController.postSignup);
authRouter.post("/signup", authController.postSignup);
authRouter.get("/rules/termConditions", authController.getRules);
authRouter.get("/forgetPassword", authController.getForgetPassword);
authRouter.post("/forgetPassword", authController.postForgetPassword);

// authRouter.get("/resetPassword", authController.getResetPassword);
authRouter.post("/resetPassword", authController.postResetPassword);

module.exports=authRouter;