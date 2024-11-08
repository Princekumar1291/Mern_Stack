const { Favorites } = require("../models/Favoriates");
const { Home } = require("../models/Home");

const getIndex = (req, res, next) => {
  Home.fetchAllHomes(registeredHomes => {
    res.render('store/index', { registeredHomes: registeredHomes, pageTitle: 'Hamara Bnb' });
  });
}
const getHomes = (req, res, next) => {
  Home.fetchAllHomes(registeredHomes => {
    res.render('store/homes', { registeredHomes: registeredHomes, pageTitle: 'Hamara Bnb' });
  });
}
const getHomeDetails = (req, res, next) => {
  Home.findById(req.params.homeId, (home) => {
    if (!home) {
      res.redirect('/homes');
    }
    res.render('store/homeDetails', { home: home, pageTitle: 'Home Details' });
  })
}


const getFavorites = (req, res, next) => {
  Favorites.fetchAllFavoriates(registeredHomesIds => {
    Home.fetchAllHomes(registeredHomes => {
      const favoriatesHomes=registeredHomes.filter((home)=> registeredHomesIds.includes(home.id));
      res.render('store/favourites', { favouritesHomes: favoriatesHomes, pageTitle: 'Favorites' });
    })
  });
}

// const getFavorites = (req, res, next) => {
//   Home.fetchAllHomes(registeredHomes => {
//     res.render('store/favourites', { registeredHomes: registeredHomes, pageTitle: 'Favorites' });
//   });
// }

const postAddFavorites = (req, res, next) => {
  const homeId = req.body.homeId;
  Favorites.saveFavoriate(homeId, (error) => {
    if (error) {
      console.log(error);
    }    
    res.redirect('/favorites');
  })
}

module.exports = {
  getHomes,
  getIndex,
  getHomeDetails,
  getFavorites,
  postAddFavorites
}
