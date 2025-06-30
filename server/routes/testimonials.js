import express from 'express'
const router = express.Router();

router.post("/", (req, res) => {
  const { name, owner, rating, description, image } = req.body;
  console.log("ttriger")

  if (!name || !owner || !rating || !description || !image) {
    return res.status(400).json({ message: "All fields are required" });
  }

  console.log("✅ Testimonial received:", req.body);
  res.status(200).json({ message: "Testimonial added successfully" });
});

export default router;
