import { motion, AnimatePresence } from "framer-motion";

interface IProps {
  text: string;
  direction: 1 | -1;
}

const SecondHeaderTextSlideShow: React.FC<IProps> = ({ text, direction }) => {
  const textVariants = {
    initial: { opacity: 0, x: direction * -50 },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.25 },
      },
    },
    exit: {
      opacity: 0,
      x: direction * 50,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.25 },
      },
    },
  };
  return (
    <div className="w-2/3 overflow-hidden relative">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={text}
          variants={textVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="w-full text-center"
        >
          {text}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default SecondHeaderTextSlideShow;
