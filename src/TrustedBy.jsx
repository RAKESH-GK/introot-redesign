import React from "react";

const brands = [
  { name: "Aadarsh", logo: "/asset/partners/aadarsh.png" },
  { name: "Bhagath Sing", logo: "/asset/partners/bhagath-sing.png" },
  { name: "CALD", logo: "/asset/partners/cald.png" },
  { name: "DJ Jagath", logo: "/asset/partners/dj-jagath.png" },
  { name: "Indus", logo: "/asset/partners/indus.png" },
  { name: "Jai Sri Ram", logo: "/asset/partners/jai-sri-ram.png" },
  { name: "Medha", logo: "/asset/partners/medha.png" },
  { name: "Shree Dental", logo: "/asset/partners/shree-dental-logo-01.png" },
  { name: "Story By Click", logo: "/asset/partners/story-by-click.png" },
  { name: "Swaag Ice Creams", logo: "/asset/partners/swaad-ice-creams.png" },
  { name: "Trading Kannada", logo: "/asset/partners/trading-kannada-logo.png" },
];

const TrustedBy = () => {
  return (
    <section className="bg-white dark:bg-gray-900 pt-12 px-4 sm:px-8 lg:px-16 overflow-hidden">
      {/* Section Heading */}
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm uppercase tracking-widest text-blue-600 font-semibold mb-2">
          Trusted by 20+ happy customers
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white">
          Our Partners & Clients
        </h2>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden">
        {/* Side Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-10 pointer-events-none" />

        {/* Continuous Marquee Track */}
        <div className="flex w-max animate-marquee-slow">
          {[...brands, ...brands].map((brand, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-20 sm:h-28 w-[140px] sm:w-[200px] mx-2 flex-shrink-0"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-full w-auto object-contain"
              />
            </div>
          ))}
        </div>

        {/* Duplicate track for seamless loop */}
        <div className="flex w-max animate-marquee-slow2 absolute top-0">
          {[...brands, ...brands].map((brand, index) => (
            <div
              key={`dup-${index}`}
              className="flex items-center justify-center h-20 sm:h-28 w-[140px] sm:w-[200px] mx-2 flex-shrink-0"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-full w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
