const { check, validationResult } = require("express-validator");

export const createBrandValidation = [
  check("name")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Brand name can not be empty!"),
  check("description")
    .optional({ nullable: true })
    .isLength({ min: 3, max: 255 })
    .withMessage("description must be between 3 and 255 characters"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).json({ errors: errors.array() });
    next();
  },
];

export const updateBrandValidation = [
  check("description")
    .optional({ nullable: true })
    .isLength({ min: 3, max: 255 })
    .withMessage("description must be between 3 and 255 characters"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).json({ errors: errors.array() });
    next();
  },
];
