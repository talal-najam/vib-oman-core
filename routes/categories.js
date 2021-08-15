const express = require("express");
import {
  getCategories,
  getCategoryById,
  createCategory,
  deleteCategory,
  updateCategory,
  deleteMultipleCategories,
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

router.route("/deleteMany").delete(deleteMultipleCategories);

router
  .route("/:id")
  .get(getCategoryById)
  .delete(deleteCategory)
  .put(updateGenericValidation, updateCategory);

export default router;
