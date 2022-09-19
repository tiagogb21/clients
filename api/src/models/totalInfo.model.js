const ClientsModel = require('./clients.model');

class TotalInfoModel {
  clientsModel = new ClientsModel();

  getTotalInfo() {
    const clients = this.clientsModel.getAllClients();
    return {
      totalClients: clients.length,
      totalEnterprises: clients.reduce((acc, curr) => {
        acc += curr.enterprises;
        return acc;
      }, 0),
      totalRealties: clients.reduce((acc, curr) => {
        acc += curr.totalRealties;
        return acc;
      }, 0),
    }
  }
}

module.exports = TotalInfoModel;
