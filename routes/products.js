const express = require("express");
import {
  getProducts,
  createProduct,
  getProductById,
  deleteProduct
} from "../controllers/product";
const router = express.Router();

router.route("/").get(getProducts).post(createProduct);
router.route("/:id").get(getProductById).delete(deleteProduct);

export default router;
