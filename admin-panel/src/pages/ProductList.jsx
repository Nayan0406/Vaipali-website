import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminProductList = () => {
  const [products, setProducts] = useState([]);

  // Fetch product list from backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="p-6 bg-white min-h-screen">
      <h2 className="text-2xl font-bold mb-6">Admin Product List</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-gray-100 rounded-xl shadow-md p-4 hover:shadow-lg transition"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
            <p className="text-gray-700 text-sm">{product.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminProductList;
