import React from "react";
import { Link } from "react-router";

interface SidebarProps {
  isMenuOpen: boolean;
}

const sidebarItems = [
  { id: 1, name: "Home" },
  { id: 2, name: "Shop" },
  { id: 3, name: "Men" },
  { id: 4, name: "Women" },
  { id: 5, name: "Bestseller" },
  { id: 6, name: "Blog" },
  { id: 7, name: "About Us" },
  { id: 8, name: "Contact" },
];

const Sidebar: React.FC<SidebarProps> = ({ isMenuOpen }) => {
  if (!isMenuOpen) return null;
  return (
    <>
      <div className="flex absolute w-full h-full bg-transparent">
        <aside className="w-1/4 h-full bg-white text-white">
          <ul className="py-6 text-left">
            {sidebarItems.map((item) => {
              return (
                <li
                  key={item.id}
                  className="my-4 hover:bg-gray-200 px-10 p-2 cursor-pointer"
                >
                  <Link to="/">{item.name}</Link>
                </li>
              );
            })}
          </ul>
        </aside>
        <div className="w-3/4 h-full bg-gray-800  opacity-25"></div>
      </div>
    </>
  );
};

export default Sidebar;
