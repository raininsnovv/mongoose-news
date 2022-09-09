const { Router } = require("express");
const { newsController } = require("../controllers/news.controller");

const router = Router();

router.get("/news", newsController.getAllNews);
router.post("/news", newsController.addNews);
router.delete("/news/:id", newsController.deleteNews);
router.patch("/news", newsController.changeNews);
router.get("/news/:id", newsController.getNewsById);
router.get("/news/categories/:id", newsController.getNewsByCategoryId);

module.exports = router;
