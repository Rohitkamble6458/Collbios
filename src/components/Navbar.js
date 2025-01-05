import React, { useState } from 'react';

const Navbar = () => {
  // State to toggle the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">Collabios</div>

        {/* Toggle button for mobile view */}
        <button
          className="lg:hidden text-gray-600 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Menu (horizontal with spacing) */}
        <div className="hidden lg:flex lg:space-x-6">
          <a
            href="#header"
            className="text-gray-600 hover:text-blue-600 cursor-pointer"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-gray-600 hover:text-blue-600 cursor-pointer"
          >
            About
          </a>
          <a
            href="#features"
            className="text-gray-600 hover:text-blue-600 cursor-pointer"
          >
            Features
          </a>
          <a
            href="#testimonials"
            className="text-gray-600 hover:text-blue-600 cursor-pointer"
          >
            Testimonials
          </a>
          <a
            href="#join"
            className="text-gray-600 hover:text-blue-600 cursor-pointer"
          >
            Join
          </a>
          <a
            href="#contact"
            className="text-gray-600 hover:text-blue-600 cursor-pointer"
          >
            Contact
          </a>
        </div>
      </div>

      {/* Mobile Menu (vertical layout and visible when toggled) */}
      <div
        className={`lg:hidden ${isMenuOpen ? 'flex' : 'hidden'} flex-col items-center mt-4 px-4`}
      >
        <a
          href="#header"
          className="text-gray-600 hover:text-blue-600 cursor-pointer py-2"
        >
          Home
        </a>
        <a
          href="#about"
          className="text-gray-600 hover:text-blue-600 cursor-pointer py-2"
        >
          About
        </a>
        <a
          href="#features"
          className="text-gray-600 hover:text-blue-600 cursor-pointer py-2"
        >
          Features
        </a>
        <a
          href="#testimonials"
          className="text-gray-600 hover:text-blue-600 cursor-pointer py-2"
        >
          Testimonials
        </a>
        <a
          href="#join"
          className="text-gray-600 hover:text-blue-600 cursor-pointer py-2"
        >
          Join
        </a>
        <a
          href="#contact"
          className="text-gray-600 hover:text-blue-600 cursor-pointer py-2"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
