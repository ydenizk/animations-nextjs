import React from "react";
import ClientParallax from "./clientParallax";
import { TransitionProvider } from "@/app/components/pageTransitionprovider";
import Footer from "@/app/components/footer";

const ParallaxPage = () => {
  return (
    <TransitionProvider>
      <div className="w-full  bg-gradient-to-b from-white via-gray-200 to-softBlack 
      dark:bg-gradient-to-b dark:from-softBlack Dark:via-softBlack dark:to-neutral-600 pb-48 ">
        <ClientParallax />
      </div>
      <Footer />
    </TransitionProvider>
  );
}; 

export default ParallaxPage;
