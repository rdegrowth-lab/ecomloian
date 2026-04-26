import { useState } from "react";
import AnnouncementBar from "@/components/landing/AnnouncementBar";
import StickyNav from "@/components/landing/StickyNav";
import Hero from "@/components/landing/Hero";
import Ticker from "@/components/landing/Ticker";
import Benefits from "@/components/landing/Benefits";
import Steps from "@/components/landing/Steps";
import FomoBlock from "@/components/landing/FomoBlock";
import Testimonials from "@/components/landing/Testimonials";
import Pricing from "@/components/landing/Pricing";
import Faq from "@/components/landing/Faq";
import Footer from "@/components/landing/Footer";
import Apply, { BudgetTag } from "./Apply";
import Thanks from "./Thanks";

type View = "home" | "aplicar" | "gracias";

const Index = () => {
  const [view, setView] = useState<View>("home");
  const [selectedPlan, setSelectedPlan] = useState<"base" | "anual" | null>(null);
  const [budgetTag, setBudgetTag] = useState<BudgetTag | null>(null);

  const goApply = (plan?: "base" | "anual") => {
    setSelectedPlan(plan ?? null);
    setView("aplicar");
    window.scrollTo({ top: 0 });
  };

  if (view === "aplicar") {
    return (
      <Apply
        onBack={() => setView("home")}
        onComplete={(tag) => {
          setBudgetTag(tag);
          setView("gracias");
          window.scrollTo({ top: 0 });
        }}
        initialPlan={selectedPlan}
      />
    );
  }

  if (view === "gracias" && budgetTag) {
    return <Thanks tag={budgetTag} onBack={() => setView("home")} />;
  }

  return (
    <main className="min-h-screen bg-white text-[#0a0a0a]">
      <AnnouncementBar />
      <StickyNav onApply={() => goApply()} />
      <Hero onApply={() => goApply()} />
      <Ticker />
      <Benefits />
      <Steps />
      <FomoBlock />
      <Testimonials />
      <Pricing onApply={(plan) => goApply(plan)} />
      <Faq />
      <Footer />
    </main>
  );
};

export default Index;
