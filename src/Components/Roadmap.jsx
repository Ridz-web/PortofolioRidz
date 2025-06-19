import React, { useState } from "react";
import htmlImage from "../assets/AboutSkill/html.png";
import cssImage from "../assets/AboutSkill/css.png";
import bootstrapImage from "../assets/AboutSkill/boot.png";
import tailwindImage from "../assets/AboutSkill/tail.png";
import reactImage from "../assets/AboutSkill/react.png";
import phpImage from "../assets/AboutSkill/PHP.png";
import laravelImage from "../assets/AboutSkill/Laravel.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Step,
  StepLabel,
  Stepper,
  Typography,
  Box,
  Container,
  Paper,
} from "@mui/material";

const steps = [
  { label: "HTML", img: htmlImage },
  { label: "CSS", img: cssImage },
  { label: "Bootstrap", img: bootstrapImage },
  { label: "Tailwind", img: tailwindImage },
  { label: "React", img: reactImage },
  { label: "PHP", img: phpImage },
  { label: "Laravel", img: laravelImage },
  {
    label: "Keep Learning",
    img: "https://img.icons8.com/?size=100&id=BrizSRFozOKB&format=png&color=000000",
  },
];

const completedSteps = [0, 1, 2, 3, 4];

const Roadmap = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.8,
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

  const [zoomedI, setZoomedI] = useState([false, false]);

  const MouseEnter = (index) => {
    const newZoomedI = [...zoomedI];
    newZoomedI[index] = true;
    setZoomedI(newZoomedI);
  };

  const MouseLeave = (index) => {
    const newZoomedI = [...zoomedI];
    newZoomedI[index] = false;
    setZoomedI(newZoomedI);
  };

  return (
    <>
      <div className='grid lg:grid-flow-col lg:grid-cols-3'>
        <motion.div
          ref={ref}
          initial={{ y: 10 }}
          animate={inView ? { y: 1 } : {}}
          transition={{ duration: 1 }}>
          <div className='mx-auto hidden absolute lg:block'>
            <a
              href='https://www.w3schools.com/'
              target='_blank'
              rel='noopener noreferrer'>
              <div
                className='pb-40 ms-20 mt-24'
                style={{
                  backgroundColor: zoomedI[0] ? "rgb(234 179 8)" : "#1c1c1c",
                  color: zoomedI[0] ? "#1c1c1c" : "#fff",
                  boxShadow: zoomedI[0]
                    ? "0 2px 10px #1c1c1c"
                    : "0 2px 10px rgb(234 179 8)",
                  transition: "background-color 0.3s",
                }}
                onMouseEnter={() => MouseEnter(0)}
                onMouseLeave={() => MouseLeave(0)}>
                <div className='font-medium font-glaci ps-3 pe-3 text-center text-2xl pt-10'>
                  My learning place ✍
                </div>
                <p className='text-center m-8 mt-20 text-wrap'>
                  I often find myself learning programming on my own through
                  various online resources rather than relying solely on my
                  school curriculum. It’s this self-taught approach that has
                  fueled my passion and allowed me to explore diverse coding
                  challenges.
                </p>
                <p className='text-center text-3xl'>💻💻💻</p>
              </div>
            </a>
          </div>
        </motion.div>
        <div>
          <Container
            maxWidth='md'
            sx={{ display: "grid", placeItems: "center" }}>
            <Paper
              elevation={3}
              sx={{
                backgroundColor: "#1c1c1c",
                boxShadow: "0 2px 15px rgb(234 179 8)",
              }}
              className='shadow-xl shadow-yellow-500 pb-4 '>
              <Box className='text-center text-white mb-8'>
                <div className='font-bold font-olga text-center text-4xl pt-10 text-yellow-500'>
                  My Learning Roadmap
                </div>
                <div className='h-1 bg-white w-80 mx-auto mb-4'></div>
              </Box>
              <motion.div
                ref={ref}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1 }}
                className='flex items-center'>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}>
                  <Stepper
                    activeStep={steps.length - 1}
                    orientation='vertical'
                    sx={{ width: "100%", marginLeft: "15px" }}>
                    {steps.map((step, index) => (
                      <Step
                        key={index}
                        completed={completedSteps.includes(index)}>
                        <StepLabel>
                          <div className='flex items-center'>
                            {step.label === "React" ? (
                              <motion.img
                                src={step.img}
                                alt={step.label}
                                className='w-8 h-8 mr-2'
                                variants={rotateVariants}
                                animate='animate'
                              />
                            ) : (
                              <img
                                src={step.img}
                                alt={step.label}
                                className={`mr-2 ${
                                  step.label === "PHP" ||
                                  step.label === "Laravel"
                                    ? "w-16 h-10"
                                    : "w-8 h-8"
                                }`}
                              />
                            )}
                            <Typography variant='body1' className='text-white'>
                              {step.label}
                            </Typography>
                          </div>
                        </StepLabel>
                      </Step>
                    ))}
                  </Stepper>
                </Box>
              </motion.div>
              <Typography variant='h6' className='mt-4 text-white text-center'>
                {completedSteps.length === steps.length && "Keep going!"}
              </Typography>
            </Paper>
          </Container>
        </div>
        <motion.div
          ref={ref}
          initial={{ y: -10 }}
          animate={inView ? { y: 1 } : {}}
          transition={{ duration: 1 }}>
          <div className='mx-auto absolute hidden lg:block'>
            <a
              href='https://www.youtube.com/results?search_query=learning+programming+language+playlist'
              target='_blank'
              rel='noopener noreferrer'>
              <div
                className='pb-40 me-20 mt-24'
                style={{
                  backgroundColor: zoomedI[1] ? "rgb(234 179 8)" : "#1c1c1c",
                  color: zoomedI[1] ? "#1c1c1c" : "#fff",
                  boxShadow: zoomedI[1]
                    ? "0 2px 10px #1c1c1c"
                    : "0 2px 10px rgb(234 179 8)",
                  transition: "background-color 0.3s",
                }}
                onMouseEnter={() => MouseEnter(1)}
                onMouseLeave={() => MouseLeave(1)}>
                <div className='font-medium font-glaci ps-3 pe-3 text-center text-2xl pt-10'>
                  My Goal 🎯
                </div>
                <p className='text-center m-8 mt-16 text-wrap'>
                  My goal is to become a skilled full stack developer and to
                  gain extensive knowledge in the world of programming. With
                  expertise across various technologies, I aim to create
                  innovative and impactful solutions while continuously
                  deepening my knowledge and skills in this field.
                </p>
                <p className='text-center text-3xl'>✨✨✨</p>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Roadmap;
