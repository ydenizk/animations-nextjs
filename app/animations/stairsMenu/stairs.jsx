"use client";

import React from "react";
import { motion } from "framer-motion";

export const Stairs = () => {
  const height = {
    initial: {
      height: 0,
    },
    enter: (i) => ({
      height: "100%",
      transition: { duration: 0.5, delay: 0.05 * i, ease: [0.33, 1, 0.68, 1] },
    }),
    exit: (i) => ({
      height: 0,
      transition: { duration: 0.3, delay: 0.05 * i, ease: [0.33, 1, 0.68, 1] },
    }),
  };

  const background = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 0.5,
      transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] },
    },
  };

  return (
    <motion.div
      className="fixed top-16 left-0 z-10 h-full flex  
    transition-all duration-300 pointer-events-none w-full"
    >
      {/* cretaing 5 array elements, */}
      {[...Array(5)].map((_, index) => {
        return (
          <motion.div

          key={index} //I ADDED !!!!
            variants={height}
            initial="initial"
            animate="enter"
            exit="exit"
            custom={4 - index}
            className=" w-1/5  h-full bg-softBlack dark:bg-neutral-500"
          ></motion.div>
        );
      })}
      {/* below part is just for background color and not necessary ...... */}
      <motion.div
        variants={background}
        initial="initial"
        animate="enter"
        exit="exit"
        className="w-full h-full absolute bg-softBlack dark:bg-neutral-500"
      ></motion.div>
    </motion.div>
  );
};
