const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  commentatorName: String,
  textComment: String,
  _newsId: mongoose.SchemaTypes.ObjectId,
});

const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;
