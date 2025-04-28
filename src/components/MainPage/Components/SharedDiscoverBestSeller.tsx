import { useCallback, useState } from "react";
import { motion } from "framer-motion"; // Import framer-motion
import ColorPicker from "../../SharedComponents/ColorPicker";
import { CopyIcon, HeartIcon } from "../../../assets/icons";
import { Color } from "../../../constants";

interface IProps {
  itemsList: {
    id: number;
    srcFocus: string;
    alt: string;
    price: number;
    discount: number;
    title: string;
    availableColors: { color: Color; src: string }[];
    onSale: boolean;
  }[];
  displayButton?: boolean;
}

const SharedDiscoverBestSeller: React.FC<IProps> = ({
  itemsList,
  displayButton = false,
}) => {
  const [focusIndex, setFocusIndex] = useState<number>(-1);
  const [colorIndex, setColorIndex] = useState<number[]>([0, 0, 0, 0]);
  const [hoverColorIndex, setHoverColorIndex] = useState<number[]>([
    0, 0, 0, 0,
  ]);
  const [wishList, setWishList] = useState<boolean[]>([
    false,
    false,
    false,
    false,
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
  const onHeartIcon = useCallback((index: number) => {
    setWishList((prevState) => {
      const copyPrevState = [...prevState];
      copyPrevState[index] = !copyPrevState[index];
      return copyPrevState;
    });
  }, []);
  return (
    <section className="relative w-full flex pb-8 px-8 bg-white">
      <div className="flex flex-col text-left">
        <h2 className="text-3xl mb-8">Women's choice "BESTSELLER"</h2>
        <div className="flex w-full justify-between box-border mb-12 flex-wrap">
          {itemsList.map((item, index) => {
            return (
              <article
                key={item.id}
                className="flex-grow flex flex-col justify-center px-1 mb-4 w-full sm:w-1/2 lg:w-1/4"
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
                      item.id === focusIndex && colorIndex[item.id - 1] === 0
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
                    <HeartIcon
                      className={`w-8 h-8 z-10 my-1 ${
                        wishList[index] ? "fill-black" : "fill-white"
                      }`}
                      onClick={() => onHeartIcon(index)}
                    />
                    <CopyIcon className="w-8 h-8 z-10" />
                  </span>
                  {item.onSale && (
                    <span className="absolute left-3 top-3 text-white bg-black border-2 border-black px-3 rounded-xl">
                      Sale
                    </span>
                  )}
                </div>
                <div className="flex flex-col pt-4 text-left min-h-[120px]">
                  <p className="pt-4 text-sm">{item.title}</p>
                  <p
                    className="inline my-1 text-sm"
                    style={{ display: "inline" }}
                  >
                    <span className="pr-1">
                      From $
                      {(
                        item.price -
                        (item.price * item.discount) / 100
                      ).toFixed(2)}
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
                </div>
              </article>
            );
          })}
        </div>
        {displayButton && (
          <button
            className="w-48 h-16 self-center text-white text-lg mb-12 rounded-none"
            style={{ backgroundColor: "rgb(16,16,16)" }}
          >
            VIEW ALL
          </button>
        )}
      </div>
    </section>
  );
};

export default SharedDiscoverBestSeller;
