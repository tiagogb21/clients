const clientsData = require('../../clients.mock');

class EnterprisesModel {
  getAllEnterprises() {
    const enterprises = clientsData.map(({ name, enterprises }) => ({
      name,
      enterprises,
    }));
    return enterprises;
  }
}

module.exports = EnterprisesModel;
