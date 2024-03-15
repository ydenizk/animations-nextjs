"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const LastSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Image slides in from left to center
  const x = useTransform(scrollYProgress, [0, 0.7], ['-100%', '0%']);
  


  // Text fades in around the image as scrolling continues
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]); 


  //vinyl
  const rotateThreeTimes = useTransform(scrollYProgress, [0, 1], [0, 1440]);
//p tag
  const textX = useTransform(scrollYProgress, [0, 0.2, 0.3, 0.4], ['100vw', '10vw', '-30vw', '-100vw']);

  return (
    <section ref={ref} className="h-[400vh] relative z-30 mt-36 my-16 w-full ">
     <motion.p 
       style={{ x: textX }}
     className="uppercase text-7xl bg-gradient-to-r from-neutral-300 via-red-100  to-neutral-900 
     inline-block text-transparent bg-clip-text font-extrabold">RUn rabbit RUN</motion.p>
       
   
      <motion.div 
        className=" sticky left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full "
        style={{ x ,opacity}}
      >
        <Image src="/parallaxImages/4.jpg" width={720} height={540} alt="Dynamic Image" className="mx-auto rounded"/>
      </motion.div>
      <motion.div
        style={{ rotate: rotateThreeTimes }}
        className="size-80 bg-neutral-900 absolute opacity-90  z-50 left-[30%] text-white p-10 font-bol text-3xl rounded-full flex justify-center  items-center"
      >
        <div
          className="size-64 bg-neutral-200 rounded-full uppercase text-red-800 font-semibold text-2xl flex justify-center items-center
border-2 border-white
"
        >
          Run rabbit Run
        </div>
      </motion.div>
      
    </section>
  );
};

export default LastSection;
