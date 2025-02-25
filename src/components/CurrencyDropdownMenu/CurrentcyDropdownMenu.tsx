import { useState } from "react";
import { FlagIcons } from "../../assets/icons";
import DropDownMenu from "../SharedComponents/DropDownMenu";
interface ButtonStyle {
  buttonStyle?: string;
  downwardDirection?: boolean;
}
const currencyItems = [
  { id: 1, label: "USD", icon: <FlagIcons.FlagUS className="h-6 w-6" /> },
  { id: 2, label: "EUR", icon: <FlagIcons.FlagFR className="h-6 w-6" /> },
  { id: 3, label: "GBP", icon: <FlagIcons.FlagGB className="h-6 w-6" /> },
  { id: 4, label: "EUR", icon: <FlagIcons.FlagDE className="h-6 w-6" /> },
  { id: 5, label: "EUR", icon: <FlagIcons.FlagES className="h-6 w-6" /> },
  { id: 6, label: "INR", icon: <FlagIcons.FlagIN className="h-6 w-6" /> },
];

const CurrencyDropwdownMenu: React.FC<ButtonStyle> = ({
  buttonStyle,
  downwardDirection,
}) => {
  const [selectedCurrency, setSelectedCurrency] = useState(1);
  return (
    <DropDownMenu
      items={currencyItems}
      buttonStyle={buttonStyle}
      selectedId={selectedCurrency}
      setSelectedId={setSelectedCurrency}
      downwardDirection={downwardDirection}
    />
  );
};

export default CurrencyDropwdownMenu;
