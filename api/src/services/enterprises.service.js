const EnterprisesModel = require('../models/enterprises.model');

class EnterprisesService {
  _model = new EnterprisesModel();

  getAllEnterprises() {
    const enterprises = this._model.getAllEnterprises();
    return enterprises;
  }

  getEnterpriseByName(id, name) {
    const allEnterprises = this.getAllEnterprises();
    const findEnterpriseById = allEnterprises.filter((enterprise) => enterprise.id === id);
    if(findEnterpriseById?.length === 0) throw new Error('No enterprise is found!');
    const filterEnterprisesByName = findEnterpriseById.filter((enterprise) => enterprise.name.toLowerCase()
      .includes(name.toLowerCase()));
    return filterEnterprisesByName;
  }
}

module.exports = EnterprisesService;
