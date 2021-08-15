const express = require("express");
import {
  getProducts,
  createProduct,
  getProductById,
  deleteProduct,
  updateProduct,
  deleteMultipleProducts,
} from "../controllers/product";
import {
  createProductValidation,
  updateProductValidation,
} from "../validation/products";

const router = express.Router();

router.route("/").get(getProducts).post(createProductValidation, createProduct);

router.route("/deleteMany").delete(deleteMultipleProducts);

router
  .route("/:id")
  .get(getProductById)
  .delete(deleteProduct)
  .put(updateProductValidation, updateProduct);

export default router;
