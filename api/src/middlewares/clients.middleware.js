class ClientsMiddleware {
  isValidId(req, res, next) {
    const { id } = req.params;
    if(!isNaN(id) || id.length !== 4) {
      return res.status(400).json({ message: 'Id inválido' });
    }
  }

  isValidName(req, res, next) {
    const { name } = req.body;
    if(!name || name.trim().length === 0) {
      return res.status(400).json({ message: 'Nome inválido' });
    }
  }
}

module.exports = ClientsMiddleware;
