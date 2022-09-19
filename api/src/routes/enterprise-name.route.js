const { Router } = require("express");

const EnterprisesController = require('../controllers/enterprises.controller');

const routes = Router();

const enterprisesController = new EnterprisesController();

routes.get('/enterprise/name/:name', enterprisesController.getEnterpriseByName)

module.exports = routes;
