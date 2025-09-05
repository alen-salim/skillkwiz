"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const images = [
  {
    title: "Skill Assessment",
    image: "/images/homepage/Carousel/Drivers-License.webp",
  },
  {
    title: "Quiz Excellence",
    image: "/images/homepage/Carousel/Pick-Laptop.webp",
  },
  {
    title: "Learning Journey",
    image: "/images/homepage/Carousel/Secure-Center.webp",
  },
  {
    title: "Hiring Simplified",
    image: "/images/homepage/Carousel/Skill-Library.webp",
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Image container with slide effect */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, i) => (
          <div key={i} className="relative w-full h-full flex-shrink-0">
            <Image
              src={img.image}
              alt={img.title || `Slide ${i}`}
              fill
              sizes="100vw" // full width on any screen
              priority={i === 0} // preload the first slide
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Dynamic Overlay Title */}
      {images[current].title && (
        <div className="absolute top-32 left-10">
          <h1
            className="text-3xl md:text-5xl font-extrabold drop-shadow-lg 
                 bg-gradient-to-r from-blue-500 to-yellow-400 
                 bg-clip-text text-transparent"
          >
            {images[current].title}
          </h1>
        </div>
      )}

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/60 text-black p-3 rounded-full hover:bg-black/70 hover:text-white"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/60 text-black p-3 rounded-full hover:bg-black/70 hover:text-white"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-3 rounded-full transition-colors ${
              i === current ? "bg-red-500 w-5" : "bg-gray-400 w-3"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
