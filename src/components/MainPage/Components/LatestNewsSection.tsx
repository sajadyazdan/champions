import { motion } from "motion/react";

const items = [
  {
    id: 1,
    src: "images/blog-6.webp",
    title: "THE BEST MEN’S LINEN SUIT FOR SUMMER",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt quas facere debitis, placeat ea eaque. Est cupiditate, assumenda odio vitae, dolorum necessitatibus sit praesentium excepturi, voluptate omnis beatae cum natus fugiat deleniti voluptates soluta tempore! Ex quasi autem illum quisquam! Asperiores animi nisi perferendis quod nobis explicabo laborum nulla accusantium!",
  },
  {
    id: 2,
    src: "images/blog-5.webp",
    title: "THE BEST BUDGET MEN’S CLOTHING BRANDS",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt quas facere debitis, placeat ea eaque. Est cupiditate, assumenda odio vitae, dolorum necessitatibus sit praesentium excepturi, voluptate omnis beatae cum natus fugiat deleniti voluptates soluta tempore! Ex quasi autem illum quisquam! Asperiores animi nisi perferendis quod nobis explicabo laborum nulla accusantium!",
  },
  {
    id: 3,
    src: "images/blog-4.webp",
    title: "23 THINGS NO MODERN MAN SHOULD OWN IN 2023",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt quas facere debitis, placeat ea eaque. Est cupiditate, assumenda odio vitae, dolorum necessitatibus sit praesentium excepturi, voluptate omnis beatae cum natus fugiat deleniti voluptates soluta tempore! Ex quasi autem illum quisquam! Asperiores animi nisi perferendis quod nobis explicabo laborum nulla accusantium!",
  },
];

const parentVariants = {
  // Removed hover state from parent
};

const childVariants = {
  hover: { scale: 1.025 },
  initial: { scale: 1 },
};

const titleVariants = {
  hover: { textDecoration: "underline" },
  initial: { textDecoration: "none" },
};

const LatestNewsSection = () => {
  return (
    <motion.section
      className="relative w-full flex pb-8 px-8 bg-white"
      variants={parentVariants}
      initial="initial"
    >
      <div className="flex flex-col text-left">
        <h2 className="text-3xl mb-8">Latest news</h2>
        <div className="grid grid-cols-3 gap-x-1">
          {items.map((item) => (
            <motion.div
              key={item.id}
              className="flex flex-col"
              whileHover="hover"
            >
              <div className="mb-6 overflow-hidden">
                <motion.img
                  src={item.src}
                  alt={item.title}
                  variants={childVariants}
                />
              </div>

              <div className="flex flex-col">
                <motion.h3 className="mb-4" variants={titleVariants}>
                  {item.title}
                </motion.h3>
                <p className="line-clamp-4">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default LatestNewsSection;
