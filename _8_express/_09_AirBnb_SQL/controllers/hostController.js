const { Home } = require("../models/Home");

const getAddHome = (req, res, next) => {
  res.status(200).render('host/edit-home', { pageTitle: 'Add Home', editing: false });
}

const postAddHome = (req, res, next) => {
  const { name, price, location, rating, photoUrl, description } = req.body;
  const home = new Home(name, price, location, rating, photoUrl, description);
  home.saveHome().then((error) => {
    if (error) res.redirect('/');
    else {
      res.status(200).render('host/home-added', { pageTitle: 'Home Added' });
    }
  });
}
const getHostHomes = (req, res, next) => {
  Home.fetchAllHomes().then(([registeredHomes]) => {
    res.render('host/host-homes', { registeredHomes: registeredHomes, pageTitle: 'Hamara Bnb' });
  });
}


const getEditHome = (req, res, next) => {
  const homeId = req.params.homeId;
  const editing = req.query.editing === 'true';
  console.log(homeId, editing);

  if (!editing) {
    console.log("Editing flag not set properly");
    return res.redirect('/host/host-home'); // Add 'return' here
  }

  Home.findById(homeId).then(([homes]) => {
    const home = homes[0];
    if (!home) {
      console.log("Home not found for editing");
      return res.redirect('/host/host-home');
    }

    console.log(home);
    res.status(200).render('host/edit-home', { pageTitle: 'Edit Home', home, editing: editing });
  });
};

const postEditHome = (req, res, next) => {
  const { id, name, price, location, rating, photoUrl, description } = req.body;
  Home.updateById(id, name, price, location, rating, photoUrl, description).then(() => {
    res.redirect('/host/host-home');
  });
};

const postDeleteHome = (req, res, next) => {
  const homeId = req.params.homeId;
  Home.deleteById(homeId).then(
    res.redirect('/host/host-home')
  ).catch((error) => {
    if (error) console.log(error);
    res.redirect('/host/host-home');
  });
}

module.exports = {
  getAddHome,
  postAddHome,
  getHostHomes,
  getEditHome,
  postEditHome,
  postDeleteHome
}