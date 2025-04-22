import { GreaterIcon } from "../../../assets/icons";

function SliderSection() {
  return (
    <section className="relative w-full">
      <div className="relative z-10 w-full h-full">
        <picture>
          <source
            media="(min-width: 768px)"
            srcSet="./images/main-image.webp"
          />
          <img
            src="./images/main-image-small.webp"
            alt="Description of image"
            className="w-full h-full -z-10 aspect-auto object-cover"
          />
        </picture>
        <div className="absolute z-20 w-full h-full flex flex-col items-center justify-start top-0 space-x-4 flex-row md:justify-center">
          <div className="m-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl">
              New Blanks Just Dropped
            </h2>
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
        <div className="flex absolute z-20 bottom-10 right-10 gap-x-1">
          <span className="flex w-12 h-12 rounded-full justify-center bg-white items-center cursor-pointer rotate-90 border-2 hover:scale-110 transition-transform">
            <i className="flex w-5 h-5 justify-center">
              <GreaterIcon />
            </i>
          </span>
          <span className="flex w-12 h-12 rounded-full justify-center bg-white items-center cursor-pointer -rotate-90 border-2 hover:scale-110 transition-transform">
            <i className="flex w-5 h-5 justify-center">
              <GreaterIcon />
            </i>
          </span>
        </div>
      </div>
    </section>
  );
}

export default SliderSection;
