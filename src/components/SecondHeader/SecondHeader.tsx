import { useCallback, useState } from "react";

import { ArrowIcon } from "../../assets/icons";
import CurrencyDropwdownMenu from "../CurrencyDropdownMenu/CurrentcyDropdownMenu";
import LanguageDropdownMenu from "../LanguageDropdownMenu/LanguageDropdownMenu";
import SocialMedia from "../SocialMedia/SocialMedia";
import SecondHeaderTextSlideShow from "./SecondHeaderTextSlideShow";
import { wrap } from "motion";

const dynamicTexts = [
  "WELCOME TO OUR STORE",
  "FREE SHIPPING ON ORDERS OVER £75",
];

const SecondHeader: React.FC = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  const setSlide = useCallback(
    (newDirection: 1 | -1) => {
      const nextItem = wrap(0, dynamicTexts.length, textIndex + newDirection);
      setTextIndex(nextItem);
    },
    [textIndex]
  );

  const handleLeftArrowOnClick = useCallback(() => setSlide(-1), [setSlide]);
  const handleRightArrowOnClick = useCallback(() => setSlide(1), [setSlide]);

  return (
    <header
      className="flex items-center justify-between px-6 py-4 border-gray-200 flex-shrink-0 relative"
      style={{ height: "40px", backgroundColor: "rgba(16,16,16,0.03)" }}
    >
      <div className="hidden md:flex">
        <SocialMedia />
      </div>
      <div className="flex w-full md:w-1/2 justify-center text-xs">
        <ArrowIcon
          className="w-4 h-4 rotate-90 cursor-pointer"
          onClick={handleLeftArrowOnClick}
          onMouseEnter={() => setDirection(-1)}
        />
        <SecondHeaderTextSlideShow
          direction={direction}
          text={dynamicTexts[textIndex]}
        />
        <ArrowIcon
          className="w-4 h-4 -rotate-90 cursor-pointer"
          onClick={handleRightArrowOnClick}
          onMouseEnter={() => setDirection(1)}
        />
      </div>
      <div className="hidden md:flex space-x-4">
        <CurrencyDropwdownMenu downwardDirection />
        <LanguageDropdownMenu downwardDirection />
      </div>
    </header>
  );
};

export default SecondHeader;
