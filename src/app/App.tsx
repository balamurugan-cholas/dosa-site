import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SocialProof from "./components/SocialProof";
import FeatureTranscription from "./components/FeatureTranscription";
import FeatureAI from "./components/FeatureAI";
import FeatureScreen from "./components/FeatureScreen";
import HowItWorks from "./components/HowItWorks";
import InvisibleSection from "./components/InvisibleSection";
import FreeForever from "./components/FreeForever";
import DownloadCTA from "./components/DownloadCTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div
      className="min-h-screen overflow-x-hidden bg-background text-foreground"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <FeatureTranscription />
        <FeatureAI />
        <FeatureScreen />
        <HowItWorks />
        <InvisibleSection />
        <FreeForever />
        <DownloadCTA />
      </main>
      <Footer />
    </div>
  );
}
