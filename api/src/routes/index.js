const { Router } = require("express");

const clientsRoute = require("./clients.route");
const totalInfoRoute = require("./totalInfo.route");
const enterprisesRoute = require("./enterprises.route");
const enterprisesNameRoute = require("./enterprise-name.route");

const routes = Router();

routes.use('/clients', clientsRoute);
routes.use('/name', clientsRoute);
routes.use('/totals', totalInfoRoute);
routes.use('/enterprise', enterprisesRoute);
routes.use('/clients/:id', enterprisesNameRoute);


module.exports = routes;
