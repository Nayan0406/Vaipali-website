import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [otherProducts, setOtherProducts] = useState([]);
  const [loading, setLoading] = useState(true); // ✅ loading state

  const fetchProduct = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/api/products/${id}`);
      setProduct(res.data.product);
    } catch (err) {
      console.error("Error fetching product:", err);
    }
  };

  const fetchOtherProducts = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/products");
      const filtered = res.data.products.filter((p) => p._id !== id);
      setOtherProducts(filtered);
    } catch (err) {
      console.error("Error fetching other products:", err);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // ✅ Start loading
      await Promise.all([fetchProduct(), fetchOtherProducts()]);
      setLoading(false); // ✅ End loading
    };

    fetchData();
  }, [id]);

  if (loading || !product) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-[#0f0f11] text-white">
        <div className="flex flex-col items-center gap-4">
          <div className="h-12 w-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-lg">Loading product...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f0f11] text-white px-4 py-10 sm:px-6 lg:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {/* Left: Other Products */}
        <div className="col-span-1 lg:sticky top-10 h-fit">
          <h2 className="text-2xl font-semibold mb-4">Other Products</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4 max-h-[80vh] overflow-y-auto pr-2 scrollbar-hide">
            {otherProducts.map((item) => (
              <div
                key={item._id}
                onClick={() => navigate(`/products/${item._id}`)}
                className="cursor-pointer bg-gray-800 p-3 rounded-xl shadow hover:shadow-lg hover:-translate-y-1 transition-transform duration-300"
              >
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-32 object-cover rounded mb-2"
                  />
                )}
                <h3 className="text-md font-bold mb-1 truncate">{item.title}</h3>
                <p className="text-sm text-gray-400 line-clamp-2">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Product Details */}
        <div className="col-span-2 lg:sticky top-10 h-fit">
          <div className="p-6">
            {product.image && (
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover rounded-lg mb-6"
              />
            )}
            <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
            <p className="text-gray-300 leading-relaxed">{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
