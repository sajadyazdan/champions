import React from "react";
import { motion } from "motion/react";
import { ArrowIcon, SearchIcon, CartIcon } from "../../assets/icons";

const menuItems = ["MENS", "WOMENS", "THEMES", "PAGES", "COLLECTIONS"];

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
      {/* Left Section: Hamburger Menu */}
      <div className="flex items-center space-x-4">
        <button className="text-gray-700 focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 text-sm text-gray-700">
          {menuItems.map((item) => (
            <motion.a
              href="#"
              className="flex items-center hover:text-black hover:underline"
              initial="initial"
              whileHover="hover"
              variants={{
                initial: {},
                hover: {},
              }}
            >
              {item}
              <motion.span
                variants={{
                  initial: { rotate: 0, x: 0 },
                  hover: { rotate: 180, x: 4 }, // Rotate and move on hover
                }}
                transition={{ duration: 0.3 }}
              >
                <ArrowIcon className="w-3 h-3 ml-1" />
              </motion.span>
            </motion.a>
          ))}
        </nav>
      </div>

      {/* Center Section: Logo */}
      <div className="text-lg font-bold text-gray-900">
        <img src="/images/logo-title.avif" alt="Logo" className="h-8" />
      </div>

      {/* Right Section: Search and Cart */}
      <div className="flex items-center space-x-4">
        {/* Search Icon */}
        <search className="text-gray-700">
          <div className="relative">
            <form className="flex items-center group">
              <input
                type="search"
                className="border border-slate-600 rounded-3xl px-2 pl-12 h-10 group-hover:border-2 group-hover:border-2 focus:!border-4 focus:outline-none"
              ></input>
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="absolute bg-transparent left-0 border-none focus:outline-none"
              >
                <SearchIcon className="h-5 w-5" />
              </motion.button>
            </form>
          </div>
        </search>

        {/* Cart Icon */}
        <div className="relative">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="text-gray-700 bg-transparent border-none focus:outline-none"
          >
            <CartIcon className="h-5 w-5" />
          </motion.button>
          <span className="absolute top-0 right-0 h-4 w-4 bg-black text-white text-xs flex items-center justify-center rounded-full">
            1
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
