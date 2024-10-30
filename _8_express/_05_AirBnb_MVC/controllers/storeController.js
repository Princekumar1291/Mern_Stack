const { registeredHomes } = require("../models/Home");

const getHome = (req, res, next) => {
  console.log(registeredHomes)
  res.render('index',{registeredHomes: registeredHomes, pageTitle: 'Hamara Bnb'});
}

module.exports = {
  getHome
}
