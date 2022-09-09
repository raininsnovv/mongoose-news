const mongoose = require("mongoose");

const newSchema = mongoose.Schema({
  head: String,
  text: String,
  _categoryId: mongoose.SchemaTypes.ObjectId,
});

const News = mongoose.model("News", newSchema);

module.exports = News;
