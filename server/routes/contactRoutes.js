import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { firstName, lastName, email, phone, message } = req.body;
    const contact = new Contact({ firstName, lastName, email, phone, message});
    await contact.save();
    res.status(201).json({ message: "Contact message saved", contact : contact });
  } catch (error) {
    res.status(500).json({ message: "Error saving contact", error });
  }
});

router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json({ contacts });
  } catch (error) {
    res.status(500).json({ message: "Error fetching contacts", error });
  }
});

export default router;
