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

type View = "home" | "aplicar" | "gracias";

const moduloItems = [
  {
    id: 1,
    title: "Módulo 1 — Fundamentos",
    description:
      "Cómo funciona la reventa online. Mentalidad, primeras plataformas y qué vender.",
    imageSrc: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    meta: "Para empezar desde cero",
  },
  {
    id: 2,
    title: "Módulo 2 — Proveedores",
    description:
      "Lista verificada. Cómo evaluarlos, negociar y calcular márgenes reales.",
    imageSrc: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80",
    meta: "El núcleo del sistema",
  },
  {
    id: 3,
    title: "Módulo 3 — Tienda",
    description:
      "Montaje de tienda, SEO de producto, fotografía real y descripciones que venden.",
    imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    meta: "Tu escaparate digital",
  },
  {
    id: 4,
    title: "Módulo 4 — Logística",
    description:
      "Envíos, devoluciones, almacenamiento. Cómo escalar sin morir en la operativa.",
    imageSrc: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&q=80",
    meta: "Escala sin caos",
  },
  {
    id: 5,
    title: "Módulo 5 — Escalado",
    description:
      "De 0 a €1.000/mes. De €1.000 a €5.000/mes. Cuándo y cómo reinvertir.",
    imageSrc: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?w=800&q=80",
    meta: "El salto de nivel",
  },
  {
    id: 6,
    title: "Módulo 6 — Marca personal",
    description:
      "Cómo construir autoridad en el nicho. Redes sociales para el revendedor.",
    imageSrc: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80",
    meta: "Diferénciate",
  },
];

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
    <main className="min-h-screen bg-white text-[#0a0a0a]">
      <AnnouncementBar />
      <StickyNav onApply={goApply} />
      <Hero onApply={goApply} />
      <Ticker />
      <Benefits />

      {/* Modules */}
      <section className="px-4 sm:px-6 pt-16 pb-8 max-w-3xl mx-auto text-center bg-white">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0a0a0a]">
          Un paso a paso para vender desde la primera semana
        </h2>
        <p className="mt-3 text-[#6b7280]">
          Validado por los miembros del primer batch.
        </p>
      </section>
      <FocusRail items={moduloItems} autoPlay interval={5000} />

      <FomoBlock />
      <Testimonials />
      <CinematicCTA onApply={goApply} />
      <Faq />
      <Footer />
    </main>
  );
};

export default Index;
