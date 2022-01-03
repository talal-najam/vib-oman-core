import expressAsyncHandler from "express-async-handler";
import asyncHandler from "express-async-handler";
import Product from "../models/Product";

/**
 * @desc    Fetch all products
 * @route   GET /api/products
 * @access  Public
 */
export const getProducts = asyncHandler(async (req, res) => {
  try {
    const pagination = req.query.pagination;
    const page = await parseInt(req.query.page || "0");
    const pageSize = await parseInt(req.query.pageSize || "6");

    let products = [];

    if (pagination && pagination === "true") {
      products = await Product.query().page(page, pageSize);
    } else {
      products = await Product.query();
    }

    // may need to do products.results
    if (!products) {
      return res.status(404).json({ error: "Products not found" });
    }

    products.totalPages = Math.ceil(products.total / pageSize);

    return res.json(products);
  } catch (err) {
    return res.status(500).json(err);
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
    return res.json(product);
  } catch (err) {
    return res.status(500).json(err);
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

    const result = await Product.query().insert(newProduct);
    return res.json(result);
  } catch (err) {
    return res.status(500).json(err);
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
    return res.status(404).json({ error: "Product not found" });
  }

  const productName = product.name;

  await Product.query().deleteById(productId);

  return res.json({ message: `Product: ${productName} successfully deleted` });
});

/**
 * @desc    Delete multiple products by ID
 * @route   DELETE /api/products/deleteMany
 * @access  Private/Admin
 */
export const deleteMultipleProducts = asyncHandler(async (req, res) => {
  const { ids } = req.body;
  try {
    await Product.query().delete().where("id", "IN", ids);
    return res.json({
      message: `Products successfully deleted`,
    });
  } catch (err) {
    return res.status(500).json({ err: poop });
  }
});

/**
 * @desc    Update a product
 * @route   PUT /api/products/:id
 * @access  Private/Admin
 */
export const updateProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const updatedProduct = {};

  const {
    name,
    smallImage,
    isActive,
    unitPrice,
    unitCount,
    shortDescription,
    featured,
    brandId,
  } = req.body;

  if (name) updatedProduct.name = name;
  if (smallImage) updatedProduct.small_image = smallImage;
  if (isActive) updatedProduct.is_active = isActive;
  if (unitPrice) updatedProduct.unit_price = unitPrice;
  if (unitCount) updatedProduct.unit_count = unitCount;
  if (shortDescription) updatedProduct.short_description = shortDescription;
  if (featured) updatedProduct.featured = featured;
  if (brandId) updatedProduct.brand_id = brandId;

  try {
    // probably unnecessary
    const product = await Product.query().findById(id);
    if (!product) {
      res.status(404).json({ error: "Product not found" });
    }

    // need validation before passing in the object to update
    const updatedItem = await Product.query().patchAndFetchById(
      id,
      updatedProduct
    );

    return res.json(updatedItem);
  } catch (err) {
    return res.status(500).json(err);
  }
});
