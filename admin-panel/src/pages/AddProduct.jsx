import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProduct = () => {
  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [editingId, setEditingId] = useState(null);

  // Fetch products from backend
  const fetchProducts = async () => {
    try {
      const res = await axios.get("https://vaipali-website-backend.vercel.app/api/products");
      setProducts(res.data.products);
    } catch (err) {
      toast.error("Failed to fetch products");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Handle add or update product
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    if (image) formData.append("image", image);

    try {
      if (editingId) {
        await axios.put(`https://vaipali-website-backend.vercel.app/api/products/${editingId}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        toast.success("Product updated");
        setEditingId(null);
      } else {
        await axios.post("https://vaipali-website-backend.vercel.app/api/products", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        toast.success("Product added");
      }

      setTitle(""); setDescription(""); setImage(null);
      fetchProducts();
    } catch (err) {
      toast.error("Failed to add/update product");
    }
  };

  // Handle edit
  const handleEdit = (product) => {
    setEditingId(product._id);
    setTitle(product.title);
    setDescription(product.description);
    setImage(null); 
  };

  // Handle delete
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await axios.delete(`https://vaipali-website-backend.vercel.app/api/products/${id}`);
        toast.success("Product deleted");
        fetchProducts();
      } catch (err) {
        toast.error("Failed to delete product");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Add Products</h1>

        <form onSubmit={handleSubmit} className="space-y-4 bg-gray-800 p-6 rounded-lg">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 bg-gray-700 rounded"
            required
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-3 bg-gray-700 rounded"
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="w-full text-sm text-white bg-gray-700 file:bg-blue-600 file:text-white file:rounded file:px-4 file:py-2 file:border-none cursor-pointer"
          />
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded cursor-pointer">
            {editingId ? "Update Product" : "Add Product"}
          </button>
        </form>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Products</h2>
        <div className="grid gap-4">
          {products.map((product) => (
            <div key={product._id} className="bg-gray-800 p-4 rounded shadow-md">
              {product.image && (
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover rounded mb-2"
                />
              )}
              <h3 className="text-xl font-semibold">{product.title}</h3>
              <p className="text-gray-300">{product.description}</p>
              <div className="flex gap-3 mt-3">
                <button
                  onClick={() => handleEdit(product)}
                  className="px-4 py-1 bg-yellow-400 text-black rounded hover:bg-yellow-500 cursor-pointer"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(product._id)}
                  className="px-4 py-1 bg-red-600 rounded hover:bg-red-700 cursor-pointer"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
};

export default AddProduct;
