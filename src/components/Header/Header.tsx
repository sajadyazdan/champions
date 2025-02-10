import React, { useEffect } from "react";
import { motion } from "motion/react";
import {
  ArrowIcon,
  SearchIcon,
  CartIcon,
  HamburgerIcon,
  CloseIcon,
} from "../../assets/icons";

const menuItems = [
  { id: 1, label: "MENS" },
  { id: 2, label: "WOMENS" },
  { id: 3, label: "THEMES" },
  { id: 4, label: "PAGES" },
  { id: 5, label: "COLLECTIONS" },
];

interface HeaderProps {
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isMenuOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  // Prevent scrolling when sidebar is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header
      className="flex items-center justify-between px-6 py-4 border-gray-200 flex-shrink-0 relative"
      style={{ height: "76px" }}
    >
      {/* Left Section: Hamburger Menu */}
      <div className="flex items-center space-x-4">
        <motion.button
          className="text-black bg-transparent border-none focus:outline-none"
          onClick={() => setIsMenuOpen((prevState) => !prevState)}
          whileHover={{ scale: 1.1 }}
        >
          {isMenuOpen ? (
            <CloseIcon className="w-6 h-6 bg-gray-200 rounded-full" />
          ) : (
            <HamburgerIcon className="text-black w-6 h-6" />
          )}
        </motion.button>

        {/* Navigation Links */}
        <nav className="hidden min-[990px]:flex flex-wrap items-center text-sm text-gray-700">
          {menuItems.map((item) => (
            <motion.div
              key={item.id}
              className="flex items-center hover:text-black px-4 hover:underline cursor-pointer"
              initial="initial"
              whileHover="hover"
              variants={{
                initial: {},
                hover: {},
                tap: {},
              }}
            >
              {item.label}
              <motion.span
                variants={{
                  initial: { rotate: 0, x: 0 },
                  hover: { rotate: 180, x: 4 }, // Rotate and move on hover
                }}
                transition={{ duration: 0.3 }}
                // whileHover="hover"
                // whileTap="tap"
              >
                <ArrowIcon className="w-3 h-3 ml-1" />
              </motion.span>
            </motion.div>
          ))}
        </nav>
      </div>

      {/* Center Section: Logo */}
      <div className="text-lg font-bold text-gray-900">
        <img src="/images/logo-title.avif" alt="Logo" className="h-8" />
      </div>

      {/* Right Section: Search and Cart */}
      <div className="flex justify-end	 w-1/3 space-x-4">
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
