import mongoose from "mongoose";
// import { Product } from "./product.model.js";

const { Schema } = mongoose;

const orderSchema = new Schema({
  location: {
    type: String,
    required: true,
  },
  dateOrdered: {
    type: Date,
  },
  totalPrice: {
    type: String,
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

orderSchema.pre("save", function (next) {
  const order = this;

  if (!order.dateOrdered) {
    order.dateOrdered = new Date();
  }

  return next();
});

/**sum products price */
// orderSchema.pre("save", async function (next) {
//   const order = this;

//   console.log(order.products);

//   return next();
// });

export const Order = mongoose.model("Order", orderSchema);
