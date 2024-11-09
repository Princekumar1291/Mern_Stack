const express = require('express');
const storeController = require('../controllers/storeController');
const storeRouter = express.Router();

storeRouter.get('/',storeController.getIndex);
storeRouter.get('/homes',storeController.getHomes);
storeRouter.get('/homes/:homeId',storeController.getHomeDetails);
storeRouter.get("/favourite", storeController.getFavorites);
storeRouter.post("/favourite", storeController.postAddFavorites);
storeRouter.post("/favourite/remove-favourite/:homeId", storeController.postDeleteFavorites);

module.exports = storeRouter;
