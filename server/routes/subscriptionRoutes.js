import express from "express";
import Subscription from "../models/Subscription.js";
const router = express.Router();

// POST /api/subscriptions - Create
router.post("/", async (req, res) => {
  try {
    const { firstName, lastName, email } = req.body;
    const newSub = new Subscription({ firstName, lastName, email });
    await newSub.save();
    res.status(201).json({ message: "Subscription saved", subscription: newSub });
  } catch (err) {
    console.error("Error saving subscription:", err);
    res.status(500).json({ error: "Failed to save subscription" });
  }
});

// GET /api/subscriptions - Read (for Admin Panel)
router.get("/", async (req, res) => {
  try {
    const subs = await Subscription.find().sort({ createdAt: -1 });
    res.json({ subscriptions: subs });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch subscriptions" });
  }
});

module.exports = router;
