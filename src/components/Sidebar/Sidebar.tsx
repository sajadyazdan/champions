import React, { useCallback } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { HeartIcon, PersonIcon, ReloadIcon } from "../../assets/icons";
import SocialMedia from "../SocialMedia/SocialMedia";
import LanguageDropdownMenu from "../LanguageDropdownMenu/LanguageDropdownMenu";
import CurrencyDropwdownMenu from "../CurrencyDropdownMenu/CurrentcyDropdownMenu";

interface SidebarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const sidebarItems = [
  { id: 1, name: "Home", icon: null, quantity: 0 },
  { id: 2, name: "Shop", icon: null, quantity: 0 },
  { id: 3, name: "Men", icon: null, quantity: 0 },
  { id: 4, name: "Women", icon: null, quantity: 0 },
  { id: 5, name: "Bestseller", icon: null, quantity: 0 },
  { id: 6, name: "Blog", icon: null, quantity: 0 },
  { id: 7, name: "About Us", icon: null, quantity: 0 },
  { id: 8, name: "Contact", icon: null, quantity: 0 },
  { id: 9, name: "Wishlist", icon: <HeartIcon />, quantity: 1 },
  { id: 10, name: "Compare", icon: <ReloadIcon />, quantity: 1 },
];

const Sidebar: React.FC<SidebarProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const MotionLink = motion(Link);
  const handleMenuClose = useCallback(() => {
    setIsMenuOpen(false);
  }, [setIsMenuOpen]);

  if (!isMenuOpen) return null;

  return (
    <>
      <div
        className="flex absolute z-30 w-full bg-transparent"
        style={{ height: "calc(100vh - 76px)" }}
      >
        <aside className="relative flex flex-col flex-nowrap justify-between text-left w-1/4 h-full bg-white text-white overflow-auto">
          <ul className="py-6">
            {sidebarItems.map((item) => {
              return (
                <li
                  key={item.id}
                  className="py-4 hover:bg-gray-200 px-10 p-2 cursor-pointer"
                >
                  <Link to="/" className="relative flex gap-x-1 self-center">
                    {item.icon}
                    {item.name}
                    {item.quantity ? (
                      <span className="absolute bottom-4 left-2 h-4 w-4 bg-black text-white text-xs flex items-center justify-center rounded-full">
                        {item.quantity}
                      </span>
                    ) : null}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div
            className="py-10 px-10"
            style={{ backgroundColor: "rgba(16,16,16,0.03)" }}
          >
            <MotionLink
              to="/"
              className="flex items-center gap-x-2"
              initial="initial"
              whileHover="hover"
              variants={{
                initial: {},
                hover: {},
              }}
            >
              <motion.span
                variants={{
                  initial: { scale: 1 },
                  hover: { scale: 1.2 }, // Rotate and move on hover
                }}
                transition={{ duration: 0.3 }}
              >
                <PersonIcon />
              </motion.span>
              LOG IN
            </MotionLink>
            <CurrencyDropwdownMenu buttonStyle="pt-10" />
            <LanguageDropdownMenu buttonStyle="pt-5" />
            <SocialMedia socialMediaStyles="mt-3" />
          </div>
        </aside>
        <div
          className="w-3/4 h-full bg-gray-800  opacity-25"
          onClick={handleMenuClose}
        ></div>
      </div>
    </>
  );
};

export default Sidebar;
