import React, { useState } from "react";
import twitter from "../assets/SosialMedia/twitter.svg";
import instagram from "../assets/SosialMedia/instagram.svg";
import tiktok from "../assets/SosialMedia/tiktok.svg";
import github from "../assets/SosialMedia/github.svg";
import laptop from "../assets/Contact/laptop.jpg";

const FaqFooter = () => {
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

  return (
    <>
      <div className="container p-4 text-white">
        <div className="font-bold text-center lg:text-start lg:ms-14 font-olga text-4xl pt-24 text-yellow-500">
          Get In Touch
        </div>
        <div className="mt-2 mx-auto lg:mx-0 h-1 lg:ms-14 bg-white w-10"></div>
        <div className="mt-2 mx-auto lg:mx-0 h-1 lg:ms-20 hidden lg:block bg-white w-10"></div>
        <div className="grid lg:grid-flow-col md:mt-44 lg:mt-14 mt-14 lg:grid-cols-2">
          <div className="ms-14 me-2">
            <p className="text-2xl text-yellow-500 font-serif">
              Address: JL.Jangli Gabeng, Semarang. Indonesia
            </p>
            <p>+6285770715562</p>
            <p>Email : mutaalibudi@gmail.com</p>
            <p className="">
              © Copyright {new Date().getFullYear()} Ridho. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-5">
              <a
                href="https://www.instagram.com/ridhz_kun?igsh=aDUwcmNjem44dnVi"
                target="_blank"
                rel="noopener noreferrer">
                <img
                  src={instagram}
                  alt=""
                  style={{
                    width: "28px",
                    height: "28px",
                    marginTop: "8px",
                    transition: "transform 0.3s",
                    transform: zoomedIndexes[0] ? "scale(1.5)" : "scale(1)",
                  }}
                  onMouseEnter={() => handleMouseEnter(0)}
                  onMouseLeave={() => handleMouseLeave(0)}
                />
              </a>
              <a
                href="https://www.tiktok.com/@ridzzkun?_t=8okAMRisxGB&_r=1"
                target="_blank"
                rel="noopener noreferrer">
                <img
                  src={tiktok}
                  alt=""
                  style={{
                    width: "28px",
                    height: "28px",
                    marginTop: "8px",
                    transition: "transform 0.3s",
                    transform: zoomedIndexes[1] ? "scale(1.5)" : "scale(1)",
                  }}
                  onMouseEnter={() => handleMouseEnter(1)}
                  onMouseLeave={() => handleMouseLeave(1)}
                />
              </a>
              <a
                href="https://x.com/@ridz_ecto"
                target="_blank"
                rel="noopener noreferrer">
                <img
                  src={twitter}
                  alt=""
                  style={{
                    width: "28px",
                    height: "28px",
                    marginTop: "8px",
                    transition: "transform 0.3s",
                    transform: zoomedIndexes[2] ? "scale(1.5)" : "scale(1)",
                  }}
                  onMouseEnter={() => handleMouseEnter(2)}
                  onMouseLeave={() => handleMouseLeave(2)}
                />
              </a>
              <a
                href="https://github.com/Ridz-web"
                target="_blank"
                rel="noopener noreferrer">
                <img
                  src={github}
                  alt=""
                  style={{
                    width: "28px",
                    height: "28px",
                    marginTop: "8px",
                    transition: "transform 0.3s",
                    transform: zoomedIndexes[3] ? "scale(1.5)" : "scale(1)",
                  }}
                  onMouseEnter={() => handleMouseEnter(3)}
                  onMouseLeave={() => handleMouseLeave(3)}
                />
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              width="300px"
              height="280px"
              className="rounded-md lg:-mt-8 mt-28 shadow-xl"
              src={laptop}
              alt=""
              style={{
                transition: "transform 0.3s",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default FaqFooter;
