import React, { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuLinks = [
    { name: 'Contact', href: '#Footer' },
    { name: 'Service', href: '#Services' },
    { name: 'Story', href: '#VisionMission' },
    { name: 'Works', href: '#Works' },
  ];

  return (
    <>
      <nav className="bg-white dark:bg-gray-900 shadow-md fixed top-0 left-0 w-full z-50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            {/* Logo */}
            <a href="/" className="flex items-center">
              <img
                src="asset/Introot logo white.png"
                alt="MyLogo"
                className="h-6 w-auto"
              />
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {menuLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 scroll-smooth"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Links */}
        {isMobileMenuOpen && (
          <div className="md:hidden px-4 pb-4 space-y-2">
            {menuLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 scroll-smooth"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Spacer for fixed header */}
      <div className="pt-16"></div>
    </>
  );
};

export default Header;
