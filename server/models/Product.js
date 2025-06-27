import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  image: String,
});
export default mongoose.model("Product", productSchema);
