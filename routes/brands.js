const express = require("express");
import {
  getBrands,
  getBrandById,
  createBrand,
  deleteBrand,
  updateBrand,
} from "../controllers/brand";
import {
  createBrandValidation,
  updateBrandValidation,
} from "../validation/brands";

const router = express.Router();

router.route("/").get(getBrands).post(createBrandValidation, createBrand);

// TOOD: add update validation
router
  .route("/:id")
  .get(getBrandById)
  .delete(deleteBrand)
  .put(updateBrandValidation, updateBrand);

export default router;
