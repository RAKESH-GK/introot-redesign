import React from "react";
import { FaWhatsapp, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="Footer" className="bg-gray-950 text-gray-300 px-4 sm:px-8 lg:px-16 py-10 mt-0 relative z-10">
      <div className="max-w-7xl mx-auto text-center space-y-4">
        <p className="text-lg font-semibold text-white">
          Got a quick question? WhatsApp us.
        </p>

        <p className="text-sm text-gray-400">
          No need for formalities — just say “Hi” on <span className="text-green-400 font-medium">WhatsApp</span> and watch the magic happen.
        </p>

        <div className="flex justify-center mt-2">
          <a
            href="https://wa.me/+918861092749" // Replace with your actual WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-full text-white shadow-md transition"
          >
            <FaWhatsapp className="text-xl" />
            Chat on WhatsApp
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-6 text-xl text-gray-400">
          <a href="https://instagram.com/introot.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com/company/introot" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <FaLinkedin />
          </a>
          <a href="https://facebook.com/Introot.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <FaFacebook />
          </a>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-sm text-gray-500">
          © Introot @ {currentYear} — All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
