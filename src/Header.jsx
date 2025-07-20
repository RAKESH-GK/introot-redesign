import React, { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-white dark:bg-gray-900 shadow-md fixed top-0 left-0 w-full z-50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo Image */}
            <a href="/" className="flex items-center">
              <img src="asset/Introot logo white.png" alt="MyLogo" className="h-6 w-auto" />
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Contact</a>
              <a href="#service" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Service</a>
              <a href="#story" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Story</a>
              <a href="#careers" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Careers</a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Links */}
        {isMobileMenuOpen && (
          <div className="md:hidden px-4 pb-4 space-y-2">
            <a href="#contact" className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Contact</a>
            <a href="#service" className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Service</a>
            <a href="#story" className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Story</a>
            <a href="#careers" className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Careers</a>
          </div>
        )}
      </nav>

      {/* Push content down below fixed nav */}
      <div className="pt-16"></div>
    </>
  );
};

export default Header;
