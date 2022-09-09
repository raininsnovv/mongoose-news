const mongoose = require("mongoose");
const express = require("express");
const app = express();
const port = 4500;

app.use(express.json());

app.use(require("./routes/news.route"));
app.use(require("./routes/categories.route"));
app.use(require("./routes/comments.route"));
mongoose
  .connect(
    "mongodb+srv://raininsnovv:Nukaktebeskazat_1@cluster0.muvlnn7.mongodb.net/mongoose-news",
    {}
  )
  .then(() => console.log("Успешно соединились с сервером MongoDB"))
  .catch(() => console.log("Ошибка при соединении с сервером MongoDB"));

app.listen(port, () => {
  console.log("Example app listening at http://localhost:${port}");
});
