const { registeredHomes } = require("../models/Home");

const getAddHome = (req,res,next)=>{
  res.status(200).render('add-home',{pageTitle: 'Add Home'});
}

const postAddHome = (req, res, next) => {
  const homeName = req.body;
  registeredHomes.push(homeName);
  res.status(200).render('home-added',{pageTitle: 'Home Added'});
}

module.exports = {
  getAddHome,
  postAddHome
}