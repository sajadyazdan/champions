import { useCallback, useState } from "react";
import { motion } from "framer-motion"; // Import framer-motion
import { Color } from "../../../constants";
import ColorPicker from "../../SharedComponents/ColorPicker";

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
  },
  {
    id: 2,
    srcFocus: "./images/product-2-3.webp",
    alt: "product-2-1",
    price: 30.0,
    discount: 0,
    title: "PURE COTTON HEAVYWEIGHT T-SHIRT",
    availableColors: [{ color: Color.BEIGE, src: "./images/product-2-1.webp" }],
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
      <div className="flex flex-col text-left space-y-4">
        <h2 className="text-3xl pb-4">Discover what's new</h2>
        <div className="flex w-full justify-between box-border">
          {ItemsList.map((item, index) => {
            return (
              <article
                key={item.id}
                className="flex-grow flex flex-col justify-center px-1 w-1/4"
              >
                <div className="relative w-full h-auto overflow-hidden">
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
                    onMouseEnter={() => setFocusIndex(item.id)}
                    onMouseLeave={() => setFocusIndex(-1)}
                    whileHover={{ scale: 1.1 }} // Zoom into the image
                    transition={{ type: "spring", stiffness: 300, damping: 20 }} // Smooth animation
                  />
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
      </div>
    </section>
  );
};

export default DiscoverSection;
