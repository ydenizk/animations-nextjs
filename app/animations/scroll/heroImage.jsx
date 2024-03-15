"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useScroll, motion, useTransform } from "framer-motion";

const HeroImage = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0.1, 0.4,0.8], [1, 1.7,1.5]);
  const n = useTransform(
    scrollYProgress,
    [0.1, 0.25, 0.7, 1],
    ["0%", "-55%", "-60%", "-80%"]
  );
  const opacity = useTransform(scrollYProgress, [0.7, 1], [1, 0]);

  return (
    <section className="mt-[-30vh]">
      <div ref={ref} className="h-[200vh] w-full ">
        <div className="sticky top-[10vh]">
          <div className="flex justify-center">
            <motion.div style={{ n, scale, opacity }} className="origin-top">
              <Image
                src="/parallaxImages/1.jpg"
                width={720}
                height={540}
                className="rounded"
                alt="pic"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroImage;
