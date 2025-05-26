import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

export default function FadeInWhenVisible({ children }) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.15,
  });

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(inView);
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: 60,
        scale: 0.95,
        filter: "blur(8px)",
      }}
      animate={
        visible
          ? {
              opacity: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
            }
          : {
              opacity: 0,
              y: 60,
              scale: 0.95,
              filter: "blur(8px)",
            }
      }
      transition={{
        duration: 0.8,
        ease: "anticipate",
      }}
      style={{
        willChange: "opacity, transform, filter",
      }}
    >
      {children}
    </motion.div>
  );
}
