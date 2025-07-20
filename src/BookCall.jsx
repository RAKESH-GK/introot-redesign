import React from "react";

const BookACall = () => {
  return (
    <section className="bg-gray-900 text-white py-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
          Book a call, share your vision.
        </h2>
        <p className="text-gray-300 text-lg mb-10">
          Let’s connect and understand how we can help turn your idea into reality.
        </p>

        {/* Calendar Placeholder */}
        <div className="bg-gradient-to-br from-gray-100 to-gray-300 text-gray-800 rounded-xl p-6 sm:p-10 shadow-xl">
          <div className="border-4 border-dashed border-gray-400 rounded-lg py-20 sm:py-28 flex items-center justify-center text-gray-500 text-xl sm:text-2xl">
            [ Calendar will appear here ]
          </div>
        </div>

        <p className="mt-8 text-sm text-gray-400">
          We'll embed a real calendar here soon.
        </p>
      </div>
    </section>
  );
};

export default BookACall;
