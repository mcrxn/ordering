import { Router } from "express";
import { ordersRouter } from "../routes/orders.routes.js";
import { productsRouter } from "../routes/products.routes.js";

export const globalRouter = Router();

globalRouter.use("/products", productsRouter);
globalRouter.use("/orders", ordersRouter);
