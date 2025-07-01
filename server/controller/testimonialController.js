import Testimonial from "../models/Testimonial.js";

export const getAllTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    res.status(200).json(testimonials);
  } catch (err) {
    console.error("Error in getAllTestimonials:", err); // 👈 log the real error
    res.status(500).json({ message: "Failed to fetch testimonials" });
  }
};
