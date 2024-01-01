import React from "react";
import NavSection from "./navSection";
import { TransitionProvider } from "@/app/components/pageTransitionprovider";

const SideNavpage = () => {
  return (
    <TransitionProvider>
      <div className="w-full h-full  font-nunito overflow-hidden bg-bgcolor ">
        <NavSection />
      </div>
    </TransitionProvider>
  );
};

export default SideNavpage;
