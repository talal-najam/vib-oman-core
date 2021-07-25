const { check, validationResult } = require("express-validator");

const MIN_LENGTH = 2;
const MAX_LENGTH = 50;
const MIN_DESC_LENGTH = 5;
const MAX_DESC_LENGTH = 250;

export const createGenericValidation = [
  check("name")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Name can not be empty!")
    .bail()
    .isLength({ min: MIN_LENGTH, max: 50 })
    .withMessage(
      `Name must be between ${MIN_LENGTH} and ${MAX_LENGTH} characters`
    ),
  check("description")
    .optional({ nullable: true })
    .isLength({ min: 3, max: 255 })
    .withMessage(
      `Description must be between ${MIN_DESC_LENGTH} and ${MIN_DESC_LENGTH} characters`
    ),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).json({ errors: errors.array() });
    next();
  },
];

export const updateGenericValidation = [
  check("name")
    .optional({ nullable: true })
    .isLength({ min: 2, max: 50 })
    .withMessage(
      `Name must be between ${MIN_LENGTH} and ${MAX_LENGTH} characters`
    ),
  check("description")
    .optional({ nullable: true })
    .isLength({ min: 3, max: 255 })
    .withMessage(
      `Description must be between ${MIN_DESC_LENGTH} and ${MAX_DESC_LENGTH} characters`
    ),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).json({ errors: errors.array() });
    next();
  },
];
