const { check, validationResult } = require("express-validator");

export const validateProduct = [
  check("name")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Product name can not be empty!")
    .bail()
    .isLength({ min: 3 })
    .withMessage("Minimum 3 characters required!"),
  check("is_active")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Please specify if the product is active or not"),
  check("unit_price")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Product unit price can not be empty!"),
  check("unit_count")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Product unit count can not be empty!")
    .bail()
    .isInt()
    .withMessage("Product unit count must be a whole number"),
  check("short_description")
    .isLength({ min: 3, max: 255 })
    .withMessage("Short description must be between 3 and 255 characters"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).json({ errors: errors.array() });
    next();
  },
];
