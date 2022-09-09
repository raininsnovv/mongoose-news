const { findById } = require("../models/Comment.model");
const Comment = require("../models/Comment.model");

module.exports.commentsController = {
  getComments: (req, res) => {
    Comment.find({}).then((data) => {
      res.json(data);
    });
  },
  addComment: (req, res) => {
    const { commentatorName, textComment, _newsId } = req.body;
    Comment.create({
      commentatorName,
      textComment,
      _newsId,
    }).then(() => {
      res.json("Comment added");
    });
  },
  deleteComment: (req, res) => {
    console.log(req.params.id);
    Comment.findByIdAndRemove(req.params.id)
      .then(() => {
        res.json("Comment deleted");
      })
      .catch((e) => res.json(e.message));
  },
  findCommentsByNewsId: (req, res) => {
    Comment.find({ _newsId: req.params.id })
      .then((data) => {
        res.json(data);
      })
      .catch((e) => res.json(e.message));
  },
};
