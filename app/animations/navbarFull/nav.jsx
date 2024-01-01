"use client";

import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { height, translate, blur } from "./anima";
import { links } from "@/app/data";
import Link from "next/link";

const Nav = () => {
  const [selectedLink, setSelectedLink] = useState({
    isActive: false,
    index: 0,
  });

  const getChars = (word) => {
    let chars = [];
    word.split("").forEach((char, i) => {
      chars.push(
        <motion.span
          custom={[i * 0.02, (word.length - i) * 0.01]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
          key={char + i}
        >
          {char}
        </motion.span>
      );
    });
    return chars;
  };

  return (
    <motion.div
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit"
      className="overflow-hidden"
    >
      <div className="flex gap-12 mt-20">
        <div className="flex flex-col justify-between">
          {/* .....body... */}
          <div className="flex mt-10">
            {links.map((n, index) => {
              const { label, href } = n;
              return (
                <Link key={`l_${index}`} href={href}>
                  <motion.p
                    className="flex  overflow-hidden text-5xl px-4 pt-2   "
                    onMouseOver={() => {
                      setSelectedLink({ isActive: true, index });
                    }}
                    onMouseLeave={() => {
                      setSelectedLink({ isActive: false, index });
                    }}
                    variants={blur}
                    animate={
                      selectedLink.isActive && selectedLink.index != index
                        ? "open"
                        : "closed"
                    }
                  >
                    {getChars(label)}
                  </motion.p>
                </Link>
              );
            })}
          </div>

          {/* .....body...END..... */}
        </div>
      </div>
    </motion.div>
  );
};

export default Nav;
