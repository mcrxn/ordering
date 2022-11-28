import { Order } from "../models/order.model.js";

export class OrdersService {
  // Get All Orders
  static async getAllOrders() {
    try {
      const orders = await Order.find({}).populate("products");

      return orders;
    } catch (error) {
      throw error;
    }
  }

  // Create Order
  static async createOrder(orderData) {
    try {
      const order = new Order({ ...orderData });

      const createdOrder = await order.save();

      return createdOrder;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  // Update Order
  static async updateOrder(orderId, updateData) {
    try {
      const order = await Order.findById(orderId);

      if (!order) throw "Order not found";

      const allowedUpdates = ["products", "totalPrice"];

      const updateKeys = Object.keys(updateData);

      updateKeys.forEach((key) => {
        if (allowedUpdates.includes(key)) {
          order[key] = updateData[key];
        }
      });

      const updatedOrder = await order.save();

      return updatedOrder;
    } catch (error) {
      throw error;
    }
  }

  // Delete Order
  static async deleteOrder(orderId) {
    try {
      const deletedOrder = await Order.findByIdAndDelete(orderId);

      if (!deletedOrder) throw "Order not found";
    } catch (error) {
      throw error;
    }
  }
}
