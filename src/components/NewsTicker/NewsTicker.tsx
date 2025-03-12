import { motion } from "motion/react";

const messages = [
  "FREE SHIPPING ON ORDERS OVER $75",
  "JOIN OUR EMAIL LIST AND GET 20% OFF FIRST ORDER.",
  "FREE SHIPPING ON ORDERS OVER $75",
  "SALE 20% OFF ALL. USE CODE ORANGE!",
  "100-DAY EASY RETURNS.",
];
const NewsTicker = () => {
  return (
    <div
      className="overflow-hidden text-sm whitespace-nowrap py-2"
      style={{ height: "30px", backgroundColor: "rgba(16,16,16,0.03)" }}
    >
      <motion.div
        className="flex space-x-36 min-w-max"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 50,
        }}
      >
        {[...messages, ...messages, ...messages].map((message, index) => (
          <div key={index} className="mx-4">
            {message}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default NewsTicker;
