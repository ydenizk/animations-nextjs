import { TransitionProvider } from "./components/pageTransitionprovider";
import HeroTextClient from "./components/HeroTextClient";
import HeroImage from "./components/HeroImage";
import Footer from "./components/footer";

export default function Home() {
  return (
    <TransitionProvider>
      <div className="w-full font-nunito h-[200vh]  overflow-hidden ">
        <HeroTextClient />
        <HeroImage />
      </div>
      <Footer />
    </TransitionProvider>
  );
}
