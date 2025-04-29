import { Color } from "../../../constants";
import SharedDiscoverBestSeller from "./SharedDiscoverBestSeller";

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
    specialTag: "Sale",
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
  return <SharedDiscoverBestSeller itemsList={ItemsList} displayButton />;
};

export default DiscoverSection;
