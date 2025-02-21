import SocialMedia from "../SocialMedia/SocialMedia";

const SecondHeader: React.FC = () => {
  return (
    <header
      className="flex items-center justify-between px-6 py-4 border-gray-200 flex-shrink-0 relative"
      style={{ height: "40px", backgroundColor: "rgba(16,16,16,0.03)" }}
    >
      <SocialMedia />
    </header>
  );
};

export default SecondHeader;
