const { Home } = require("../models/Home");

const getAddHome = (req,res,next)=>{
  res.status(200).render('host/add-home',{pageTitle: 'Add Home'});
}

const postAddHome = (req, res, next) => {
  const name = req.body.name;
  const price = req.body.price;
  const location = req.body.location;
  const rating = req.body.rating;
  const photoUrl = req.body.photoUrl;
  const home = new Home(name, price, location, rating, photoUrl);
  home.saveHome((error)=>{
    if(error) res.redirect('/');
    else{
      res.status(200).render('host/home-added',{pageTitle: 'Home Added'});
    }
  });
}

module.exports = {
  getAddHome,
  postAddHome
}