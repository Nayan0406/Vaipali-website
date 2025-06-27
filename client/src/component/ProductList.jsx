import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // ✅ Add loading state
  const navigate = useNavigate();

  const fetchProducts = async () => {
    setLoading(true); // ✅ Start loading
    try {
      const res = await axios.get("https://vaipali-website-backend.vercel.app/api/products");
      setProducts(res.data.products);
    } catch (err) {
      console.error("Failed to fetch products", err);
    } finally {
      setLoading(false); // ✅ Stop loading
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-[#0f0f11] text-white">
        <div className="flex flex-col items-center gap-4">
          <div className="h-12 w-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-lg">Loading products...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f0f11] text-white px-4 py-8 sm:px-6 lg:px-12">
      <h1 className="text-3xl sm:text-4xl font-bold mb-10 text-center">Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {products.map((product) => (
          <div
            key={product._id}
            onClick={() => navigate(`/products/${product._id}`)}
            className="cursor-pointer bg-gray-800 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
          >
            {product.image && (
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 line-clamp-1">{product.title}</h2>
              <p className="text-sm text-gray-300 line-clamp-2">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
