import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import Blog from "./models/Blog.js";
import { storage } from "./utlis/cloudinary.js"; 
import blogRoutes from "./routes/blogRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import axios from "axios";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use(express.json());
app.use("/api/auth", authRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});

app.use(cors({
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
}));

app.use("/api/blogs", blogRoutes);

app.use('/uploads', express.static('uploads'));


// axios.post("/api/blogs", formData, {
//   headers: {
//     "Authorization": `Bearer ${localStorage.getItem("token")}`
//   }
// });


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB error:", err));

const upload = multer({ storage });

// Route to upload blog
app.post("/api/blogs", upload.single("image"), async (req, res) => {
  try {
    const { title, content } = req.body;
    const imageUrl = req.file?.path;

    const newBlog = new Blog({
      title,
      content,
      image: imageUrl,
    });

    await newBlog.save();

    res.status(201).json({ message: "Blog created successfully!", blog: newBlog });
  } catch (error) {
    console.error("Error uploading blog:", error);
    res.status(500).json({ message: "Failed to create blog." });
  }
});

//Get the blog
app.get("/api/blogs", async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json({ blogs });
  } catch (err) {
    res.status(500).json({ message: "Error fetching blogs" });
  }
});

// PUT: Update blog
app.put("/api/blogs/:id", upload.single("image"), async (req, res) => {
  try {
    const { title, content } = req.body;
    const updateData = { title, content };

    if (req.file) {
      updateData.image = req.file.path; 
    }

    const blog = await Blog.findByIdAndUpdate(req.params.id, updateData, { new: true });

    if (!blog) return res.status(404).json({ message: "Blog not found" });

    res.json({ message: "Blog updated successfully", blog });
  } catch (error) {
    res.status(500).json({ message: "Failed to update blog" });
  }
});

// DELETE: Remove blog
app.delete("/api/blogs/:id", async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    res.json({ message: "Blog deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete blog" });
  }
});


