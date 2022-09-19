const ClientsService = require('../services/clients.service');

const GenericError = require('../utils/GenericError');

class ClientsController {
  _service = new ClientsService();

  getAllClients = async (req, res) => {
    try {
      const clients = await this._service.getAllClients();
      return res.status(200).json(clients);
    } catch (err) {
      const error = new GenericError(err)
      return res.status(error.getStatus()).json(error.getMessage());
    }
  }

  getClientsByName = async (req, res) => {
    try {
      const { name } = req.params;
      const clients = await this._service.getClientsByName(name);
      return res.status(200).json(clients);
    } catch (err) {
      const error = new GenericError(err)
      return res.status(error.getStatus()).json(error.getMessage());
    }
  }

  getClientById = async (req, res) => {
    try {
      const { _id } = req.params;
      const client = await this._service.getClientById(_id);
      return res.status(200).json(client);
    } catch (err) {
      const error = new GenericError(err)
      return res.status(error.getStatus()).json(error.getMessage());
    }
  }

  getClientByIdTotal = async (req, res) => {
    try {
      const { client_id } = req.params;
      const clientTotal = await this._service.getClientByIdTotal(client_id);
      return res.status(200).json(clientTotal);
    } catch (err) {
      const error = new GenericError(err)
      return res.status(error.getStatus()).json(error.getMessage());
    }
  }

  getClientByIdEnterprises = async (req, res) => {
    try {
      const { client_id } = req.params;
      const enterprises = await this._service.getClientByIdEnterprises(client_id);
      const formatEnterprise = enterprises.map(({ _id, name, image_src }) => ({
        id: _id,
        name,
        image: image_src,
      }));
      return res.status(200).json(formatEnterprise);
    } catch (err) {
      const error = new GenericError(err)
      return res.status(error.getStatus()).json(error.getMessage());
    }
  }

  getEnterprisesByName  = async (req, res) => {
    try {
      const { client_id, name } = req.params;
      const enterprise = await this._service
        .getEnterprisesByName(client_id, name);
      return res.status(200).json(enterprise);
    } catch (err) {
      const error = new GenericError(err)
      return res.status(error.getStatus()).json(error.getMessage());
    }
  }
}

module.exports = ClientsController;
