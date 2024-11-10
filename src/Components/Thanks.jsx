import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import "../App";

const Thanks = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <>
      <div className="flex items-center justify-center min-h-screen font-bold text-white">
        <div className="text-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1 }}>
            <div className="font-bold font-olga text-3xl lg:text-7xl">
              <span className="font-bold textt font-olga text-3xl lg:text-7xl">
                GOOd BYE!
              </span>
            </div>
            <p className="mt-2 text-3xl textt font-glaci">
              Thanks for visit my portfolio website
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Thanks;
