const { Router } = require("express");

const ClientsController = require('../controllers/clients.controller');

const routes = Router();

const clientsController = new ClientsController();

/** Get all clients */
routes.get('/', clientsController.getAllClients);

/** Get clients by name */
routes.get('/name/:name', clientsController.getClientsByName);

/** Get a client by _id */
routes.get('/:_id', clientsController.getClientById);

/** Get client totals */
routes.get('/:client_id/totals', clientsController.getClientByIdTotal);

/** Get all enterprises by client */
routes.get('/:client_id/enterprise', clientsController.getClientByIdEnterprises);

/** Get enterprises by client and name */
routes.get('/:client_id/enterprise/name/:name',
  clientsController.getEnterprisesByName);

/** Get all enterprises */
routes.get('/enterprise', (req, res, next) => {});

/** Get enterprises by name */
routes.get('/enterprise/name/:name', (req, res, next) => {});

module.exports = routes;
