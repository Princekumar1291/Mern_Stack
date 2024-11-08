const express = require('express');
const storeController = require('../controllers/storeController');
const storeRouter = express.Router();

storeRouter.get('/',storeController.getIndex);
storeRouter.get('/homes',storeController.getHomes);
storeRouter.get('/homes/:homeId',storeController.getHomeDetails);
storeRouter.get("/favorites", storeController.getFavorites);
storeRouter.post("/favorites", storeController.postAddFavorites);

module.exports = storeRouter;
