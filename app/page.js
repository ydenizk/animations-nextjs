import { TransitionProvider } from "./components/pageTransitionprovider";
import HeroTextClient from "./components/HeroTextClient";
import HeroImage from "./components/HeroImage";

export default function Home() {
  return (
    <TransitionProvider>
      <div className="w-full font-nunito h-[200vh]  overflow-hidden ">
        <HeroTextClient />
        <HeroImage />
        <Footer />
      </div>
    </TransitionProvider>
  );
}
