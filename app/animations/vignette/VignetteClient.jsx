"use client";

import React from "react";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import Image from "next/image";
import { useSpring, motion } from "framer-motion";

const VignetteClient = () => {
  const projects = [
    {
      name: "Image 1",
      n:"1",
    },
    {
      name: "Image 2",
      n:"2",
    },
    {
      name: "Image 3",
      n: "3",
    },
  ];

  const spring = {
    stiffness: 150,
    damping: 15,
    mass: 0.1,
  };

  const mousePosition = {
    x: useSpring(0, spring),
    y: useSpring(0, spring),
  };

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const mouseMove = (e) => {
    const { clientX, clientY } = e;
    const targetX = clientX - (window.innerWidth / 2) * 0.25;
    const targetY = clientY - (window.innerWidth / 2) * 0.3;
    mousePosition.x.set(targetX);
    mousePosition.y.set(targetY);
  };

  return (
    <div onMouseMove={mouseMove} className="">
      {projects.map(({ n }, i) => {
        const { x, y } = mousePosition;
        return (
          <div
          key={i}
            style={{
              height: "120vh",
              clipPath: "polygon(0 0, 0 100%, 100% 100%, 100% 0)",
            }}
          >
            <div className="w-full h-full relative">
              <Image
                src={`/images/${n}/background.jpg`}
                alt="image"s
                fill
                className="w-full object-cover"
              />
            </div>
            <motion.div
              className="h-[40%] w-[30%] fixed top-0 rounded-xl overflow-hidden"
              style={{ x, y }}
            >
              <Image
                src={`/images/${n}/1.jpg`}
                alt="image"
                fill
                className="w-full object-cover"
              />
            </motion.div>
          </div>
        );
      })}
    </div>
  );
};

export default VignetteClient;
