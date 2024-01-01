"use client";

import React from "react";
import { motion } from "framer-motion";

export const TransitionProvider = ({ children }) => {
  return (
    <motion.div
      className="w-full h-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.7 }}
    >
      {children}
    </motion.div>
  );
};
