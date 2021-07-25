import asyncHandler from "express-async-handler";
import Brand from "../models/Brand";

/**
 * @desc    Fetch all brands
 * @route   GET /api/brands
 * @access  Public
 */
export const getBrands = asyncHandler(async (req, res) => {
  try {
    const brands = await Brand.query();

    if (!brands) {
      return res.status(404).json({ error: "Brands not found" });
    }

    return res.json(brands);
  } catch (err) {
    res.status(500).json(err);
  }
});

/**
 * @desc    Fetch a single brand by ID
 * @route   GET /api/brands/:id
 * @access  Public
 */
export const getBrandById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const brand = await Brand.query().findById(id);

    if (!brand) {
      return res.status(404).json({ error: "Brand not found" });
    }
    res.json(brand);
  } catch (err) {
    res.status(500).json(err);
  }
});

/**
 * @desc    Create a new brand
 * @route   POST /api/brands
 * @access  Private/Admin
 */
export const createBrand = asyncHandler(async (req, res) => {
  const { name, image, description } = req.body;
  
  const newBrand = {
    name,
    image,
    description,
  };
  
  try {
    const result = await Brand.query().insert(newBrand);
    return res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

/**
 * @desc    Delete a brand by ID
 * @route   DELETE /api/brands/:id
 * @access  Private/Admin
 */
export const deleteBrand = asyncHandler(async (req, res) => {
  const brandId = req.params.id;

  const brand = await Brand.query().findById(brandId);

  if (!brand) {
    return res.status(404).json({ error: "Brand not found" });
  }

  const brandName = brand.name;

  await Brand.query().deleteById(brandId);

  return res.json({ message: `${brandName} successfully deleted` });
});

/**
 * @desc    Update a brand
 * @route   PUT /api/brands/:id
 * @access  Private/Admin
 */
export const updateBrand = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const updatedBrand = {};

  const {
    name,
    image,
    description,
  } = req.body;

  if (name) updatedBrand.name = name;
  if (image) updatedBrand.image = image;
  if (description) updatedBrand.description = description;

  try {
    const brand = await Brand.query().findById(id);

    if (!brand) {
      res.status(404).json({ error: "Brand not found" });
    }

    const updatedItem = await Brand.query().patchAndFetchById(
      id,
      updatedBrand
    );

    return res.json(updatedItem); 
  } catch (err) {
    return res.status(500).json(err);
  }
});
