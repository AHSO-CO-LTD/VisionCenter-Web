import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function FadeInWhenVisible({ children }) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
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
        y: 80,
        scale: 0.9,
        rotateZ: -2,
        filter: "blur(12px)",
      }}
      animate={
        visible
          ? {
              opacity: 1,
              y: 0,
              scale: 1,
              rotateZ: 0,
              filter: "blur(0px)",
              background: "none",
            }
          : {
              opacity: 0,
              y: 80,
              scale: 0.9,
              rotateZ: -2,
              filter: "blur(12px)",
              boxShadow: "none",
            }
      }
      transition={{
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1], // "circOut" style
        delay: 0.1,
      }}
      style={{
        willChange: "opacity, transform, filter",
        borderRadius: "12px",
        background: "none",
        backdropFilter: "blur(2px)",
      }}
    >
      {children}
    </motion.div>
  );
}
