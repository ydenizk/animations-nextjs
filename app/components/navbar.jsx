"use client";

import React, { useState } from "react";
import Link from "next/link";
import { links, dropdown } from "../data";
import { motion, AnimatePresence } from "framer-motion";
import DarkMode from "./darkMode";

const Navbar = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  // Animation variants for the dropdown
  const dropdownVariants = {
    hidden: { opacity: 0, scale: 0.4, transition: { duration: 0.2 } },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.2 } },
  };

  return (
    <nav
      className="w-full p-2 px-6 border-b border-neutral-300 dark:border-neutral-600 shadow-md 
    flex h-16 gap-4 items-center justify-between font-nunito relative z-50 "
    >
      <div>
        <Link href="/" className="font-sans font-bold text-2xl uppercase">
          Animation show
        </Link>
      </div>
      <ul className="flex items-center gap-6 ">
        <DarkMode />

        {links.map(({ href, label }) => {
          if (label === "Animations") {
            return (
              <li
                className="relative"
                key={href}
                onMouseEnter={() => setDropdownVisible(true)}
                onMouseLeave={() => setDropdownVisible(false)}
              >
                <Link href="/" className="hover:text-neutral-600">
                  {label}
                </Link>
                <AnimatePresence>
                  {isDropdownVisible && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={dropdownVariants}
                      className="absolute -left-20"
                    >
                      <ul className=" p-2  mt-7 rounded bg-neutral-200 dark:bg-neutral-300 shadow-xl">
                        {dropdown.map((d) => (
                          <li key={d.href} className="p-2">
                            <Link
                              href={`/animations${d.href}`}
                              className="whitespace-nowrap dark:text-black  hover:text-neutral-600"
                            >
                              {d.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          }

          return (
            <li key={href}>
              <Link href={href} className="hover:text-neutral-600">
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
