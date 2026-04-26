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

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <AnnouncementBar />
      <StickyNav />
      <Hero />
      <Ticker />
      <Benefits />
      <Steps />
      <FomoBlock />
      <Testimonials />
      <Pricing />
      <Faq />
      <Footer />
    </main>
  );
};

export default Index;
