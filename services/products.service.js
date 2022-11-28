import { Product } from "../models/product.model.js";

export class ProductsService {
  //Get All Products
  static async getAllProducts() {
    try {
      const products = await Product.find({});

      return products;
    } catch (error) {
      throw error;
    }
  }

  // Create Product
  static async createProduct(productData) {
    try {
      const product = new Product({ ...productData });

      const createdProduct = await product.save();

      return createdProduct;
    } catch (error) {
      throw error;
    }
  }

  // Update Product
  static async updateProduct(productId, updateData) {
    try {
      const product = await Product.findById(productId);

      if (!product) throw "Product not found";

      const allowedUpdates = ["price", "name", "description", "imageUrl"];

      const updateKeys = Object.keys(updateData);

      updateKeys.forEach((key) => {
        if (allowedUpdates.includes(key)) {
          product[key] = updateData[key];
        }
      });

      const updatedProduct = await product.save();

      return updatedProduct;
    } catch (error) {
      throw error;
    }
  }

  //Delete Product
  static async deleteProduct(productId) {
    try {
      const deletedProduct = await Product.findByIdAndDelete(productId);

      if (!deletedProduct) throw "Product not found";
    } catch (error) {
      throw error;
    }
  }
}
