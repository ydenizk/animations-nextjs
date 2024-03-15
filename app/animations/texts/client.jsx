"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

const Client = ({ text, text1 }) => {
  const [typedText, setTypedText] = useState(""); //typewriter

  //typewriter
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      // Append the next character if index is less than text length
      if (index < text.length) {
        setTypedText((prev) => prev + text.charAt(index));
        index++;
      } else {
        // Once all characters have been appended, clear the interval
        clearInterval(timer);
      }
    }, 100); // Adjust typing speed by changing the interval time

    // Cleanup on component unmount
    return () => clearInterval(timer);
  }, [text]); // Only re-run the effect if the text changes

  //other tesxt effect
  const containerRef = useRef();
  useEffect(() => {
    const chars = containerRef.current.children;
    const tl = gsap.timeline();
    gsap.set(chars, { autoAlpha: 0 });
    tl.to(chars, { duration: 0.8, autoAlpha: 1, stagger: 0.05, delay: 3.5 });
  }, [text1]);

  return (
    <div className="mx-auto max-w-lg text-center my-8 mt-16 w-full ">
      <span className="text-black dark:text-white font-semibold text-2xl mb-8">
        {typedText}
      </span>

      <div ref={containerRef} className=" my-8">
        {text1.split("").map((char, index) => (
          <span
            className="text-black dark:text-white font-semibold text-2xl"
            key={index}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Client;
