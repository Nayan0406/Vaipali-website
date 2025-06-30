import express from "express";
import Testimonial from "../models/Testimonial.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, owner, rating, description, image } = req.body;
    const newTestimonial = new Testimonial({ name, owner, rating, description });
    await newTestimonial.save();
    res.status(201).json({ message: "Testimonial added successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    res.json(testimonials);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
