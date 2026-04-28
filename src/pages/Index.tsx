import { useState } from "react";
import AnnouncementBar from "@/components/landing/AnnouncementBar";
import StickyNav from "@/components/landing/StickyNav";
import Hero from "@/components/landing/Hero";
import Ticker from "@/components/landing/Ticker";
import Benefits from "@/components/landing/Benefits";
import FocusRail from "@/components/landing/FocusRail";
import FomoBlock from "@/components/landing/FomoBlock";
import Testimonials from "@/components/landing/Testimonials";
import CinematicCTA from "@/components/landing/CinematicCTA";
import Faq from "@/components/landing/Faq";
import Footer from "@/components/landing/Footer";
import Apply, { BudgetTag } from "./Apply";
import Thanks from "./Thanks";
import { VideoGateProvider, useVideoGate } from "@/context/VideoGate";
import { cn } from "@/lib/utils";

type View = "home" | "aplicar" | "gracias";

const moduloItems = [
  {
    id: 1,
    title: "Módulo 1 — Mentalidad del Revendedor",
    description:
      "El mindset correcto para empezar desde cero. Cómo piensan los que llegan a €5k/mes. Disciplina, hábitos y por qué la mayoría falla en los primeros 30 días.",
    imageSrc: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    meta: "Mindset · Hábitos",
  },
  {
    id: 2,
    title: "Módulo 2 — Nicho + Proveedores",
    description:
      "Cómo elegir tu nicho rentable. Lista de proveedores yan verificados. Negociación real, márgenes reales, qué preguntar antes de comprometerte.",
    imageSrc: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80",
    meta: "Proveedores yan",
  },
  {
    id: 3,
    title: "Módulo 3 — Tu Tienda Live",
    description:
      "Montaje de tienda que convierte. Fotografía de producto real. Descripciones que venden. SEO básico. Acceso a plantillas de la comunidad.",
    imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    meta: "Tienda · Conversión",
  },
  {
    id: 4,
    title: "Módulo 4 — Operativa Sin Caos",
    description:
      "Logística, empaques, devoluciones. Cómo escalar sin colapsar. Automatizaciones básicas. Tiempo real: de 1 pedido/día a 20 pedidos/día.",
    imageSrc: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&q=80",
    meta: "Operativa · Escala",
  },
  {
    id: 5,
    title: "Módulo 5 — La Curva €0 → €5.000",
    description:
      "Estrategia mes a mes. Cuándo reinvertir. Decisiones clave en cada fase. Casos reales de miembros documentados.",
    imageSrc: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?w=800&q=80",
    meta: "Crecimiento documentado",
  },
  {
    id: 6,
    title: "Módulo 6 — Marca Personal en el Nicho",
    description:
      "Posicionarte como autoridad. Redes sociales. Comunidad como prueba social. Cómo el contenido y la reventa se alimentan mutuamente.",
    imageSrc: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80",
    meta: "Autoridad · Marca",
  },
];

const MobileStickyCTA = ({ onApply }: { onApply: () => void }) => {
  const { unlocked } = useVideoGate();
  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 px-4 py-3 border-t border-brand-border"
      style={{ background: "rgba(8,8,8,0.97)" }}
    >
      <button
        onClick={unlocked ? onApply : undefined}
        disabled={!unlocked}
        aria-disabled={!unlocked}
        className={cn("btn-primary-cta w-full", unlocked ? "cta-unlocked" : "cta-locked")}
      >
        {unlocked ? "Aplicar ahora →" : "Mira el vídeo para desbloquear"}
      </button>
    </div>
  );
};

const Index = () => {
  const [view, setView] = useState<View>("home");
  const [budgetTag, setBudgetTag] = useState<BudgetTag | null>(null);
  const [userName, setUserName] = useState<string>("");

  const goApply = () => {
    setView("aplicar");
    window.scrollTo({ top: 0 });
  };

  if (view === "aplicar") {
    return (
      <Apply
        onBack={() => setView("home")}
        onComplete={({ name, budget }) => {
          setUserName(name);
          setBudgetTag(budget);
          setView("gracias");
          window.scrollTo({ top: 0 });
        }}
      />
    );
  }

  if (view === "gracias" && budgetTag) {
    return <Thanks tag={budgetTag} name={userName} onBack={() => setView("home")} />;
  }

  return (
    <VideoGateProvider>
      <main className="min-h-screen bg-brand-black text-[#f0f0f0]">
        <StickyNav onApply={goApply} />
        <Hero onApply={goApply} />
        <Ticker />
        <Benefits />

        {/* Modules */}
        <section className="px-4 sm:px-6 pt-16 pb-8 max-w-3xl mx-auto text-center bg-brand-black">
          <h2 className="font-display text-4xl sm:text-5xl tracking-tight text-[#f0f0f0]">
            Un paso a paso para vender desde la primera semana
          </h2>
          <p className="mt-3 text-brand-subtle">
            Validado por los miembros del primer batch.
          </p>
        </section>
        <FocusRail items={moduloItems} autoPlay interval={5000} />

        <FomoBlock />
        <Testimonials />
        <CinematicCTA onApply={goApply} />
        <Faq />
        <Footer />

        <MobileStickyCTA onApply={goApply} />
      </main>
    </VideoGateProvider>
  );
};

export default Index;
