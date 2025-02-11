import React from "react";

const MainPage: React.FC = () => {
  return (
    <div className="relative w-full h-full">
      <div className="absolute z-10 w-full h-full">
        <img
          src="./images/main-image.webp"
          alt="Description of image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute z-20 w-full h-full flex flex-col items-center justify-center space-x-4 flex-row">
        <div className="m-10">
          <h2 className="text-[40px]">New Blanks Just Dropped</h2>
        </div>
        <div className="flex space-x-4">
          <button className="w-36 h-10 bg-black text-white border border-transparent hover:bg-white hover:text-black hover:border-black">
            MENS
          </button>
          <button className="w-36 h-10 bg-white text-black border border-transparent hover:bg-black hover:text-white">
            WOMENS
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
