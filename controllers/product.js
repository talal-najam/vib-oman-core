import asyncHandler from "express-async-handler";
import Product from "../models/Product";

/**
 * @desc    Fetch all products
 * @route   GET /api/products
 * @access  Public
 */
export const getProducts = asyncHandler(async (req, res) => {
  try {
    const products = await Product.query();

    if (!products) {
      return res.status(404).json({ error: "Products not found" });
    }

    return res.json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

/**
 * @desc    Fetch a single product by ID
 * @route   GET /api/products/:id
 * @access  Public
 */
export const getProductById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.query().findById(id);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

/**
 * @desc    Create a new product
 * @route   POST /api/products
 * @access  Private/Admin
 */
export const createProduct = asyncHandler(async (req, res) => {
  try {
    const newProduct = {
      name: req.body.name,
      small_image: req.body.smallImage,
      is_active: req.body.isActive,
      unit_price: req.body.unitPrice,
      unit_count: req.body.unitCount,
      short_description: req.body.shortDescription,
      featured: req.body.featured,
      brand_id: req.body.brandId,
    };

     //validation here
    const result = await Product.query().insert(newProduct);
    return res.json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

/**
 * @desc    Delete a product by ID
 * @route   DELETE /api/products/:id
 * @access  Private/Admin
 */
export const deleteProduct = asyncHandler(async (req, res) => {
  const productId = req.params.id;

  const product = await Product.query().findById(productId);

  if (!product) {
    res.status(404);
    return res.json({ error: "Product not found" });
  }

  const productName = product.name;

  await Product.query().deleteById(productId);

  return res.json({ message: `${productName} successfully deleted` });
});

/**
 * @desc    Update a product
 * @route   PUT /api/products/:id
 * @access  Private/Admin
 */
export const updateProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    // probably unnecessary
    const product = await Product.query().findById(id);
    if (!product) {
      res.status(404).json({ error: "Product not found" });
    }

    // need validation before passing in the object to update
    const updatedItem = await Product.query().patchAndFetchById(id, req.body);

    res.json(updatedItem);
  } catch (err) {
    res.status(500).json(err);
  }
});
