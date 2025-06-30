import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  image: String, 
  author: { type: String, required: true },
  date: { type: Date, default: Date.now },
});


export default mongoose.model("Blog", blogSchema);
