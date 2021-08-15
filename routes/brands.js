const express = require("express");
import {
  getBrands,
  getBrandById,
  createBrand,
  deleteBrand,
  updateBrand,
  deleteMultipleBrands,
} from "../controllers/brand";
import {
  createGenericValidation,
  updateGenericValidation,
} from "../validation";

const router = express.Router();

router.route("/").get(getBrands).post(createGenericValidation, createBrand);

router.route("/deleteMany").delete(deleteMultipleBrands);

router
  .route("/:id")
  .get(getBrandById)
  .delete(deleteBrand)
  .put(updateGenericValidation, updateBrand);

export default router;
