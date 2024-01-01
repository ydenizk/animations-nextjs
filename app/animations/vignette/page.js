//npm i @studio-freight/lenis    scroll library is used !!

import React,{Suspense} from "react";
import VignetteClient from "./VignetteClient";
import { TransitionProvider } from "@/app/components/pageTransitionprovider";
import Loading from "@/app/loading";
import Footer from "@/app/components/footer";






const VignettePage = () => {
  return (
    <TransitionProvider>
      <div className="w-full ">

        <Suspense fallback={<Loading />}>
           <VignetteClient />
        </Suspense>
       
      </div>
      <Footer />
    </TransitionProvider>
  );
};

export default VignettePage;
