import React from "react";
import NewsTicker from "../NewsTicker/NewsTicker";
import DiscoverSection from "./Components/DiscoverSection";
import CollectionSection from "./Components/CollectionSection";
import SliderSection from "./Components/SliderSection";
import BestSellerSection from "./Components/BestSellerSection";

const MainPage: React.FC = () => {
  return (
    <main>
      <SliderSection />
      <NewsTicker />
      <section className="relative w-full flex justify-center items-center py-16">
        <div className="flex flex-col justify-center items-center text-center space-y-4 max-w-3xl">
          <p className="break-words">"CELEBRATE" AN ERA OF EXCLUSIVE LUXURY</p>
          <p className="break-words">
            Discover a world of uniqueness with our collection of limited
            clothing, where each piece is a unique expression of style and
            individuality, you will not find anywhere else.
          </p>
        </div>
      </section>
      <DiscoverSection />
      <section className="relative w-full flex justify-center items-center py-16 bg-[#efefef] mb-36">
        <div className="flex flex-col justify-center items-center text-center space-y-4 max-w-3xl">
          <p className="break-words">
            Share information about your brand with your customers. Describe a
            product, make announcements, or welcome customers to your store.
          </p>
        </div>
      </section>
      <CollectionSection />
      <BestSellerSection />
    </main>
  );
};

export default MainPage;
