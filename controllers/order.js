import asyncHandler from "express-async-handler";
import Order from "../models/Order";

/**
 * Sample input from from client
 *
 * name*     Talal Najam
 * email*    talalnajam98@gmail.com
 * phone*    07522030838
 * date*     03-01-2022 02:43:05
 * address   Flat 31 High Point
 * cart* [{productId*, quantity*, productName, price}]
 */

/**
 * @desc    Create a new order
 * @route   POST /api/orders
 * @access  Public
 */
export const createOrder = asyncHandler(async (req, res) => {
  const { name, image, description } = req.body;

  const newOrder = {
      customer_id: '1111',
      date_purchased: new Date().toISOString(),
      order_status: 'received'
  }

//   const newOrder = {
//     name,
//     email,
//     phone,
//     date,
//     address,
//     cart,
//   };

  try {
    const returnValue = await Order.transaction(async trx => {
      await Order.query().insert(newOrder);
      // Whatever you return from the transaction callback gets returned
      // from the `transaction` function.
      return 'the return value of the transaction';
    });
    // Here the transaction has been committed.
  } catch (err) {
    // Here the transaction has been rolled back.
  }

  try {
    const result = await Category.query().insert(newCategory);
    return res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});
