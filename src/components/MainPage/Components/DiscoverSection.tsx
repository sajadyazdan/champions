import { useState } from "react";
import { Color } from "../../../constants";
import ColorPicker from "../../SharedComponents/ColorPicker";

const ItemsList = [
  {
    id: 1,
    src: "./images/product-1-1.webp",
    srcFocus: "./images/product-1-2.webp",
    alt: "product-1-1",
    price: 25.0,
    discount: 10,
    title: "OVERSIZED TEE - BLACK",
    colorList: [Color.BLACK, Color.BEIGE, Color.GREY, Color.PEARL_PINK],
  },
  {
    id: 2,
    src: "./images/product-2-1.webp",
    srcFocus: "./images/product-2-3.webp",
    alt: "product-2-1",
    price: 30.0,
    discount: 0,
    title: "PURE COTTON HEAVYWEIGHT T-SHIRT",
    colorList: [Color.BEIGE],
  },
  {
    id: 3,
    src: "./images/product-3-1.webp",
    srcFocus: "./images/product-3-2.webp",
    alt: "product-3-1",
    price: 20.0,
    discount: 5,
    title: "OVERSIZED TEE - PEARL PINK",
    colorList: [Color.PEARL_PINK, Color.BROWN],
  },
  {
    id: 4,
    src: "./images/product-4-1.webp",
    srcFocus: "./images/product-4-1-3.webp",
    alt: "product-4-1",
    price: 40.0,
    discount: 20,
    title: "LOOSE FIT CREW-NECK COTTON T-SHIRT",
    colorList: [Color.GREY, Color.PINK],
  },
];

const DiscoverSection = () => {
  const [focusIndex, setFocusIndex] = useState<number>(-1);
  return (
    <section className="relative w-full flex pb-8 px-8 bg-white">
      <div className="flex flex-col text-left space-y-4">
        <h2 className="text-3xl pb-4">Discover what's new</h2>
        <div className="flex w-full justify-between box-border">
          {ItemsList.map((item) => {
            return (
              <article
                key={item.id}
                className="flex-grow flex flex-col justify-center px-1 w-1/4"
                onMouseEnter={() => setFocusIndex(item.id)}
                onMouseLeave={() => setFocusIndex(-1)}
              >
                <img
                  className="cursor-pointer"
                  src={item.id === focusIndex ? item.srcFocus : item.src}
                  alt={item.alt}
                />
                <p className="pt-4 text-sm">{item.title}</p>
                <p
                  className="inline pt-2 text-sm"
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
                <ColorPicker colorList={item.colorList} />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;
