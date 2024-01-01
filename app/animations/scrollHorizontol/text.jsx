"use client";

///text mask usage
//npm i react-intersection-observer

import React from "react";
import { motion} from "framer-motion";
import { useInView } from "react-intersection-observer";

const phrases = ["First,text animation...!", 
"then Keep scrolling until,you",
"see the horizontol scroll section.."];

export default function Text() {
  return (
    <div className="h-[150vh] w-full  flex py-64 justify-center items-start 
    font-nunito bg-gradient-to-tl from-white via-transparent to-neutral-200 dark:bg-gradient-to-tl dark:from-softBlack dark:via-softBlack dark:to-neutral-700">
      <div className="flex items-center flex-col gap-64 max-w-5xl mx-4 ">
        <Mask />
        <Mask />
      </div>
    </div>
  );
}

export function Mask() {
  const animation = {
    initial: { y: "100%" },
    enter: (i) => ({
      y: "0",
      transition: {
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.075 * i,
      },
    }),
  };

  const { ref, inView, entry } = useInView({
    threshold: 0.75,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className="font-bold md:text-6xl text-3xl  font-sans ">
      {phrases.map((phrase, index) => {
        return (
          <div key={index} className="overflow-hidden ">
            <motion.p
              custom={index}
              variants={animation}
              initial="initial"
              animate={inView ? "enter" : ""}
              className="capitalize py-1 whitespace-nowrap"
            >
              {phrase}
            </motion.p>
          </div>
        );
      })}
    </div>
  );
}
