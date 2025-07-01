exports.getAllTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find(); // MongoDB or your DB logic
    res.status(200).json(testimonials);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch testimonials" });
  }
};