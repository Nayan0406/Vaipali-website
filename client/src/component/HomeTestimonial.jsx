import React, { useEffect, useState } from "react";
import axios from "axios";
import { Carousel, IconButton } from "@material-tailwind/react";

export function CarouselCustomArrows() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await axios.get("https://vaipali-website-backend.vercel.app/api/testimonials");
        setTestimonials(res.data);
      } catch (error) {
        console.error("Error fetching testimonials", error);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <Carousel
      className="rounded-xl"
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 left-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 right-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </IconButton>
      )}
    >
      {testimonials.map((t, i) => (
        <div
          key={i}
          className="flex flex-col items-center justify-center text-center p-8 bg-gray-900 text-white h-[400px]"
        >
          {t.image && (
            <img
              src={t.image}
              alt={t.name}
              className="w-24 h-24 object-cover rounded-full border-2 border-white mb-4"
            />
          )}
          <h3 className="text-xl font-bold">{t.name}</h3>
          <p className="text-sm text-gray-400 mb-1">{t.owner}</p>
          <p className="text-yellow-400 font-medium">⭐ {t.rating}</p>
          <p className="mt-4 text-gray-300 max-w-xl">{t.description}</p>
        </div>
      ))}
    </Carousel>
  );
}
