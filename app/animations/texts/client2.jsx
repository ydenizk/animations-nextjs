"use client";

import { React, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

const Client2 = ({ text, path }) => {
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      gsap.to(textRef.current, {
        duration: 5,
        ease: "power1.inOut",
        motionPath: {
          path: path,
          align: "relative",
          autoRotate: true,
          alignOrigin: [0.5, 0.5],
        },
        repeat: 1, // Play the animation back and forth once
        yoyo: true, // Make the animation play backwards on repeat
      });
    }
  }, [path]);

  return (
    <div className="mx-auto max-w-lg text-left my-12 w-full ">
      <p ref={textRef} className="text-black font-semibold text-2xl h-2 w-36 bg-red-700">   {text}  </p>
    </div>
  );
}; 

export default Client2;
