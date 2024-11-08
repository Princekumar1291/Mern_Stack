const { Favourite } = require("../models/Favoriates");
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
  Favourite.fetchAllFavoriates(registeredHomesIds => {
    Home.fetchAllHomes(registeredHomes => {
      const favoriatesHomes=registeredHomes.filter((home)=> registeredHomesIds.includes(home.id));
      res.render('store/favourites', { favouritesHomes: favoriatesHomes, pageTitle: 'Favourite' });
    })
  });
}

const postDeleteFavorites=(req, res, next) => {
  const homeId = req.params.homeId;
  Favourite.deleteFavoriate(homeId, (error) => {
    if (error) {
      console.log(error);
    }
    res.redirect('/favourite');
  })
}


const postAddFavorites = (req, res, next) => {
  const homeId = req.body.homeId;
  Favourite.saveFavoriate(homeId, (error) => {
    if (error) {
      console.log(error);
    }    
    res.redirect('/favourite');
  })
}

module.exports = {
  getHomes,
  getIndex,
  getHomeDetails,
  getFavorites,
  postAddFavorites,
  postDeleteFavorites
}
