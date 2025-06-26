import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
  image: String, 
  author: { type: String, required: true },
  date: { type: Date, default: Date.now },
});


export default mongoose.model("Blog", blogSchema);
