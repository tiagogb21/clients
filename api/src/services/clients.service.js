const ClientsModel = require('../models/clients.model');

class ClientsService {
  _model = new ClientsModel();

  getAllClients() {
    const clients = this._model.getAllClients();
    return clients;
  }

  getClientsByName(name) {
    const clients = this._model.getClientsByName(name);
    if(clients.length === 0) throw new Error("Client doesn't exist!");
    return clients;
  }

  getClientById(_id) {
    const client = this._model.getClientById(_id);
    if(!client) throw new Error("Client doesn't exist!");
    return client;
  }

  getClientByIdTotal(client_id) {
    const client = this._model.getClientByIdTotal(client_id);
    if(!client) throw new Error("Client doesn't exist!");
    return client;
  }

  getClientByIdEnterprises(client_id) {
    const client = this._model.getClientByIdEnterprises(client_id);
    if(!client) throw new Error("Client doesn't exist!");
    return client.enterprises;
  }

  getEnterprisesByName(client_id, name) {
    const enterprises = this.getClientByIdEnterprises(client_id);
    const findByName = enterprises
      .filter((enterprise) => enterprise.name.toLowerCase()
      .includes(name.toLowerCase()));
    if(!findByName) throw new Error("Client doesn't exist!");
    return findByName;
  }
}

module.exports = ClientsService;
