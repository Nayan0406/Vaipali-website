import express from "express";
import multer from "multer";
import Product from "../models/Product.js";

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });

// POST product
router.post("/", upload.single("image"), async (req, res) => {
    try {
        console.log("req.body:", req.body);
        console.log("req.file:", req.file);

        const { title, description } = req.body;
        const imageBuffer = req.file ? req.file.buffer : null;

        const product = new Product({
            title,
            description,
            image: imageBuffer ? `data:image/jpeg;base64,${imageBuffer.toString("base64")}` : null,
        });

        await product.save();
        res.status(201).json({ message: "Product added", product });

    } catch (err) {
        console.error("Error adding product:", err);
        res.status(500).json({ message: "Internal Server Error", error: err.message });
    }
});

//get the product
router.get("/", async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json({ products });
    } catch (err) {
        res.status(500).json({ message: "Failed to fetch products" });
    }
});

// DELETE a product
router.delete("/:id", async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Product deleted" });
    } catch (err) {
        res.status(500).json({ message: "Error deleting product" });
    }
});

// UPDATE a product
router.put("/:id", upload.single("image"), async (req, res) => {
    try {
        const { title, description } = req.body;
        const imageBuffer = req.file?.buffer;

        const updated = {
            title,
            description,
        };

        if (imageBuffer) {
            updated.image = `data:image/jpeg;base64,${imageBuffer.toString("base64")}`;
        }

        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, updated, {
            new: true,
        });

        res.status(200).json({ message: "Product updated", product: updatedProduct });
    } catch (err) {
        res.status(500).json({ message: "Error updating product", error: err.message });
    }
});

router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.status(200).json({ product });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
