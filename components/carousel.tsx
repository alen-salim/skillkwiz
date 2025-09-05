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

  const nextSlide = () => setCurrent((p) => (p + 1) % images.length);
  const prevSlide = () =>
    setCurrent((p) => (p - 1 + images.length) % images.length);

  useEffect(() => {
    const t = setInterval(nextSlide, 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative w-full h-[500px] md:h-[100vh] overflow-hidden">
      {/* Slides */}
      {images.map((img, i) => {
        const isActive = i === current;
        const isNext = i === (current + 1) % images.length;

        return (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out will-change-transform ${
              isActive ? "opacity-100 z-20" : "opacity-0 z-10"
            }`}
            aria-hidden={!isActive}
          >
            <Image
              src={img.image}
              alt={img.title || `Slide ${i}`}
              fill
              sizes="100vw"
              priority={isActive || isNext}
              className="object-cover"
            />

            {/* Overlay Title */}
            {isActive && img.title && (
              <div className="absolute top-32 left-10 pointer-events-none">
                <h1
                  className="text-3xl md:text-5xl font-extrabold 
                             bg-gradient-to-r from-blue-500 to-yellow-400 
                             bg-clip-text text-transparent drop-shadow"
                >
                  {img.title}
                </h1>
              </div>
            )}
          </div>
        );
      })}

      {/* Left Arrow (high z-index so it sits above slides) */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute top-1/2 left-4 -translate-y-1/2 z-50 bg-white/85 text-black p-3 rounded-full hover:bg-black/75 hover:text-white transition"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Right Arrow (high z-index so it sits above slides) */}
      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute top-1/2 right-4 -translate-y-1/2 z-50 bg-white/85 text-black p-3 rounded-full hover:bg-black/75 hover:text-white transition"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 flex space-x-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-3 rounded-full transition-all ${
              i === current ? "bg-red-500 w-5" : "bg-gray-400 w-3"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
