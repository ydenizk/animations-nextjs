"use client"

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitTextJS from "split-text-js";

const Client4 = () => {
  const containerRef = useRef(null); // Reference to the container of the text elements

  useEffect(() => {
    if (containerRef.current) {
      const titles = gsap.utils.toArray(containerRef.current.querySelectorAll("p")); // Select all <p> elements inside the ref
      const tl = gsap.timeline();

      titles.forEach((title) => {
        const splitTitle = new SplitTextJS(title, { type: "chars, words" }); // Split text

        tl.from(
          splitTitle.chars,
          { opacity: 0, y: 80, rotateX: -90, stagger: 0.02 },
          "<"
        ).to(
          splitTitle.chars,
          { opacity: 0, y: -80, rotateX: 90, stagger: 0.02, delay: 1 },
          ">0.5"
        );
      });
    }
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div  className="mx-auto max-w-lg t mt-36 w-full">
      <div ref={containerRef} className="w-full uppercase  leading-4 ">
        <p className="text-4xl font-semibold text-center text-black leading-[0px]  m-0">
          Nextjs
        </p>
        <p className="text-4xl font-semibold text-center text-black leading-[0px]  m-0">
          Animations
        </p>
        <p className="text-4xl font-semibold text-center text-black leading-[0px]  m-0">
          GSAP
        </p>
        <p className="text-4xl font-semibold text-center text-black leading-[0px]  m-0">
          Framer Motion
        </p>
        <p className="text-4xl font-semibold text-center last:text-yellow-700 m-0 leading-[0px]">
          Tailwind
        </p>
      </div>
    </div>
  );
};

export default Client4;
