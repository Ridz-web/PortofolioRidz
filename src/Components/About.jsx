/** @format */
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import html from "../assets/AboutSkill/html.png";
import css from "../assets/AboutSkill/css.png";
import boot from "../assets/AboutSkill/boot.png";
import tail from "../assets/AboutSkill/tail.png";
import react from "../assets/AboutSkill/react.png";
import Owner from "../assets/Header/Ridho.png";
import { Typewriter } from "react-simple-typewriter";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const rotateVariants = {
    animate: {
      rotate: [0, 360],
      transition: {
        repeat: Infinity,
        duration: 4,
        ease: "linear",
      },
    },
  };

  return (
    <div id="about" className="container mx-auto">
      <div className="justify-center items-center min-h-screen font-bold text-white">
        <div className="font-bold font-olga text-end me-52 text-4xl pt-20 text-yellow-500">
          About Me
        </div>
        <div className="mt-2 h-1 me-52 ms-auto bg-white w-10"></div>
        <div className="mt-2 h-1 me-56 hidden lg:block ms-auto bg-white w-10"></div>
        <div className="grid lg:grid-flow-col md:mt-44 lg:mt-14 pb-14 mt-14 lg:grid-cols-2">
          <div className="ms-2 me-2">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: -40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 2 }}>
              <img
                src={Owner}
                className="lg:w-[300px] w-[200px] h-[200px] lg:ms-44 mx-auto lg:mx-0 lg:h-[300px]"
                alt=""
              />
            </motion.div>
          </div>
          <div>
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}>
              <p className="text-center font-medium lg:pt-24 pt-8 lg:me-20 ms-2 me-2">
                "Hi, my name is Ridho. I'm a student at a vocational school in
                Semarang, Indonesia. Although I’m just starting out, I’ve
                already developed a strong passion for programming. I love
                exploring new coding languages and building projects that
                challenge my creativity. I’m excited to deepen my knowledge and
                skills in this field and see where it takes me in the future!",
              </p>
              <div className="flex mt-5 justify-center space-x-4">
                <img src={html} alt="" className="w-7 h-7 mt-2" />
                <img src={css} alt="" className="w-7 h-7 mt-2" />
                <img src={boot} alt="" className="w-10 h-10" />
                <img src={tail} alt="" className="w-10 h-10" />
                <motion.img
                  src={react}
                  alt="React Logo"
                  className="w-10 h-10"
                  variants={rotateVariants}
                  animate="animate"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
