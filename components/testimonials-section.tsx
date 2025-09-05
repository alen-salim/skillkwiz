"use client";

import { Star } from "lucide-react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    id: 1,
    name: "Jennifer Cooper",
    title: "Startup Founder, TechFlow",
    quote:
      "SkillKwiz has transformed our hiring process. We've reduced our time-to-hire by 40% and improved candidate quality significantly.",
    image: "/images/homepage/5.png",
  },
  {
    id: 2,
    name: "Michael Donovan",
    title: "HR Director, Global Systems",
    quote:
      "As an enterprise with hundreds of technical hires annually, SkillKwiz has been invaluable. Their secure testing environment ensures accurate insights.",
    image: "/images/homepage/6.png",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    title: "Talent Acquisition, InnovateTech",
    quote:
      "The flexibility of SkillKwiz's platform sets it apart. We can customize assessments and make data-driven decisions confidently.",
    image: "/images/homepage/6.png",
  },
  {
    id: 4,
    name: "David Chen",
    title: "CTO, FutureTech Solutions",
    quote:
      "The technical assessments are spot-on. We're able to quickly identify candidates with the right skills, saving our engineering team countless hours.",
    image: "/images/homepage/5.png",
  },
  {
    id: 5,
    name: "Emily Rodriguez",
    title: "Recruiting Manager, Innovate Inc",
    quote:
      "SkillKwiz has become an essential part of our hiring toolkit. The platform is intuitive, comprehensive, and reliable.",
    image: "/images/homepage/7.png",
  },
];

export default function TestimonialsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll-based parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Different speeds
  const yProfile = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const yName = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const yStars = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const yQuote = useTransform(scrollYProgress, [0, 1], [0, -20]);

  return (
    <section
      ref={containerRef}
      className="py-32 relative bg-gradient-to-b from-[#00418d] via-[#00336b] to-[#001a36]"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-20">
          What Our Clients Say
        </h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="rounded-2xl p-6 shadow-lg backdrop-blur-lg border border-white/20 bg-white/10 flex flex-col items-center text-center text-white"
            >
              <motion.div
                style={{ y: yProfile }}
                className="rounded-full overflow-hidden mb-3 border-2 border-white shadow-lg w-20 h-20"
              >
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <motion.h3 style={{ y: yName }} className="font-bold text-lg">
                {testimonial.name}
              </motion.h3>
              <p className="text-sm text-gray-200 mb-5">{testimonial.title}</p>

              <motion.div
                style={{ y: yStars }}
                className="flex justify-center mb-4"
              >
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-[#f6c648] text-[#f6c648]"
                  />
                ))}
              </motion.div>

              <motion.p style={{ y: yQuote }} className="text-sm text-gray-100">
                "{testimonial.quote}"
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
