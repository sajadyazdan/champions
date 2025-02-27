import { ArrowIcon } from "../../assets/icons";
import CurrencyDropwdownMenu from "../CurrencyDropdownMenu/CurrentcyDropdownMenu";
import LanguageDropdownMenu from "../LanguageDropdownMenu/LanguageDropdownMenu";
import SocialMedia from "../SocialMedia/SocialMedia";

const SecondHeader: React.FC = () => {
  return (
    <header
      className="flex items-center justify-between px-6 py-4 border-gray-200 flex-shrink-0 relative"
      style={{ height: "40px", backgroundColor: "rgba(16,16,16,0.03)" }}
    >
      <div>
        <SocialMedia />
      </div>
      <div className="flex text-xs">
        <ArrowIcon className="w-4 h-4 rotate-90" />{" "}
        <div className="px-36">WELCOME TO OUR STORE</div>
        <ArrowIcon className="w-4 h-4 -rotate-90" />{" "}
      </div>
      <div className="flex space-x-4">
        <CurrencyDropwdownMenu downwardDirection />
        <LanguageDropdownMenu downwardDirection />
      </div>
    </header>
  );
};

export default SecondHeader;
