import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

export function HomeTestimonial() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await axios.get("https://vaipali-website-backend.vercel.app/api/testimonials");
        setTestimonials(res.data);
      } catch (error) {
        console.error("Error fetching testimonials", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <div className="text-center mb-10 mt-10 px-4">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
        What Our Clients Are<br />Saying
      </h1>

      <div className="flex flex-col items-center justify-center mt-10 space-y-10">
        {loading ? (
          <div className="text-white text-lg">Loading testimonials...</div>
        ) : (
          <div
            className="carousel carousel-end rounded-box p-4 space-x-4 overflow-x-auto w-full max-w-6xl scroll-smooth snap-x snap-mandatory"
            ref={scrollRef}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="carousel-item snap-start min-w-[250px] max-w-xs bg-gray-800 text-white p-4 rounded-lg flex flex-col items-start text-left space-y-3 border border-gray-600"
              >
                {/* 1. Image */}
                <img
                  src={t.image}
                  alt={t.name}
                  className="rounded-full object-cover h-24 w-24 border border-white mb-2"
                />

                {/* 2. Rating */}
                <div className="text-yellow-400">
                  {Array.from({ length: parseInt(t.rating) }, (_, index) => (
                    <span key={index}>⭐</span>
                  ))}
                </div>

                {/* 3. Description */}
                <p className="text-sm text-gray-300">{t.description}</p>

                {/* 4. Name & Owner */}
                <div className="mt-2">
                  <h3 className="text-md font-semibold">{t.name}</h3>
                  <p className="text-sm text-gray-400">{t.owner}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default HomeTestimonial;
