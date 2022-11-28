import { Router } from "express";
import { OrdersController } from "../controllers/orders.controller.js";

export const ordersRouter = Router();

ordersRouter.get("/", OrdersController.getAllOrders);
ordersRouter.post("/", OrdersController.createOrder);
ordersRouter.patch("/:id", OrdersController.updateOrder);
ordersRouter.delete("/:id", OrdersController.deleteOrder);
