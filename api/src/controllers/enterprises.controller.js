const EnterprisesService = require('../services/enterprises.service');

const GenericError = require('../utils/GenericError');

class EnterprisesController {
  _service = new EnterprisesService();

  getAllEnterprises = async (req, res) => {
    try {
      const enterprises = await this._service.getAllEnterprises();
      return res.status(200).json(enterprises);
    } catch (err) {
      const error = new GenericError(err)
      return res.status(error.getStatus()).json(error.getMessage());
    }
  }

  getEnterpriseByName = async (req, res) => {
    try {
      const { id, name } = req.params;
      const enterprises = await this._service.getEnterpriseByName(id, name);
      return res.status(200).json(enterprises);
    } catch (err) {
      const error = new GenericError(err)
      return res.status(error.getStatus()).json(error.getMessage());
    }
  }

  getEnterpriseFilterByName = async (req, res) => {
    try {
      const { name } = req.params;
      const enterprises = await this._service.getEnterpriseFilterByName(name);
      return res.status(200).json(enterprises);
    } catch (err) {
      const error = new GenericError(err)
      return res.status(error.getStatus()).json(error.getMessage());
    }
  }
}

module.exports = EnterprisesController;
