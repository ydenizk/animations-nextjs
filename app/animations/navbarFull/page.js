import React from "react";
import NavClient from "./navClient";
import { TransitionProvider } from "@/app/components/pageTransitionprovider";
import Footer from "@/app/components/footer";

const FullNavbarPage = () => {
  return (
    <TransitionProvider>
    <div className="w-full h-screen bg-back bg-cover  ">
      <NavClient />
    </div>
    <Footer />
    </TransitionProvider>

  );
};

export default FullNavbarPage;
