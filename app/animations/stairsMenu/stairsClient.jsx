"use client";

import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Stairs } from "./stairs";
import Menu from "./menu";

const StairsClient = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="overflow-hidden  ">
      <button
        onClick={() => {
          setOpen(!open);
        }}
        className="fixed w-12 h-12 bg-neutral-400 flex items-center 
      justify-center top-24 right-8 cursor-pointer z-50 text-white font-nunito overflow-hidden"
      >
        {open ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-9 h-9"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-9 h-9"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
        <div
          className={`bg-softBlack w-full absolute left-0 top-0 -z-10
transition-all duration-1000 ${open ? "h-full" : ""} `}
        ></div>
      </button>

      <AnimatePresence mode="wait" >
        {open && (
          <>
            <Stairs />
            <Menu />
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default StairsClient;
