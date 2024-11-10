import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useInView } from "react-intersection-observer";

const HeaderFaq = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [zoomedIndexes, setZoomedIndexes] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const handleMouseEnter = (index) => {
    const newZoomedIndexes = [...zoomedIndexes];
    newZoomedIndexes[index] = true;
    setZoomedIndexes(newZoomedIndexes);
  };

  const handleMouseLeave = (index) => {
    const newZoomedIndexes = [...zoomedIndexes];
    newZoomedIndexes[index] = false;
    setZoomedIndexes(newZoomedIndexes);
  };

  const Navigate = useNavigate();
  return (
    <>
      <div
        className="flex items-center absolute top-5 left-0 right-0 justify-center"
        id="faq">
        <nav className="text-white justify-center absolute p-4">
          <div className="bg-zinc-800 p-4 text-white ps-10 rounded-b-full pe-10">
            <button
              onClick={() => Navigate("/#HomeHead")}
              style={{
                transition: "transform 0.3s",
                color: zoomedIndexes[0] ? " rgb(234 179 8)" : "white",
              }}
              onMouseEnter={() => handleMouseEnter(0)}
              onMouseLeave={() => handleMouseLeave(0)}>
              <p className="text-center font-bold me-5 ms-5">HOME</p>
            </button>
          </div>
        </nav>
      </div>

      {/*Header*/}

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 2 }}>
        <div className="flex items-center justify-center min-h-[80vh] font-bold text-white">
          <div className="text-center">
            <div className="font-bold font-olga text-4xl lg:text-7xl">
              <span className="text-yellow-500 ridho text ms-3">
                <Typewriter
                  words={[" Welcome To FAQ "]}
                  loop={0}
                  cursor="|"
                  typeSpeed={80}
                  deleteSpeed={20}
                  delaySpeed={3000}
                />
              </span>
            </div>
            <p className="mt-2 ms-4 me-4 ridho">
              Pertanyaan pertanyaan yang sering sekali ditanyakan oleh orang
              orang
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default HeaderFaq;
