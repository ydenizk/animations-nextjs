"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { Images } from "@/app/data";

const ClientScroll = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-180vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2218 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      {
        /* A return function for killing the animation on component unmount */
      }
      pin.kill();
    };
  }, []);

  return (
    <section className="overflow-hidden">
      {/* The section up act just as a wrapper. If the trigger (below) is the
        first jsx element in the component, you get an error on route change */}

      {/* The div below act just as a trigger. As the doc suggests, the trigger and 
        the animation should alway be two separated refs */}
      <div ref={triggerRef} className="mx-8">
        <div
          ref={sectionRef}
          className="h-[75%] mx-8 gap-4 py-16  pt-36 flex relative"
          style={{ width: "240vw" }}
        >
          {Images.map((n) => {
            return (
              <div key={n.href} className="h-96 w-[60%] flex justify-center items-center  relative">
                <Image
                  src={n.href}
                  alt="pic"
                  fill
                  className="object-cover absolute rounded-md"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ClientScroll;
