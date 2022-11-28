import { OrdersService } from "../services/orders.service.js";

export class OrdersController {
  // Get All Orders
  static async getAllOrders(req, res) {
    try {
      const orders = await OrdersService.getAllOrders();

      res.status(200).send(orders);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  // Create Order
  static async createOrder(req, res) {
    try {
      const orderData = req.body;

      const createdOrder = await OrdersService.createOrder(orderData);

      res.status(201).send(createdOrder);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  }

  // Update Order

  static async updateOrder(req, res) {
    try {
      const orderId = req.params.orderId;
      const updateData = req.body;

      const updatedOrder = await OrdersService.updateOrder(orderId, updateData);

      res.status(200).send(updatedOrder);
    } catch (error) {
      res.status(400).send(error);
    }
  }

  // Delete Order
  static async deleteOrder(req, res) {
    try {
      const orderId = req.params.orderId;

      await OrdersService.deleteOrder(orderId);

      res.sendStatus(204);
    } catch (error) {
      res.status(401).send(error);
    }
  }
}
