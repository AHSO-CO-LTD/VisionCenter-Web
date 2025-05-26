import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

export default function TechFadeIn({ children }) {
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
        scale: 0.85,
        rotateX: 15,
        rotateZ: -5,
        filter: "blur(12px)",
      }}
      animate={
        visible
          ? {
              opacity: 1,
              y: 0,
              scale: 1,
              rotateX: 0,
              rotateZ: 0,
              filter: "blur(0px)",
            }
          : {
              opacity: 0,
              y: 60,
              scale: 0.85,
              rotateX: 15,
              rotateZ: -5,
              filter: "blur(12px)",
              boxShadow: "none",
            }
      }
      transition={{
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        perspective: 1000,
        willChange: "transform, opacity, filter",
        borderRadius: "16px",
        backdropFilter: "blur(3px)",
      }}
    >
      {children}
    </motion.div>
  );
}
