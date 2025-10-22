import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const StickyWhatsApp = () => {
  return (
    <a
      href="https://wa.me/919876543210" // 🔁 Replace with your WhatsApp number (e.g. 919876543210)
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 flex items-center justify-center transition-all duration-300 animate-bounce"
    >
      <FaWhatsapp className="text-3xl" />
    </a>
  );
};

export default StickyWhatsApp;
