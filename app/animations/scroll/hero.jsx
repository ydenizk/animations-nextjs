"use client";

import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const Hero = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]); //scrollyprogress o iken opacity 1
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const position = useTransform(scrollYProgress, (n) => {
    return n === 1 ? "relative" : "fixed";
  });

  return (
    <motion.div
      style={{ opacity: opacity }}
      ref={ref}
      className=" relative h-screen   mx-auto  py-16 "
    >
      <motion.div
        style={{ scale, x: "-50%" ,position}}
        className="   left-1/2    flex flex-col z-10 items-center"
      >
        <h1 className="text-5xl font-semibold text-red-900 mb-4">
       Scroll Animations
        </h1>
        <p className="text-neutral-800  dark:text-white  max-w-72">
     This is a scroll animation trial 
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
