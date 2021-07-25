const express = require("express");
import {
  getBrands,
  getBrandById,
  createBrand,
  deleteBrand,
  updateBrand,
} from "../controllers/brand";
import {
  createGenericValidation,
  updateGenericValidation,
} from "../validation";

const router = express.Router();

router.route("/").get(getBrands).post(createGenericValidation, createBrand);

router
  .route("/:id")
  .get(getBrandById)
  .delete(deleteBrand)
  .put(updateGenericValidation, updateBrand);

export default router;
