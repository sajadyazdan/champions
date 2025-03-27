import React from "react";
import NewsTicker from "../NewsTicker/NewsTicker";

const MainPage: React.FC = () => {
  const imageSources = [
    { src: "./images/product-1-1.webp", alt: "product-1-1" },
    { src: "./images/product-2-1.webp", alt: "product-2-1" },
    { src: "./images/product-3-1.webp", alt: "product-3-1" },
    { src: "./images/product-4-1.webp", alt: "product-4-1" },
  ];
  return (
    <main>
      <section className="relative w-full">
        <div className="relative z-10 w-full h-full">
          <img
            src="./images/main-image.webp"
            alt="Description of image"
            className="w-full h-full -z-10 aspect-auto object-cover"
          />
          <div className="absolute z-20 w-full h-full flex flex-col items-center justify-center top-0 space-x-4 flex-row">
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
      </section>
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
      <section className="relative w-full flex py-16 bg-white">
        <div className="flex flex-col text-left space-y-4">
          <h2 className="text-3xl pl-4 pb-4">Discover what's new</h2>
          <div className="flex w-full justify-between box-border">
            {imageSources.map((imageSource) => {
              return (
                <article
                  key={imageSource.alt}
                  className="flex-grow flex flex-col justify-center px-1 w-1/4"
                >
                  <img src={imageSource.src} alt={imageSource.alt} />
                  <p className="pt-4 text-sm">OVERSIZED TEE - BLACK</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <section className="relative w-full flex justify-center items-center py-16 bg-[#efefef]">
        <div className="flex flex-col justify-center items-center text-center space-y-4 max-w-3xl">
          <p className="break-words">
            Share information about your brand with your customers. Describe a
            product, make announcements, or welcome customers to your store.
          </p>
        </div>
      </section>
    </main>
  );
};

export default MainPage;
