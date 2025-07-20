import React from "react";
import { SiGooglepay, SiPhonepe } from "react-icons/si";
import { MdQrCode } from "react-icons/md";

const DonationSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 sm:p-10 text-center relative overflow-hidden">

        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-2">
          Support Our Mission 🚀
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Your contribution helps us grow and serve better!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-items-center mb-8">
          {/* GPay */}
          <div className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-6 rounded-xl w-full flex flex-col items-center shadow-md transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-blue-300 dark:hover:ring-blue-500">
            <SiGooglepay
              size={40}
              className="transition-transform duration-300 group-hover:animate-bounce"
            />
            <p className="mt-3 font-semibold text-sm">Google Pay</p>
            <p className="text-xs break-all mt-1">your-upi@bank</p>
          </div>

          {/* PhonePe */}
          <div className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-4 py-6 rounded-xl w-full flex flex-col items-center shadow-md transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-purple-300 dark:hover:ring-purple-500">
            <SiPhonepe
              size={40}
              className="transition-transform duration-300 group-hover:animate-bounce"
            />
            <p className="mt-3 font-semibold text-sm">PhonePe</p>
            <p className="text-xs break-all mt-1">your-upi@bank</p>
          </div>

          {/* QR Code */}
          <div className="bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 px-4 py-6 rounded-xl w-full flex flex-col items-center shadow-md transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-pink-300 dark:hover:ring-pink-500">
            <MdQrCode
              size={40}
              className="transition-transform duration-300 group-hover:animate-bounce"
            />
            <p className="mt-3 font-semibold text-sm">Scan & Pay</p>
            <img
              src="/your-qr-code.png" // Replace with actual QR code
              alt="UPI QR"
              className="w-24 mt-2 rounded-md border"
            />
          </div>
        </div>

        <p className="text-gray-500 dark:text-gray-400 text-xs">
          Payments are secure and go directly to our UPI ID.
        </p>
      </div>
    </section>
  );
};

export default DonationSection;
