import asyncHandler from "express-async-handler";
import Category from "../models/Category";

/**
 * @desc    Fetch all categories
 * @route   GET /api/categories
 * @access  Public
 */
export const getCategories = asyncHandler(async (req, res) => {
  try {
    const categories = await Category.query();

    if (!categories) {
      return res.status(404).json({ error: "categories not found" });
    }

    return res.json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});

/**
 * @desc    Fetch a single category by ID
 * @route   GET /api/categories/:id
 * @access  Public
 */
export const getCategoryById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const category = await Category.query().findById(id);

    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }
    res.json(category);
  } catch (err) {
    res.status(500).json(err);
  }
});

/**
 * @desc    Create a new category
 * @route   POST /api/categories
 * @access  Private/Admin
 */
export const createCategory = asyncHandler(async (req, res) => {
  const { name, image, description } = req.body;

  const newCategory = {
    name,
    image,
    description,
  };

  try {
    const result = await Category.query().insert(newCategory);
    return res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

/**
 * @desc    Delete multiple categories by ID
 * @route   DELETE /api/categories/deleteMany
 * @access  Private/Admin
 */
export const deleteMultipleCategories = asyncHandler(async (req, res) => {
  const { ids } = req.body;
  try {
    await Category.query().delete().where("id", "IN", ids);
    return res.json({
      message: `Categories successfully deleted`,
    });
  } catch (err) {
    return res.status(500).json({ err: poop });
  }
});

/**
 * @desc    Delete a category by ID
 * @route   DELETE /api/categories/:id
 * @access  Private/Admin
 */
export const deleteCategory = asyncHandler(async (req, res) => {
  const categoryId = req.params.id;

  const category = await Category.query().findById(categoryId);

  if (!category) {
    return res.status(404).json({ error: "Category not found" });
  }

  const categoryName = category.name;

  await Category.query().deleteById(categoryId);

  return res.json({
    message: `Category: ${categoryName} successfully deleted`,
  });
});

/**
 * @desc    Update a category
 * @route   PUT /api/categories/:id
 * @access  Private/Admin
 */
export const updateCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const updatedCategory = {};

  const { name, image, description } = req.body;

  if (name) updatedCategory.name = name;
  if (image) updatedCategory.image = image;
  if (description) updatedCategory.description = description;

  try {
    const category = await Category.query().findById(id);

    if (!category) {
      res.status(404).json({ error: "Category not found" });
    }

    const updatedItem = await Category.query().patchAndFetchById(
      id,
      updatedCategory
    );

    return res.json(updatedItem);
  } catch (err) {
    return res.status(500).json(err);
  }
});
