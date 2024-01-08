import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeDivProps {
  children: ReactNode;
  duration?: number;
}

const FadeDiv = ({ children, duration = 0.8 }: FadeDivProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ duration }}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeDiv;
