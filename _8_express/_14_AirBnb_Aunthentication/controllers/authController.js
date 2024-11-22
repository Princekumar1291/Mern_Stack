var bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");
const User = require("../models/User");

const getLogin = (req, res) => {
  res.render("auth/login", { pageTitle: "Login", isLoggedIn: false });
};

const postLogin = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  try {
    const user = await User.findOne({email:email});
    if(!user){
      throw new Error("User not found");
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      throw new Error("Incorrect password");
    }
    req.session.isLoggedIn = true;
    req.session.user = user;
    await req.session.save();
    res.redirect('/');
  } catch (error) {
    res.render("auth/login", {
      pageTitle: "Login",
      isLoggedIn: false,
      errorsMessages: [error],
    })
  }
};

const postLogout = (req, res) => {
  req.session.destroy();
  res.redirect("/");
};

const getSignup = (req, res, next) => {
  res.render("auth/signup", { pageTitle: "Signup", isLoggedIn: false });
};

// const preSignupAuth=(req, res,next) => {
//   console.log("preSignup");
//   next();
// }
// const postSignup=(req, res) => {
//   console.log("postSignup");
//   console.log(req.body);
//   res.redirect('/login');
// }  OR

const firstNameValidator = check("firstName")
  .notEmpty()
  .withMessage("First name should not be empty")
  .trim()
  .isLength({ min: 2 })
  .withMessage(" First name should be at least 2 characters long")
  .isAlpha()
  .withMessage("First name should contain only alphabets");
const lastNameValidator = check("lastName")
  .notEmpty()
  .withMessage("Last name should not be empty")
  .trim()
  .isAlpha()
  .withMessage("Last name should contain only alphabets");
const emailValidator = check("email")
  .isEmail()
  .withMessage("Email is not valid");
const passwordValidator = check("password")
  .isLength({ min: 8 })
  .withMessage("Password should be at least 8 characters long")
  .matches(/[A-Z]/)
  .withMessage("Password should contain one uppercase letter")
  .matches(/[a-z]/)
  .withMessage("Password should contain one lowercase letter")
  .matches(/[0-9]/)
  .withMessage("Password should contain one number")
  .matches(/[!@#$%^&*(),.?":{}|<>\-_=+]/)
  .withMessage("Password should contain one special character");
// OR
// const passwordValidator = check("password")
//   .isStrongPassword().withMessage("Password should contain one uppercase letter, one lowercase letter, one number , one special character and should be at least 8 characters long");
const confirmPasswordValidator = check("confirmPassword").custom(
  (value, { req }) => {
    if (value !== req.body.password) {
      throw new Error("Passwords do not match");
    }
    return true;
  }
);
const userTypeValidator = check("userType")
  .notEmpty()
  .withMessage("User type should not be empty")
  .isIn(["host", "guest"])
  .withMessage("User type should be either 'host' or 'guest'");
const termsValidator = check("terms")
  .notEmpty()
  .withMessage("You must accept the terms and conditions");
const postSignup = [
  firstNameValidator,
  lastNameValidator,
  emailValidator,
  passwordValidator,
  confirmPasswordValidator,
  userTypeValidator,
  termsValidator,
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).render("auth/signup", {
        pageTitle: "Signup",
        errorsMessages: errors.array().map((err) => err.msg),
        isLoggedIn: false,
        oldInputs: req.body,
      });
    }
    const user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      userType: req.body.userType,
    });
    bcrypt.hash(user.password, 12).then((hashedPassword) => {
      user.password = hashedPassword;
      user
        .save()
        .then((result) => {
          console.log(result);
          res.redirect("/login");
        })
        .catch((err) => {
          console.log(err);
          return res.status(422).render("auth/signup", {
            pageTitle: "Signup",
            errorsMessages: ["User already exists"],
            isLoggedIn: false,
            oldInputs: req.body,
          });
        });
    });
  },
];

const getRules = (req, res) => {
  res.render("auth/rules", { pageTitle: "Rules", isLoggedIn: false });
};

module.exports = {
  getLogin,
  postLogin,
  postLogout,
  getSignup,
  // preSignupAuth
  postSignup,
  getRules,
};

//  {
//   firstName: 'Prince',
//   lastName: 'Kumar',
//   email: 'xdfcghj@gmail.com',
//   password: '234567890',
//   confirmPassword: '123456780',
//   userType: 'host',
//   terms: 'on'
// }
