"use client";
import Image from "next/image";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";

const Card = ({
  i,
  title,
  description,
  src,
 color,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-full flex items-center justify-center sticky top-48 font-nunito text-white "
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="flex flex-col relative -top-1/4 h-[440px] w-[860px] rounded-lg p-8 origin-top shadow-md border border-transparent dark:border-neutral-600"
      >
        <h2 className="text-center uppercase text-3xl">{title}</h2>
        <div className="flex h-full mt-12 gap-12">
          <div className="w-2/5 relative top-[%10] font-extralight tracking-wide  ">
            <p>{description}</p>
          </div>
          <div className="  h-full w-3/5 rounded-lg overflow-hidden relative z-30">
            <motion.div
              className="w-full h-full  "
              style={{ scale: imageScale }}
            >
              <Image
                fill
                src={`/parallaxImages/${src}`}
                alt="image"
                className="object-cover opacity-90  "
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
