"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Nav from "./nav";
import { opacity, background } from "./anima";

const NavClient = () => {
  const [isActive, setIsActive] = useState(false);

  const transition = { duration: 1, ease: [0.76, 0, 0.24, 1] };

  return (
    <div className="bg-bgcolor relative  w-full p-2 z-10 dark:text-black dark:bg-neutral-400">
      <div className="flex justify-between items-center uppercase relative mx-4">
        <Link href="/">full navbar</Link>
        <div
          onClick={() => {
            setIsActive(!isActive);
          }}
          className="flex cursor-pointer items-center justify-center gap-2">
             <div
          onClick={() => {
            setIsActive(!isActive);
          }}
          className="  w-12 h-12 rcursor-pointer flex justify-center items-center opacity-80 "
        >
          <div
            className={`w-full after:content-[""] after:block after:h-[2px] after:w-1/2 after:mx-auto after:bg-black after:relative after:transiti-all after:duration-300
     before:content-[""] before:block before:h-[2px] before:w-1/2 before:mx-auto before:bg-black before:relative before:transiti-all before:duration-300
     after:-top-1 before:top-1
      ${
        isActive
          ? " after:rotate-45 after:top-[1px]  before:-rotate-45 before:top-0"
          : ""
      }`}
          ></div>
        </div>
   
        </div>
      </div>
      <motion.div
        variants={background}
        initial="initial"
        animate={isActive ? "open" : "closed"}
        className="bg-softBlack opacity-80 h-full w-full absolute left-0 top-[100%]"
      ></motion.div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </div>
  );
};

export default NavClient;
