const { Home } = require("../models/Home");

const getHome = (req, res, next) => {
  Home.fetchAllHomes(registeredHomes => {
    res.render('index', { registeredHomes: registeredHomes, pageTitle: 'Hamara Bnb' });
  });
}

module.exports = {
  getHome
}
