const { Router } = require("express");

const EnterprisesController = require('../controllers/enterprises.controller');

const routes = Router();

const enterprisesController = new EnterprisesController();

/** Get general totals */
routes.get('/', enterprisesController.getAllEnterprises);

module.exports = routes;
