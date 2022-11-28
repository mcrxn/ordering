import { ProductsService } from "../services/products.service.js";

export class ProductsController {
  //Get all products

  static async getAllProducts(req, res) {
    try {
      const products = await ProductsService.getAllProducts();

      res.status(200).send(products);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  // Create Product

  static async createProduct(req, res) {
    try {
      const productData = req.body;

      const createdProduct = await ProductsService.createProduct(productData);

      res.status(201).send(createdProduct);
    } catch (error) {
      res.status(400).send(error);
    }
  }

  // Update Product

  static async updateProduct(req, res) {
    try {
      const productId = req.params.id;
      const updateData = req.body;

      const updatedProduct = await ProductsService.updateProduct(
        productId,
        updateData
      );

      res.status(200).send(updatedProduct);
    } catch (error) {
      res.status(400).send(error);
    }
  }

  // Delete Product

  static async deleteProduct(req, res) {
    try {
      const productId = req.params.id;

      await ProductsService.deleteProduct(productId);

      res.sendStatus(204);
    } catch (error) {
      res.status(401).send(error);
    }
  }
}
