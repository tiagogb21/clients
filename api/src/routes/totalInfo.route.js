const { Router } = require("express");

const TotalInfoController = require('../controllers/totalInfo.controller');

const routes = Router();

const totalInfoController = new TotalInfoController();

/** Get general totals */
routes.get('/', totalInfoController.getTotalInfo);

module.exports = routes;
