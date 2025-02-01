import React, { useCallback } from "react";
import { ArrowIcon } from "../../assets/icons";
import { motion } from "motion/react";

interface DropDownMenuProps {
  items: DropDownItem[];
  selectedId: number;
  buttonStyle?: string;
  setSelectedId: React.Dispatch<React.SetStateAction<number>>;
}

interface DropDownItem {
  id: number;
  label: string;
  icon: JSX.Element;
}

const DropDownMenu: React.FC<DropDownMenuProps> = ({
  items,
  buttonStyle,
  selectedId,
  setSelectedId,
}) => {
  const [isOpen, setItOpen] = React.useState(false);
  const selectedItem = items.find(
    (item: DropDownItem) => item.id === selectedId
  );
  const handleClick = useCallback(
    () => setItOpen((prevState) => !prevState),
    [setItOpen]
  );
  const handleSelection = useCallback(
    (id: number) => {
      setSelectedId(id);
    },
    [setSelectedId]
  );
  return (
    <motion.button
      className={`flex text-left flex-start w-full relative text-black bg-transparent border-none px-0 focus:outline-none ${buttonStyle}`}
      onClick={handleClick}
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
        <div className={`absolute bottom-3/4 border border-2 bg-white`}>
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
    </motion.button>
  );
};

export default DropDownMenu;
