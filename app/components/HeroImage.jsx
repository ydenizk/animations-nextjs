"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const HeroImage = () => {
  const ref = useRef(null);

  //scrollYporogress shows how  far animation will go
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1 "], // start== 0>bottom of the wievport 1>top of the target,end==
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <div className="h-screen w-full px-6 flex justify-center items-center ">
      <motion.div
        ref={ref}
        style={{ scale: scaleProgress, opacity: opacityProgress }}
        className="w-[720px] h-[480px] relative"
      >
        <Image
          src="/images/3/background.jpg"
          alt="pic"
          fill
          className="absolute object-cover rounded-md"
        />
      </motion.div>
    </div>
  );
};

export default HeroImage;
