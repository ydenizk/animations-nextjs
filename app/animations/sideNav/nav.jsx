"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { links } from "@/app/data";

const Nav = () => {
  const pathname = usePathname();
  const [isSelected, setIsSelected] = useState(pathname);

  /////////Variants
  const menuSlide = {
    initial: { x: "calc(100% + 100px)" },
    enter: { x: "0", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
    exit: {
      x: "calc(100% + 100px)",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  };

  const slide = {
    initial: { x: 80 },
    enter: (i) => ({
      x: 0,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
    }),
    exit: (i) => ({
      x: 80,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
    }),
  };

  const scale = {
    open: { scale: 1, transition: { duration: 0.3 } },
    closed: { scale: 0, transition: { duration: 0.4 } },
  };
  ///////////////////

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="h-screen bg-softBlack fixed right-0 top-16 text-white dark:bg-white  dark:text-softBlack "
    >
      <div className="h-screen p-20 flex flex-col items-end justify-between">
        <div
          onMouseLeave={() => {
            setIsSelected(pathname);
          }}
          className="flex flex-col text-4xl gap-10 mt-32"
        >
          {links.map((n, index) => {
            return (
              <motion.div
                key={index}
                className="relative flex items-center"
                onMouseEnter={() => {
                  setIsSelected(n.href);
                }}
                custom={index}
                variants={slide}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <motion.div
                  variants={scale}
                  animate={isSelected == n.href ? "open" : "closed"}
                  className=" w-full h-[2px] bg-white  rounded-full absolute   left-0 top-full block dark:bg-softBlack"
                ></motion.div>
                <Link href={n.href}>{n.label}</Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Nav;
