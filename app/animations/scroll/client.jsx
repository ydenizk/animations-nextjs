"use client";

import React from "react";
import Hero from "./hero";
import HeroImage from "./heroImage";
import LastSection from "./lastSection";

const Client = () => {
  return (
    <div className="max-w-5xl mx-auto w-full bg-gradient-to-b from-white via-neutral-800 to-neutral-50">
      <Hero />
      <HeroImage />
<LastSection />
    </div>
  );
};
 
export default Client;
