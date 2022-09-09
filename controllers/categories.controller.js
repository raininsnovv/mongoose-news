const Category = require("../models/Category.model");

module.exports.categoriesController = {
  getCategories: (req, res) => {
    Category.find({}).then((data) => {
      res.json(data);
    });
  },
  addCategories: (req, res) => {
    const { name } = req.body;
    Category.create({ name }).then(() => {
      res.json("Category added");
    });
  },

  deleteCategories: (req, res) => {
    console.log(req.params.id);
    Category.findByIdAndRemove(req.params.id).then(() => {
      res.json("Category deleted");
    });
  },
};
