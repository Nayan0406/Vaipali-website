import React, { useState } from "react";
import axios from "axios";

const AddTestimonial = () => {
  const [formData, setFormData] = useState({
    name: "",
    owner: "",
    rating: "",
    description: "",
    image: ""
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [testimonials, setTestimonials] = useState([]); // New: local testimonials list

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image" && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, image: reader.result }));
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://vaipali-website-backend.vercel.app/api/testimonials", formData);
      console.log(res.data);
      alert("Client testimonial added!");

      // Update testimonials list
      setTestimonials((prev) => [...prev, formData]);

      // Reset form
      setFormData({ name: "", owner: "", rating: "", description: "", image: "" });
      setImagePreview(null);
    } catch (err) {
      console.error(err);
      alert("Error adding testimonial");
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-16 p-6 bg-gray-900 text-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-6 text-center">Add Client Testimonial</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Form Fields */}
        <div>
          <label className="block mb-1 font-medium">Client Name</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g., Jane Doe"
            required
            className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-600 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Owner Of</label>
          <input
            name="owner"
            value={formData.owner}
            onChange={handleChange}
            placeholder="e.g., CEO of XYZ Agency"
            required
            className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-600 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Rating (1–5)</label>
          <input
            name="rating"
            type="number"
            value={formData.rating}
            onChange={handleChange}
            min="1"
            max="5"
            required
            className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-600 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Write the client's feedback..."
            rows="4"
            required
            className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-600 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Client Image</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="w-full px-3 py-2 bg-gray-800 border border-gray-600 text-white cursor-pointer rounded"
          />
          {imagePreview && (
            <img src={imagePreview} alt="Preview" className="mt-3 w-32 h-32 object-cover rounded border" />
          )}
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded text-white font-semibold transition duration-200 cursor-pointer"
        >
          Submit Testimonial
        </button>
      </form>

      {/* Display submitted testimonials */}
      {testimonials.length > 0 && (
        <div className="mt-10 space-y-6">
          <h3 className="text-xl font-semibold">Submitted Testimonials</h3>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded shadow border border-gray-700">
              <div className="flex items-center gap-4">
                {testimonial.image && (
                  <img src={testimonial.image} alt="Client" className="w-16 h-16 object-cover rounded-full border" />
                )}
                <div>
                  <h4 className="text-lg font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.owner}</p>
                  <p className="text-yellow-400 mt-1">Rating: {testimonial.rating} ⭐</p>
                </div>
              </div>
              <p className="mt-3 text-gray-300">{testimonial.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AddTestimonial;
