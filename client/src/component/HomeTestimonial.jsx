import React, { useEffect, useState } from "react";
import axios from "axios";

const HomeTestimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await axios.get("https://vaipali-website-backend.vercel.app/api/testimonials");
        setTestimonials(res.data);
      } catch (err) {
        console.error("Error fetching testimonials", err);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <section className="py-10 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">What Our Clients Say</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-gray-800 p-4 rounded shadow-lg border border-gray-700">
              {t.image && (
                <img src={t.image} alt={t.name} className="w-16 h-16 object-cover rounded-full border mb-3" />
              )}
              <h3 className="text-xl font-semibold">{t.name}</h3>
              <p className="text-sm text-gray-400">{t.owner}</p>
              <p className="text-yellow-400 mt-1">⭐ {t.rating}</p>
              <p className="mt-2 text-gray-300">{t.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonials;
