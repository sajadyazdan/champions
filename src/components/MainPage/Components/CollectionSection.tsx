import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowIcon } from "../../../assets/icons";

function CollectionSection() {
  const ItemsList = [
    {
      id: 1,
      src: "./images/category-1.webp",
      alt: "category-1",
      caption: "BEST SELLER",
    },
    {
      id: 2,
      src: "./images/category-2.webp",
      alt: "category-2",
      caption: "NEW ARRIVAL",
    },
    {
      id: 3,
      src: "./images/category-3.webp",
      alt: "category-3",
      caption: "ACCESSORIES",
    },
  ];
  const imageVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.1 },
  };

  const captionVariants = {
    initial: { scale: 1 },
    hover: { scaleX: 1.2 },
  };

  return (
    <section className="relative w-full flex pb-8 px-8 bg-white">
      <div className="flex flex-col text-left">
        <h2 className="text-3xl mb-8">You may love our "COLLECTIONS"</h2>
        <div className="flex w-full justify-between box-border mb-12 flex-wrap">
          {ItemsList.map((item) => {
            return (
              <motion.article
                key={item.id}
                className="flex-grow flex flex-col justify-center px-1 mb-4 w-full lg:w-1/3"
                initial="initial"
                whileHover="hover"
              >
                <div className="relative w-full h-auto overflow-hidden mb-2">
                  {" "}
                  {/* Add container with overflow hidden */}
                  <motion.img
                    className="cursor-pointer w-full h-full object-cover" // Ensure the image covers the container
                    src={item.src}
                    alt={item.alt}
                    variants={imageVariants}
                  />
                </div>
                <Link
                  to="/"
                  className="flex flex-row items-center gap-x-2 text-left"
                >
                  {item.caption}
                  <motion.span
                    className="flex items-center w-4 h-4"
                    variants={captionVariants}
                    style={{ transformOrigin: "left" }}
                  >
                    <ArrowIcon />{" "}
                  </motion.span>
                </Link>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default CollectionSection;
