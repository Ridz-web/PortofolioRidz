import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

function Motivation() {
  const itemData = [
    {
      img: "https://plus.unsplash.com/premium_photo-1673545518947-ddf3240090b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvZmZlfGVufDB8fDB8fHww", // Persegi panjang
      title: "Breakfast",
      rows: 2,
      cols: 2,
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1669917784338-3030eb863b40?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8a2V5Ym9hcmR8ZW58MHwxfDB8fHww", // Persegi
      title: "laptop",
    },
    {
      img: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a2V5Ym9hcmR8ZW58MHx8MHx8fDA%3D", // Persegi
      title: "keyboard",
    },
    {
      img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c", // Persegi panjang
      title: "Coffee",
      cols: 2,
    },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="container mx-auto p-4">
      <div className="font-bold text-center lg:text-start lg:ms-14 font-olga text-4xl pt-24 text-yellow-500">
        Motivation 🔑
      </div>
      <div className="mt-2 mx-auto lg:mx-0 h-1 lg:ms-14 bg-white w-80"></div>
      <div className="grid lg:grid-flow-col lg:grid-cols-2 mt-14">
        <div className="lg:ms-14">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 2.3 }}>
            <p className="font-medium text-center lg:text-left text-white mt-10 me-3">
              "Hey, remember! Limitations in your device aren't the end, but the
              start of your creativity. Focus on your own learning journey
              without comparing yourself to others. Every effort and experiment
              is a step toward progress. Keep creating, because you have
              incredible potential!" <br /> <br />{" "}
              <span className="font-bold text-2xl">
                DON'T GIVE UP TO IMPROVE YOURSELF! 🎇
              </span>
            </p>
          </motion.div>
        </div>
        <div className="flex justify-center items-center mt-4">
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 2.2 }}>
            <ImageList
              sx={{ width: "100%", height: "auto" }}
              variant="quilted"
              cols={4}
              rowHeight={121}>
              {itemData.map((item) => (
                <ImageListItem
                  key={item.img}
                  cols={item.cols || 1}
                  rows={item.rows || 1}>
                  <img
                    {...srcset(item.img, 121, item.rows, item.cols)}
                    alt={item.title}
                    loading="lazy"
                    className="rounded-lg shadow-lg bg-cover bg-fixed"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Motivation;
