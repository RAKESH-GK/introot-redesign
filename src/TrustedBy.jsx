import React from "react";

const brands = [
  { name: "ifixit", logo: "/asset/ifixit.png" },
  { name: "buz", logo: "/asset/buz.png" },
  { name: "ourearth", logo: "/asset/ourearth.png" },
  { name: "Brand Four", logo: "/asset/magicdoc.png" },
  { name: "Brand Five", logo: "/asset/bolter.png" },
  { name: "Brand Six", logo: "/asset/kit-kitchen.png" },
];

const TrustedBy = () => {
  const fullBrandList = [...brands, ...brands]; // For infinite loop

  return (
    <section className="bg-white dark:bg-gray-900 py-12 px-4 sm:px-8 lg:px-16 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center mb-8">
        <p className="text-sm uppercase tracking-widest text-blue-600 font-semibold mb-2">
          Trusted by 20+ happy customers
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white">
          Our Partners & Clients
        </h2>
      </div>

      {/* Marquee Container */}
      <div className="relative mx-auto overflow-hidden w-[1024px] max-w-full">
        {/* Side Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-10" />

        {/* Marquee Track */}
        <div className="overflow-hidden">
          <div className="flex animate-marquee gap-16 whitespace-nowrap">
            {fullBrandList.map((brand, index) => (
              <div
                key={index}
                className="flex items-center justify-center h-16 w-[160px] flex-shrink-0"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-6 w-auto object-contain grayscale hover:grayscale-0 transition duration-300 ease-in-out dark:grayscale dark:hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
