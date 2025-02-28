import { useCallback, useState } from "react";
import { ArrowIcon } from "../../assets/icons";
import CurrencyDropwdownMenu from "../CurrencyDropdownMenu/CurrentcyDropdownMenu";
import LanguageDropdownMenu from "../LanguageDropdownMenu/LanguageDropdownMenu";
import SocialMedia from "../SocialMedia/SocialMedia";

const dynamicTexts = [
  "WELCOME TO OUR STORE",
  "FREE SHIPPING ON ORDERS OVER £75",
];

const SecondHeader: React.FC = () => {
  const [textIndex, setTextIndex] = useState(0);
  const handleRightArrow = useCallback(() => {
    setTextIndex((prev: number) => (prev + 1) % dynamicTexts.length);
  }, []);
  const handleLeftArrow = useCallback(() => {
    setTextIndex((prev: number) =>
      prev === 0 ? dynamicTexts.length - 1 : prev - 1
    );
  }, []);
  return (
    <header
      className="flex items-center justify-between px-6 py-4 border-gray-200 flex-shrink-0 relative"
      style={{ height: "40px", backgroundColor: "rgba(16,16,16,0.03)" }}
    >
      <div>
        <SocialMedia />
      </div>
      <div className="flex text-xs">
        <ArrowIcon className="w-4 h-4 rotate-90" onClick={handleLeftArrow} />{" "}
        <div className="px-36 w-lg">{dynamicTexts[textIndex]}</div>
        <ArrowIcon
          className="w-4 h-4 -rotate-90"
          onClick={handleRightArrow}
        />{" "}
      </div>
      <div className="flex space-x-4">
        <CurrencyDropwdownMenu downwardDirection />
        <LanguageDropdownMenu downwardDirection />
      </div>
    </header>
  );
};

export default SecondHeader;
