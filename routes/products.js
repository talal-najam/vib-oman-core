const express = require("express");
import {
  getProducts,
  createProduct,
  getProductById,
  deleteProduct,
  updateProduct,
} from "../controllers/product";
import { validateProduct } from "../validation/products";
const router = express.Router();
router.route("/").get(getProducts).post(validateProduct, createProduct);
router
  .route("/:id")
  .get(getProductById)
  .delete(deleteProduct)
  .put(updateProduct);

export default router;
