"use client";

import React, { useEffect } from "react";
import gsap from "gsap-trial";
import { SplitText } from "gsap-trial/SplitText";
import ScrollTrigger from "gsap-trial/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);
const Client5 = () => {
  useEffect(() => {
    // Ensure the DOM is ready
    let mySplitText = new SplitText(".split", { type: "chars" });

    let chars = mySplitText.chars;

    gsap.from(chars, {
      delay:8.5,
      yPercent: 130,
      stagger: 0.02,
      ease: "back.out",
      duration: 0.8,
      //scrolltrger ,scroll dda çalışsın istiyorsak kullanıcaz
      /*   scrollTrigger: {
        trigger: ".split",
        start: "top 80%",
        markers: true,
      }, */
    });
  }, []); // Empty

  return (
    <div className="mx-auto w-full text-center flex justify-center items-end  h-36">
      <div className="   overflow-hidden  pt-6 p-2">{/* border-2 border-black de koyabiliriz */}
        <h1 className="split uppercase text-4xl sm:text-5xl font-semibold text-black dark:text-white m-0 leading-8">
    Animations are great
        </h1>
      </div>
    </div>
  );
};

export default Client5;
