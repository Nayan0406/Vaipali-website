import React, { useState } from "react";
import axios from "axios";

const AddTestimonial = () => {
  const [form, setForm] = useState({
    name: "",
    owner: "",
    rating: "",
    description: "",
    image: ""
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image" && files.length > 0) {
      const reader = new FileReader();
      reader.onloadend = () =>
        setForm((prev) => ({ ...prev, image: reader.result }));
      reader.readAsDataURL(files[0]);
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://vaipali-website-backend.vercel.app/api/testimonials/add", form);
      alert("Client testimonial added!");
      setForm({ name: "", owner: "", rating: "", description: "", image: "" });
    } catch (err) {
      alert("Error adding testimonial");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto p-4">
      <input name="name" value={form.name} onChange={handleChange} placeholder="Client Name" className="w-full p-2 border" />
      <input name="owner" value={form.owner} onChange={handleChange} placeholder="Owner of (company/project)" className="w-full p-2 border" />
      <input name="rating" type="number" value={form.rating} onChange={handleChange} placeholder="Rating (1-5)" className="w-full p-2 border" min="1" max="5" />
      <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" className="w-full p-2 border" />
      <input type="file" name="image" accept="image/*" onChange={handleChange} className="w-full p-2 border" />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Add Testimonial</button>
    </form>
  );
};

export default AddTestimonial;
