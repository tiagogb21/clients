const clientsData = require('../../clients.mock');
const getTotalRealties = require('../utils/clients');

class ClientsModel {
  getAllClients() {
    return clientsData.map(({
        _id,
        image_src,
        name,
        enterprises
      }) => ({
        id: _id,
        image_src,
        name,
        enterprises: enterprises.length,
        totalRealties: getTotalRealties(enterprises),
      }));
  }

  getClientsByName(name) {
    const clients = this.getAllClients();
    const clientByName = clients.filter((client) => client.name
      .toLowerCase().includes(name.toLowerCase()));
    return clientByName;
  }

  getClientById(_id) {
    const clients = this.getAllClients();
    const clientById = clients.find(({ id }) => id === _id);
    return clientById;
  }

  getClientByIdTotal(client_id) {
    const client = this.getClientById(client_id);
    const { enterprises, totalRealties } = client;
    return {
      totalEnterprises: enterprises,
      totalRealties: totalRealties,
    };
  }

  getClientByIdEnterprises(client_id) {
    const client = clientsData.filter(({ _id }) => client_id === _id);
    return client[0];
  }
}

module.exports = ClientsModel;
