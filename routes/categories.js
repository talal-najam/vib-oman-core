const express = require("express");
import {
  getCategories,
  getCategoryById,
  createCategory,
  deleteCategory,
  updateCategory,
} from "../controllers/category";
import {
  createGenericValidation,
  updateGenericValidation,
} from "../validation";

const router = express.Router();

router
  .route("/")
  .get(getCategories)
  .post(createGenericValidation, createCategory);

router
  .route("/:id")
  .get(getCategoryById)
  .delete(deleteCategory)
  .put(updateGenericValidation, updateCategory);

export default router;
