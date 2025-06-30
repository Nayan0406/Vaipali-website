// components/ClientSpeak.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const HomeTestimonial = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    axios.get("https://vaipali-website-backend.vercel.app/api/testimonials")
      .then((res) => setTestimonials(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {testimonials.map((t) => (
        <div key={t._id} className="bg-white shadow p-4 rounded-lg">
          <img src={t.image} alt={t.name} className="w-20 h-20 rounded-full mx-auto mb-2 object-cover" />
          <h3 className="text-lg font-semibold text-center">{t.name}</h3>
          <p className="text-sm text-center text-gray-600 italic">Owner of {t.owner}</p>
          <p className="mt-2 text-gray-700">{t.description}</p>
          <p className="text-yellow-500 text-center mt-2">⭐ {t.rating} / 5</p>
        </div>
      ))}
    </div>
  );
};

export default HomeTestimonial;
