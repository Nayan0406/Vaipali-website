import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import Blog from "./models/Blog.js";
import { storage } from "./utlis/cloudinary.js"; 
import productRoutes from "./routes/productRoutes.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use(express.json());

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});

app.use(cors({
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
}));

const corsOptions = {
  origin: ["https://your-frontend.vercel.app"], // or "*" for development
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

app.use(cors(corsOptions));

// app.use("/api/blogs", blogRoutes);

app.use('/uploads', express.static('uploads'));

app.use("/api/products", productRoutes);


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

app.get("/api/blogs/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    res.json({ blog });
  } catch (err) {
    res.status(500).json({ message: "Error fetching blog" });
  }   
})

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


//product route
// app.get('/api/products', async (req, res) => {
//   try {
//     const products = await Product.find();
//     res.json(products);
//   } catch (err) {
//     res.status(500).json({ error: 'Server Error' });
//   }
// });

