const db = require("../models");

module.exports = {
  getBooks: (req, res) => {
      db.Book.find()
      .then(dbModels =>res.json(dbModels))
      .catch(err=> res.status(422).json(err));
  },
  addBook: (req, res) => {
    db.Book.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};
