"use client";

import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useSpring } from "framer-motion";
import gsap from "gsap";

const phrase ="Discover the fusion of art and technology on our website, a showcase of stunning animations crafted with Next.js, Tailwind, and Framer Motion. Experience the fluidity of Locomotive Scroll and the versatility of Next Themes in every interactive element. A digital canvas where innovative design meets seamless user experience.";

export default function HeroTextClient() {
  //button
  const x = useSpring(0, { stiffness: 300, damping: 20 });

  // Function to handle mouse hover
  const onMouseEnter = () => x.set(100); // Move to 100px on hover
  const onMouseLeave = () => x.set(0); // Return to 0px on leave

  //Gradient
  let refs = useRef([]);
  const body = useRef(null);
  const container = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimation();

    return () => {
      refs.current = [];
    };
  }, []);

  const createAnimation = () => {
    gsap.to(refs.current, {
      scrollTrigger: {
        trigger: container.current,
        scrub: true,
        start: `top`,
        end: `+=${window.innerHeight / 1.5}`,
      },
      opacity: 1,
      ease: "none",
      stagger: 0.2,
    });
  };

  const splitWords = (phrase) => {
    let body = [];
    phrase.split(" ").forEach((word, i) => {
      const letters = splitLetters(word);
      body.push(
        <p
          key={word + "_" + i}
          className="text-xl font-sans font-bold m-0 mr-2 text-black dark:text-white xs:text-lg"
        >
          {letters}
        </p>
      );
    });
    return body;
  };

  const splitLetters = (word) => {
    let letters = [];
    word.split("").forEach((letter, i) => {
      letters.push(
        <span
          className="opacity-20"
          key={letter + "_" + i}
          ref={(el) => {
            refs.current.push(el);
          }}
        >
          {letter}
        </span>
      );
    });
    return letters;
  };

  return (
    <main
      ref={container}
      className=" flex flex-col  h-screen justify-around items-center  
    text-neutral-300  pb-24 mx-6 "
    >
      <motion.button
        style={{ x }}
        s
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className=" p-3 bg-black rounded shadow-md text-white font-light hover:shadow-xl
         dark:bg-white dark:text-black xs:p-2"
      >
        Start Scroll or Hover me
      </motion.button>
      <div ref={body} className="max-w-2xl flex flex-wrap">
        {splitWords(phrase)}
      </div>
    </main>
  );
}
