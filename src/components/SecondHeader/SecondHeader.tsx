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
      <div>Central text</div>
      <div className="flex space-x-4">
        <CurrencyDropwdownMenu />
        <LanguageDropdownMenu />
      </div>
    </header>
  );
};

export default SecondHeader;
