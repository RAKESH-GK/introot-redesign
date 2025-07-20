import React from "react";
import { motion } from "framer-motion";

const images = [
  "/works/1.jpg",
  "/works/2.jpg",
  "/works/3.jpg",
  "/works/4.jpg",
  "/works/5.jpg",
  "/works/6.jpg",
  "/works/7.jpg"
];

const OurWorks = () => {
  const duplicated = [...images, ...images]; // For infinite scroll

  return (
    <section className="relative bg-gray-900 py-20 overflow-hidden">
      {/* Section Heading */}
      <div className="max-w-6xl mx-auto px-4 text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Our Works</h2>
        <p className="text-gray-400 mt-4 text-lg">
          Explore the digital magic we’ve crafted for brands just like yours.
        </p>
      </div>

      {/* Side Gradients for Desktop Only */}
      <div className="hidden sm:block absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-gray-900 to-transparent z-10 pointer-events-none" />
      <div className="hidden sm:block absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-gray-900 to-transparent z-10 pointer-events-none" />

      {/* Marquee Container */}
      <div className="overflow-x-auto sm:overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {duplicated.map((src, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="flex-shrink-0 w-[300px] sm:w-[360px] h-[200px] sm:h-[260px] bg-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-xl mx-2"
            >
              <img
                src={src}
                alt={`work-${index}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWorks;
