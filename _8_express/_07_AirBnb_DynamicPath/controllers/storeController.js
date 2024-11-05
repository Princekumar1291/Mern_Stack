const { Home } = require("../models/Home");

const getHome = (req, res, next) => {
  // const registeredHomes = Home.fetchAllHomes();
  Home.fetchAllHomes(registeredHomes => {
    res.render('index', { registeredHomes: registeredHomes, pageTitle: 'Hamara Bnb' });
  });
  // console.log(registeredHomes)
  // res.render('index',{registeredHomes: registeredHomes, pageTitle: 'Hamara Bnb'});
}

module.exports = {
  getHome
}
