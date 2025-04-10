import { useCallback, useState } from "react";
import { motion } from "framer-motion"; // Import framer-motion
import { Color } from "../../../constants";
import ColorPicker from "../../SharedComponents/ColorPicker";
import { CopyIcon, HeartIcon } from "../../../assets/icons";

const ItemsList = [
  {
    id: 1,
    srcFocus: "./images/product-1-2.webp",
    alt: "product-1-1",
    price: 25.0,
    discount: 10,
    title: "OVERSIZED TEE - BLACK",
    availableColors: [
      { color: Color.BLACK, src: "./images/product-1-1.webp" },
      { color: Color.BEIGE, src: "./images/product-1-beige.webp" },
      { color: Color.GREY, src: "./images/product-1-grey.webp" },
      { color: Color.PEARL_PINK, src: "./images/product-1-pearlpink.webp" },
    ],
    onSale: false,
  },
  {
    id: 2,
    srcFocus: "./images/product-2-3.webp",
    alt: "product-2-1",
    price: 30.0,
    discount: 0,
    title: "PURE COTTON HEAVYWEIGHT T-SHIRT",
    availableColors: [{ color: Color.BEIGE, src: "./images/product-2-1.webp" }],
    onSale: true,
  },
  {
    id: 3,
    srcFocus: "./images/product-3-2.webp",
    alt: "product-3-1",
    price: 20.0,
    discount: 5,
    title: "OVERSIZED TEE - PEARL PINK",
    availableColors: [
      { color: Color.PEARL_PINK, src: "./images/product-3-1.webp" },
      { color: Color.BROWN, src: "./images/product-3-brown.webp" },
    ],
    onSale: false,
  },
  {
    id: 4,
    srcFocus: "./images/product-4-1-3.webp",
    alt: "product-4-1",
    price: 40.0,
    discount: 20,
    title: "LOOSE FIT CREW-NECK COTTON T-SHIRT",
    availableColors: [
      { color: Color.GREY, src: "./images/product-4-1.webp" },
      { color: Color.PINK, src: "./images/product-4-pink.webp" },
    ],
    onSale: false,
  },
];

const DiscoverSection = () => {
  const [focusIndex, setFocusIndex] = useState<number>(-1);
  const [colorIndex, setColorIndex] = useState<number[]>([0, 0, 0, 0]);
  const [hoverColorIndex, setHoverColorIndex] = useState<number[]>([
    0, 0, 0, 0,
  ]);
  const onPick = useCallback((itemIndex: number, colorIndex: number) => {
    setColorIndex((prevState) => {
      const currentState = [...prevState];
      currentState[itemIndex] = colorIndex;
      return currentState;
    });
  }, []);
  const onHover = useCallback((itemIndex: number, colorIndex: number) => {
    setHoverColorIndex((prevState) => {
      const currentState = [...prevState];
      currentState[itemIndex] = colorIndex;
      return currentState;
    });
  }, []);
  return (
    <section className="relative w-full flex pb-8 px-8 bg-white">
      <div className="flex flex-col text-left">
        <h2 className="text-3xl mb-8">Discover what's new</h2>
        <div className="flex w-full justify-between box-border mb-12">
          {ItemsList.map((item, index) => {
            return (
              <article
                key={item.id}
                className="flex-grow flex flex-col justify-center px-1 w-1/4"
              >
                <div
                  className="relative w-full h-auto overflow-hidden"
                  onMouseEnter={() => setFocusIndex(item.id)}
                  onMouseLeave={() => setFocusIndex(-1)}
                >
                  {" "}
                  {/* Add container with overflow hidden */}
                  <motion.img
                    className="cursor-pointer w-full h-full object-cover" // Ensure the image covers the container
                    src={
                      item.id === focusIndex
                        ? item.srcFocus
                        : item.availableColors[hoverColorIndex[index]].src
                    }
                    alt={item.alt}
                    whileHover={{ scale: 1.1 }} // Zoom into the image
                    transition={{ type: "spring", stiffness: 300, damping: 20 }} // Smooth animation
                  />
                  <span
                    className={`absolute right-3 top-3 cursor-pointer ${
                      focusIndex === item.id ? "visible" : "invisible"
                    }`}
                  >
                    <HeartIcon className="w-8 h-8 z-10 text-black my-1" />
                    <CopyIcon className="w-8 h-8 z-10 text-black" />
                  </span>
                  {item.onSale && (
                    <span className="absolute left-3 top-3 text-white bg-black border-2 border-black px-3 rounded-xl">
                      Sale
                    </span>
                  )}
                </div>
                <p className="pt-4 text-sm">{item.title}</p>
                <p
                  className="inline my-1 text-sm"
                  style={{ display: "inline" }}
                >
                  <span className="pr-1">
                    From $
                    {(item.price - (item.price * item.discount) / 100).toFixed(
                      2
                    )}
                  </span>
                  {Boolean(item.discount) && (
                    <span className="line-through"> ${item.price}</span>
                  )}
                </p>{" "}
                <ColorPicker
                  colorList={item.availableColors.map((item) => item.color)}
                  onPick={(colorIndex: number) => onPick(index, colorIndex)}
                  onHover={(colorIndex: number) => onHover(index, colorIndex)}
                  selectedColor={colorIndex[index]}
                />
              </article>
            );
          })}
        </div>
        <button
          className="w-48 h-16 self-center text-white text-lg mb-12 rounded-none"
          style={{ backgroundColor: "rgb(16,16,16)" }}
        >
          VIEW ALL
        </button>
      </div>
    </section>
  );
};

export default DiscoverSection;
