import asyncHandler from "express-async-handler";
import Product from "../models/Product";

/**
 * @desc    Fetch all products
 * @route   GET /api/products
 * @access  Public
 */
export const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.query();
  return res.json(products);
});

/**
 * @desc    Fetch a single product by ID
 * @route   GET /api/products/:id
 * @access  Public
 */
export const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.query().findById(req.params.id);

  if (!product) {
    res.status(404);
    return res.json({ error: "Product not found" });
  }

  res.json(product);
});

/**
 * @desc    Create a new product
 * @route   POST /api/products
 * @access  Private/Admin
 */
export const createProduct = asyncHandler(async (req, res) => {
  const product = {
    name: "Something",
    image: "no image",
    brand: "Loreal",
    count_in_stock: 3,
  };

  const newProduct = await Product.query().insert(product);

  return res.json(newProduct);
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

  const numDeleted = await Product.query().deleteById(productId);

  return res.json(numDeleted);
});

/**
 * @desc    Update a single product
 * @route   PUT /api/products/:id
 * @access  Private/Admin
 */
export const updateProduct = asyncHandler(async (req, res) => {
    // TODO: Implement functionality
    // const {
    //   name,
    //   price,
    //   description,
    //   image,
    //   brand,
    //   category,
    //   countInStock,
    // } = req.body
  
    // const product = await Product.findById(req.params.id)
  
    // if (product) {
    //   product.name = name
    //   product.price = price
    //   product.description = description
    //   product.image = image
    //   product.brand = brand
    //   product.category = category
    //   product.countInStock = countInStock
  
    //   const updatedProduct = await product.save()
    //   res.json(updatedProduct)
    // } else {
    //   res.status(404)
    // //   throw new Error('Product not found')
    // }
  })
