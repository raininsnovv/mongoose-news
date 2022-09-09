const { Router } = require("express");
const {
  categoriesController,
} = require("../controllers/categories.controller");

const router = Router();

router.get("/categories", categoriesController.getCategories);
router.post("/categories", categoriesController.addCategories);
router.delete("/categories/:id", categoriesController.deleteCategories);

module.exports = router;
