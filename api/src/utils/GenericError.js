class GenericError {
  constructor(error) {
    this.status = 401;
    this.message = error.message;
  }
  getStatus() {
    return this.status;
  }
  getMessage() {
    return { message: this.message };
  }
}

module.exports = GenericError
