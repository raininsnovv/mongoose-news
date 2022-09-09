const News = require("../models/News.model");

module.exports.newsController = {
  getAllNews: (req, res) => {
    News.find({}).then((data) => {
      res.json(data);
    });
  },
  addNews: (req, res) => {
    const { head, text, _categoryId } = req.body;
    News.create({
      head,
      text,
      _categoryId,
    }).then(() => {
      res.json("News added");
    });
  },

  deleteNews: (req, res) => {
    console.log(req.params.id);
    News.findByIdAndRemove(req.params.id)
      .then(() => {
        res.json("News deleted");
      })
      .catch((e) => res.json(e.message));
  },

  changeNews: (req, res) => {
    News.findByIdAndUpdate(req.params.id, { text: req.body.text }).then(
      (data) => {
        res.json(data);
      }
    );
  },
  getNewsById: (req, res) => {
    News.findById(req.params.id).then((data) => {
      res.json(data);
    });
  },
  getNewsByCategoryId: (req, res) => {
    News.find({ _categoryId: req.params.id }).then((data) => {
      res.json(data);
    });
  },
};
