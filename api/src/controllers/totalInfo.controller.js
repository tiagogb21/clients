const TotalInfoService = require('../services/totalInfo.service');

const GenericError = require('../utils/GenericError');

class TotalInfoController {
  _service = new TotalInfoService();

  getTotalInfo = async (req, res) => {
    try {
      const total = await this._service.getTotalInfo();
      return res.status(200).json(total);
    } catch (err) {
      const error = new GenericError(err)
      return res.status(error.getStatus()).json(error.getMessage());
    }
  }
}

module.exports = TotalInfoController;
