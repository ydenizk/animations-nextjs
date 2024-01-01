import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { links } from "@/app/data";

const Menu = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 0.5 },
    },
  };

  const linkVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: { delay: i * 0.2 + 0.5 },
    }),
  };

  return (
    <motion.div
      className="absolute -top-16 w-full h-full 
      text-center font-nunito z-20 overflow-hidden  grid place-items-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className=" flex flex-col justify-center items-center w-full pt-36">
        {links.map((n, i) => {
          return (
            <motion.div
              key={n.label}
              className={`w-full border-t h-20 border-white  grid place-items-center
             overflow-hidden  ${
               i === links.length - 1 ? "border-b" : ""
             }  menu-container`}
     
            >
              <motion.a
                href={n.href}
                custom={i}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                className="w-full h-full mx-auto text-5xl mt-[36px] uppercase
                 text-white font-extralight overflow-hidden  "
              >
                {n.label}
              </motion.a>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Menu;
