const express = require("express");
import { getOrders, createOrder, getOrderById } from "../controllers/order";
import { createGenericValidation } from "../validation";

const router = express.Router();

router.route("/").get(getOrders).post(createGenericValidation, createOrder);

router.route("/:id").get(getOrderById);

export default router;
