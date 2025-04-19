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

const BestSellerSection = () => {
  return (
    <section className="relative w-full flex pb-8 px-8 bg-white">
      <div className="flex flex-col text-left">
        <h2 className="text-3xl mb-8">Women's choice "BESTSELLER"</h2>
      </div>
    </section>
  );
};

export default BestSellerSection;
