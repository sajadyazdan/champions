import React, { useCallback, useEffect, useRef } from "react";
import { ArrowIcon } from "../../assets/icons";
import { motion } from "motion/react";

interface DropDownMenuProps {
  items: DropDownItem[];
  selectedId: number;
  buttonStyle?: string;
  setSelectedId: React.Dispatch<React.SetStateAction<number>>;
  downwardDirection?: boolean;
}

interface DropDownItem {
  id: number;
  label: string;
  icon?: JSX.Element;
}

const DropDownMenu: React.FC<DropDownMenuProps> = ({
  items,
  buttonStyle,
  selectedId,
  setSelectedId,
  downwardDirection,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Function to handle clicks outside the dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const selectedItem = items.find(
    (item: DropDownItem) => item.id === selectedId
  );
  const handleClick = useCallback(
    () => setIsOpen((prevState) => !prevState),
    [setIsOpen]
  );
  const handleSelection = useCallback(
    (id: number) => {
      setSelectedId(id);
    },
    [setSelectedId]
  );
  const verticalDirectionStyle = downwardDirection ? "top-3/4" : "bottom-3/4";
  return (
    <motion.div
      className={`flex text-left flex-start w-full relative text-black bg-transparent border-none px-0 focus:outline-none ${buttonStyle} cursor-pointer`}
      onClick={handleClick}
      ref={dropdownRef}
    >
      <span className="flex gap-x-1">
        {selectedItem?.icon}
        {selectedItem?.label}
        <motion.span
          className="w-4 h-4 self-center"
          initial={{ rotate: 0 }}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ArrowIcon className="w-4 h-4 self-center" />
        </motion.span>
      </span>
      {isOpen && (
        <div
          className={`absolute ${verticalDirectionStyle} border border-2 bg-white z-40`}
        >
          <ul className="flex flex-col items-start">
            {isOpen &&
              items.map((item: DropDownItem) => (
                <li
                  key={item.id}
                  className="flex gap-x-1 hover:bg-gray-200 pl-4 pr-14 py-2"
                  onClick={() => handleSelection(item.id)}
                >
                  {item?.icon}
                  {item?.label}
                </li>
              ))}
          </ul>
        </div>
      )}
    </motion.div>
  );
};

export default DropDownMenu;
