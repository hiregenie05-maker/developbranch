import HeroSection from "@/components/landing/HeroSection";
import FeatureCards from "@/components/landing/FeatureCards";
import HowItWorks from "@/components/landing/HowItWorks";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <FeatureCards />
      <HowItWorks />
    </div>
  );
}
