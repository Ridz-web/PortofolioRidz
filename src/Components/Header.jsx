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
              scales[index] ? "underline font-bold" : "font-normal no-underline"
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
            <ul className="hidden md:flex space-x-4">
              {["About", "Roadmap", "Motivation", "Contact"].map(
                (text, index) => (
                  <li
                    key={index}
                    onClick={() => handleClick(index)}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave(index)}
                    className={`text-white transition-transform duration-300 ${
                      scales[index] ? "scale-125 font-bold" : "scale-100"
                    }`}>
                    <a
                      href={`#${text.toLowerCase()}`}
                      className="lg:text-white">
                      {text}
                    </a>
                  </li>
                )
              )}
            </ul>
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
            <div className="font-bold font-olga text-3xl lg:text-7xl">
              <span className="font-bold text font-olga text-3xl lg:text-7xl">
                HELLO I'M{" "}
              </span>
              <span className="text-blue-500 ridho ms-3">
                <Typewriter
                  words={["RIDHO", "BUDI", "MUTA'ALI"]}
                  loop={0}
                  cursor="|"
                  typeSpeed={100}
                  deleteSpeed={80}
                  delaySpeed={1000}
                />
              </span>
            </div>
            <h4
              className="font-bold mt-2 text font-glaci text-2xl lg:text-4xl"
              style={{ letterSpacing: "10px" }}>
              Website Developer
            </h4>
            <p className="mt-2 text">Welcome to my portfolio website</p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Header;
