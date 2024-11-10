import React, { useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useInView } from "react-intersection-observer";
import { Drawer, Toolbar, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import "../App.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const Click = (open) => () => {
    setIsOpen(open);
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [scales, setScales] = useState([false, false, false, false]);

  const handleMouseEnter = (index) => {
    const newScales = [...scales];
    newScales[index] = true;
    setScales(newScales);
  };

  const handleMouseLeave = (index) => {
    const newScales = [...scales];
    newScales[index] = false;
    setScales(newScales);
  };

  const handleClick = (index) => {
    const newScales = [...scales];
    newScales[index] = !newScales[index];
    setScales(newScales);
  };

  const drawerContent = (
    <div
      role="presentation"
      onClick={Click(false)}
      onKeyDown={Click(false)}
      className="w-64 p-4">
      <Toolbar />
      <Typography variant="h6" className="mb-4">
        Navigation
      </Typography>
      <ul className="list-none p-0">
        {["About", "Roadmap", "Motivation", "Contact"].map((text, index) => (
          <li
            key={index}
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            className={`lg:text-white transition-transform duration-300 ${
              scales[index]
                ? "underline font-medium"
                : "font-normal no-underline"
            }`}>
            <a href={`#${text.toLowerCase()}`} className="lg:text-white">
              {text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <>
      <motion.div id="homeHead">
        <div className="flex items-center absolute top-5 left-0 right-0 md:justify-center">
          <nav className="text-white md:font-normal md:justify-center absolute md:right-auto right-0 p-4">
            {/* Hamburger Menu for Mobile */}
            {isMobile && (
              <button onClick={Click(!isOpen)} className="p-2">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke={isOpen ? "black" : "currentColor"}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={
                      isOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            )}
            {/* Navbar List for Desktop */}
            <div className="bg-zinc-800 lg:p-4 lg:ps-10 lg:pe-10 lg:rounded-b-full sticky top-0 z-50 pe-10">
              <ul className="hidden md:flex space-x-4">
                {["About", "Roadmap", "Motivation", "Contact"].map(
                  (text, index) => (
                    <li
                      key={index}
                      onClick={() => handleClick(index)}
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={() => handleMouseLeave(index)}
                      className={` transition-transform duration-300 ${
                        scales[index] ? " text-yellow-500" : ""
                      }`}>
                      <a
                        href={`#${text.toLowerCase()}`}
                        className="lg:font-medium">
                        {text}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
          </nav>
        </div>
      </motion.div>
      {/* Drawer for Mobile */}
      <Drawer anchor="right" open={isOpen} onClose={Click(false)}>
        {drawerContent}
      </Drawer>
      {/* Header Content */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 2 }}>
        <div className="flex items-center justify-center min-h-screen font-bold text-white">
          <div className="text-center">
            <div className="font-bold font-olga text-4xl lg:text-7xl">
              <span className="text-yellow-500 ridho text ms-3">
                <Typewriter
                  words={[" HELLO I'M RIDHO"]}
                  loop={0}
                  cursor="|"
                  typeSpeed={80}
                  deleteSpeed={20}
                  delaySpeed={3000}
                />
              </span>
            </div>
            <h4
              className="font-bold lg:mt-2 font-glaci text-2xl lg:text-4xl"
              style={{ letterSpacing: "5px" }}>
              Website Developer
            </h4>
            <p className="lg:mt-2">Welcome to my portfolio website</p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Header;
