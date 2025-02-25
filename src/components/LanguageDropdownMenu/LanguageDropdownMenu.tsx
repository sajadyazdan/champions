import { useState } from "react";
import DropDownMenu from "../SharedComponents/DropDownMenu";

const languageItems = [
  { id: 1, label: "English" },
  { id: 2, label: "Français" },
  { id: 3, label: "Español" },
  { id: 4, label: "Deutsch" },
];

interface ButtonStyle {
  buttonStyle?: string;
  downwardDirection?: boolean;
}

const LanguageDropdownMenu: React.FC<ButtonStyle> = ({
  buttonStyle,
  downwardDirection,
}) => {
  const [selectedLangId, setSelectedLangId] = useState(1);
  return (
    <DropDownMenu
      items={languageItems}
      buttonStyle={buttonStyle}
      selectedId={selectedLangId}
      setSelectedId={setSelectedLangId}
      downwardDirection={downwardDirection}
    />
  );
};

export default LanguageDropdownMenu;
