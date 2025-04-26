import { Color } from "../../../constants";
import SharedDiscoverBestSeller from "./SharedDiscoverBestSeller";

const ItemsList = [
  {
    id: 1,
    srcFocus: "./images/product-17-1.webp",
    alt: "product-1-1",
    price: 55.93,
    discount: 10,
    title: "TRENDY CASUAL PULLOVER HOODIE FOR WOMAN",
    availableColors: [
      { color: Color.GREY, src: "./images/product-17.webp" },
      { color: Color.BLACK, src: "./images/product-17-6.webp" },
      { color: Color.BEIGE, src: "./images/product-17-7.webp" },
    ],
    onSale: false,
  },
  {
    id: 2,
    srcFocus: "./images/product-18-1.webp",
    alt: "product-2-1",
    price: 0,
    discount: 0,
    title: "OVERSIZE LINEN SHIRT",
    availableColors: [
      { color: Color.SOFT_PINK, src: "./images/product-18.webp" },
    ],
    onSale: true,
  },
  {
    id: 3,
    srcFocus: "./images/product-19-1.webp",
    alt: "product-3-1",
    price: 47.46,
    discount: 20,
    title: "GIRLS SOLID ROUND NECK YELLOW SWEATER",
    availableColors: [{ color: Color.YELLOW, src: "./images/product-19.webp" }],
    onSale: false,
  },
  {
    id: 4,
    srcFocus: "./images/product-20-1.webp",
    alt: "product-4-1",
    price: 50.85,
    discount: 0,
    title: "DENIM OUTFIT BLUE JACKET",
    availableColors: [
      { color: Color.SLATE_BLUE, src: "./images/product-20.webp" },
    ],
    onSale: false,
  },
];

const BestSellerSection = () => {
  return <SharedDiscoverBestSeller itemsList={ItemsList} />;
};

export default BestSellerSection;
