const express = require("express");
import {
  getProducts,
  createProduct,
  getProductById,
  deleteProduct,
  updateProduct,
} from "../controllers/product";
import {
  createProductValidation,
  updateProductValidation,
} from "../validation/products";

const router = express.Router();

router.route("/").get(getProducts).post(createProductValidation, createProduct);

router
  .route("/:id")
  .get(getProductById)
  .delete(deleteProduct)
  .put(updateProductValidation, updateProduct);

export default router;
