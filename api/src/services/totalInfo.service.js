const TotalInfoModel = require('../models/totalInfo.model');

class TotalInfoService {
  _model = new TotalInfoModel();

  getTotalInfo() {
    const totalInfo = this._model.getTotalInfo();
    return totalInfo;
  }
}

module.exports = TotalInfoService;
