"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Nav from "./nav";

const NavSection = () => {
  //sidenav open-close
  const [isActive, setIsActive] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    if (isActive) setIsActive(false);

  }, [pathname]);  
  

  return (
    <>
      <div className="p-8 fixed right-0 z-10">
        <div
          onClick={() => {
            setIsActive(!isActive);
          }}
          className="  w-12 h-12 rounded-md bg-gray-500 cursor-pointer flex justify-center items-center opacity-80"
        >
          <div
            className={`w-full after:content-[""] after:block after:h-[2px] after:w-1/2 after:mx-auto after:bg-white after:relative after:transiti-all after:duration-300
     before:content-[""] before:block before:h-[2px] before:w-1/2 before:mx-auto before:bg-white before:relative before:transiti-all before:duration-300
     after:-top-1 before:top-1
      ${
        isActive
          ? " after:rotate-45 after:top-[1px]  before:-rotate-45 before:top-0"
          : ""
      }`}
          ></div>
        </div>
      </div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </>
  );
};

export default NavSection;
