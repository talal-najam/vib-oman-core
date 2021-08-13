const { check, validationResult } = require("express-validator");

export const createProductValidation = [
  check("name")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Product name can not be empty!")
    .bail()
    .isLength({ min: 3 })
    .withMessage("Minimum 3 characters required!"),
  check("isActive")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Please specify if the product is active or not")
    .isBoolean()
    .withMessage("Is Active is not a boolean"),
  check("unitPrice")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Product unit price can not be empty!"),
  check("unitCount")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Product unit count can not be empty!")
    .bail()
    .isInt()
    .withMessage("Product unit count must be a whole number"),
  check("shortDescription")
    .optional({ nullable: true })
    .isLength({ min: 3, max: 255 })
    .withMessage("Short description must be between 3 and 255 characters"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).json({ errors: errors.array() });
    next();
  },
];

export const updateProductValidation = [
  check("name")
    .optional({ nullable: true })
    .isLength({ min: 3 })
    .withMessage("Minimum 3 characters required!"),
  check("isActive")
    .optional({ nullable: true })
    .isBoolean()
    .withMessage("Is Active is not a boolean"),
  check("unitCount")
    .optional({ nullable: true })
    .isInt()
    .withMessage("Product unit count must be a whole number"),
  check("shortDescription")
    .optional({ nullable: true })
    .isLength({ min: 3, max: 255 })
    .withMessage("Short description must be between 3 and 255 characters"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).json({ errors: errors.array() });
    next();
  },
];
