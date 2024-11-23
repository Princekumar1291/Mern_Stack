const Home = require("../models/Home");
const User = require("../models/User");

exports.getIndex = (req, res, next) => {
  Home.find().then((registeredHomes) => {
    res.render("store/index", {
      homes: registeredHomes,
      pageTitle: "Tumahara airbnb",
      isLoggedIn: req.session.isLoggedIn,
      user: req.session.user,
    });
  });
};

exports.getHomes = (req, res, next) => {
  Home.find().then((registeredHomes) => {
    res.render("store/homes", {
      homes: registeredHomes,
      pageTitle: "Tumahara airbnb",
      isLoggedIn: req.session.isLoggedIn,
      user: req.session.user,
    });
  });
};

exports.getFavourites = async (req, res, next) => {
  const userId = req.session.user._id;
  try {
    const user = await User.findById(userId).populate("favouriteHomes");
    const favouriteHomes = user.favouriteHomes;
    res.render("store/favourites", {
      homes: favouriteHomes,
      pageTitle: "Favourites",
      isLoggedIn: req.session.isLoggedIn,
      user: req.session.user,
    });
  } catch (error) {
    console.log("Error while getting favourites", error);
    res.redirect("/");
  }
};

exports.postAddFavourites = async (req, res, next) => {
  const homeId = req.body.id;
  const userId = req.session.user._id;
  try {
    const user = await User.findById(userId);
    if (user.favouriteHomes.includes(homeId)) {
      return res.redirect("/favourites");
    }
    user.favouriteHomes.push(homeId);
    await user.save();
    res.redirect("/favourites");
  } catch (error) {
    console.log("Error while adding to favourites", error);
    res.redirect("/favourites");
  }
};


exports.postRemoveFavourite = async (req, res, next) => {
  const homeId = req.params.homeId;
  try {
    const userId = req.session.user._id;
    const user = await User.findById(userId);
    user.favouriteHomes.pull(homeId);
    await user.save();
    res.redirect("/favourites");
  } catch (error) {
    console.log("Error while removing from favourites", error);
    res.redirect("/");
  }
};

exports.getHomeDetails = (req, res, next) => {
  const homeId = req.params.homeIdentity;
  Home.findById(homeId).then((home) => {
    if (!home) {
      console.log("Home not found");
      return res.redirect("/homes");
    }
    res.render("store/home-detail", {
      home: home,
      pageTitle: "Home Detail",
      isLoggedIn: req.session.isLoggedIn,
      user: req.session.user,
    });
  });
};
