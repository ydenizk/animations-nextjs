import React from "react";
import ClientScroll from "./ClientScroll";
import { TransitionProvider } from "@/app/components/pageTransitionprovider";
import Text from "./text";

const ScrollPage = () => {
  return (
    <TransitionProvider>
      <div className="w-full h-auto scroll-smooth overflow-hidden">
        {/* First Section */}
        <Text />

        {/* ClientScroll Component */}
        <ClientScroll />

        {/* Second Section */}
        <div className="">
          <Text />
        </div>
      </div>
    </TransitionProvider>
  );
};

export default ScrollPage;
