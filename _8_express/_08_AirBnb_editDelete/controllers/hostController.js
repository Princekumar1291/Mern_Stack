const { Home } = require("../models/Home");

const getAddHome = (req,res,next)=>{
  res.status(200).render('host/edit-home',{pageTitle: 'Add Home', editing: false});
}

const postAddHome = (req, res, next) => {
  const { name, price, location, rating, photoUrl } = req.body;
  const home = new Home(name, price, location, rating, photoUrl);
  home.saveHome((error)=>{
    if(error) res.redirect('/');
    else{
      res.status(200).render('host/home-added',{pageTitle: 'Home Added'});
    }
  });
}
const getHostHomes=(req,res,next)=>{
  Home.fetchAllHomes(registeredHomes => {
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

  Home.findById(homeId, (home) => {
    if (!home) {
      console.log("Home not found for editing");
      return res.redirect('/host/host-home'); // Add 'return' here to prevent further execution
    }

    console.log(home);
    // Render the page only if the home exists
    res.status(200).render('host/edit-home', { pageTitle: 'Edit Home', home , editing: editing });
  });
};

const postEditHome = (req, res, next) => {
  const { id, name, price, location, rating, photoUrl } = req.body;
  const newHome = new Home(name, price, location, rating, photoUrl);
  newHome.id = id;
  newHome.saveHome((error)=>{
    if(error) console.log(error);
    res.redirect('/host/host-home');
  });
  
};

const postDeleteHome=(req,res,next)=>{
  const homeId = req.params.homeId;
  Home.deleteById(homeId,(error)=>{
    if(error) console.log(error);
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