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

module.exports=authRouter;


