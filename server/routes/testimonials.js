import express from 'express'
import Testimonial from "../models/Testimonial.js";
const router = express.Router();

router.post("/", async (req, res) => {
  const { name, owner, rating, description, image } = req.body;
  if (!name || !owner || !rating || !description || !image) {
    return res.status(400).json({ message: "All fields are required" });
  }
try {
    const testimonial = await Testimonial.create({ name, owner, rating, description, image });
    console.log("✅ Testimonial received:", req.body);
    res.status(200).json({ message: "Testimonial added successfully", testimonial });
  } catch (error) {
    console.error("❌ Error saving testimonial:", error);
    res.status(500).json({ message: "Server error" });
  }


});

export default router;
