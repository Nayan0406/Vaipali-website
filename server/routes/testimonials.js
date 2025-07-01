import express from 'express';
import Testimonial from "../models/Testimonial.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, owner, rating, description, image } = req.body;
  const testimonial = new Testimonial ({ name, owner, rating, description, image });
  await testimonial.save();

  if (!name || !owner || !rating || !description || !image) {
    return res.status(400).json({ message: "All fields are required" });
  }
});

export default router;
