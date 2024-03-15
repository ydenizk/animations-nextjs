"use client";

import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const Client = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset:["start end","end start"],
    //offset: ["start 50%", "-100px 0"],
  });
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 90]);

  //second div rotation
  const rotateThreeTimes = useTransform(scrollYProgress, [0, 1], [0, 1080]);

  return (
    <motion.div className="py-[84vh]  flex justify-center items-center gap-x-8">
      <motion.div
        style={{ rotate }}
        ref={ref}
        className=" w-[620px] h-96  relative"
      >
        <Image
          src="/parallaxImages/5.jpg"
          fill
          alt="pic"
          className="Absolute object-cover rounded"
        />
      </motion.div>

      <motion.div
        style={{ rotate: rotateThreeTimes }}
        className="size-80 bg-black text-white p-10 font-bol text-3xl rounded-full flex justify-center  items-center"
      >
        <div
          className="size-64 bg-red-800 rounded-full text-black font-semibold text-2xl flex justify-center items-center
border-2 border-white
"
        >
          Run rabbit Run
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Client;
