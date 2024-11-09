const express = require('express');
const hostController = require('../controllers/hostController');

const hostRouter = express.Router();


hostRouter.get('/add-home',hostController.getAddHome);
hostRouter.post('/add-home',hostController.postAddHome);
hostRouter.get('/host-home',hostController.getHostHomes);
hostRouter.get('/edit-home/:homeId',hostController.getEditHome);
hostRouter.post('/edit-home',hostController.postEditHome);
hostRouter.post('/delete-home/:homeId',hostController.postDeleteHome);

module.exports = hostRouter;