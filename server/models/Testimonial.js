import mongoose from "mongoose";

const testimonialSchema = new mongoose.Schema({
  name: { type: String, required: true },
  owner: { type: String, required: true },
  rating: { type: Number, min: 1, max: 5, required: true },
  description: { type: String, required: true },
  image: { type: String }, // URL or base64
}, { timestamps: true });

export default mongoose.model("Testimonial", testimonialSchema);
