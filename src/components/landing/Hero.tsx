import * as React from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = { onApply: () => void };

type MagneticButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

const MagneticButton = React.forwardRef<HTMLButtonElement, MagneticButtonProps>(
  ({ className, children, ...props }, forwardedRef) => {
    const localRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
      const element = localRef.current;
      if (!element) return;

      const ctx = gsap.context(() => {
        const handleMouseMove = (e: MouseEvent) => {
          const rect = element.getBoundingClientRect();
          const h = rect.width / 2;
          const w = rect.height / 2;
          const x = e.clientX - rect.left - h;
          const y = e.clientY - rect.top - w;

          gsap.to(element, {
            x: x * 0.25,
            y: y * 0.25,
            scale: 1.05,
            ease: "power2.out",
            duration: 0.4,
          });
        };

        const handleMouseLeave = () => {
          gsap.to(element, {
            x: 0, y: 0, scale: 1,
            ease: "elastic.out(1, 0.3)", duration: 1.2,
          });
        };

        element.addEventListener("mousemove", handleMouseMove);
        element.addEventListener("mouseleave", handleMouseLeave);
        return () => {
          element.removeEventListener("mousemove", handleMouseMove);
          element.removeEventListener("mouseleave", handleMouseLeave);
        };
      }, element);

      return () => ctx.revert();
    }, []);

    return (
      <button
        ref={(node) => {
          localRef.current = node;
          if (typeof forwardedRef === "function") forwardedRef(node);
          else if (forwardedRef) (forwardedRef as React.MutableRefObject<HTMLButtonElement | null>).current = node;
        }}
        className={cn("cursor-pointer", className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);
MagneticButton.displayName = "MagneticButton";

const HERO_STYLES = `
.hero-magnetic-btn {
  background: linear-gradient(145deg, #e31c1c 0%, #c01717 100%);
  box-shadow: 0 8px 24px -6px rgba(227,28,28,0.4), 0 2px 8px rgba(0,0,0,0.08);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.hero-magnetic-btn:hover {
  box-shadow: 0 14px 32px -6px rgba(227,28,28,0.5), 0 4px 12px rgba(0,0,0,0.1);
}
.hero-vsl-mockup {
  background: #0a0a0a;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08), 0 20px 60px -20px rgba(10,10,10,0.18);
  position: relative;
  overflow: hidden;
}
.hero-vsl-mockup::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 30% 20%, rgba(227,28,28,0.18) 0%, transparent 50%),
    radial-gradient(circle at 70% 80%, rgba(227,28,28,0.10) 0%, transparent 50%);
}
.hero-play-btn {
  background: rgba(255,255,255,0.95);
  box-shadow: 0 8px 32px rgba(0,0,0,0.25);
  transition: transform 0.3s ease;
}
.hero-play-btn:hover {
  transform: scale(1.08);
}
`;

const Hero = ({ onApply }: Props) => {
  return (
    <>
      <style>{HERO_STYLES}</style>
      <section
        id="top"
        className="relative bg-white overflow-hidden px-6 md:px-12 lg:px-16 pt-20 sm:pt-24 lg:pt-28 pb-20 lg:pb-24"
      >
        {/* Aurora — muy sutil */}
        <div
          className="absolute top-1/2 left-1/2 w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] pointer-events-none -translate-x-1/2 -translate-y-1/2"
          style={{
            background:
              "radial-gradient(circle, rgba(227,28,28,0.04) 0%, transparent 70%)",
          }}
        />

        {/* Grid sutil */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundSize: "64px 64px",
            backgroundImage:
              "linear-gradient(to right, rgba(10,10,10,0.025) 1px, transparent 1px), linear-gradient(to bottom, rgba(10,10,10,0.025) 1px, transparent 1px)",
            maskImage:
              "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-[1200px] mx-auto text-center">
          <span className="inline-block text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#e31c1c] mb-6">
            Comunidad privada · Plazas limitadas
          </span>

          <h1 className="text-[40px] sm:text-[52px] lg:text-[64px] font-extrabold leading-[1.05] tracking-tight text-balance text-[#0a0a0a] max-w-[960px] mx-auto">
            La comunidad de{" "}
            <span className="text-[#e31c1c]">reventa privada</span>{" "}
            que no encontrarás en ningún otro sitio.
          </h1>

          <p className="mt-6 text-base text-[#6b7280] max-w-[560px] mx-auto leading-relaxed">
            Formación, proveedores verificados y una comunidad que ya está vendiendo.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col items-center gap-4">
            <MagneticButton
              onClick={onApply}
              className="hero-magnetic-btn text-white font-bold text-base sm:text-lg px-10 sm:px-12 py-4 sm:py-5 rounded-lg"
            >
              Quiero entrar → Aplicar ahora
            </MagneticButton>
            <p className="text-xs text-[#6b7280]">
              Aplicar no te obliga a nada — en 2 minutos sabes si encajas
            </p>
          </div>

          {/* VSL Mockup limpio */}
          <div className="mt-16 max-w-[880px] mx-auto">
            <div className="hero-vsl-mockup aspect-video w-full rounded-lg flex items-center justify-center">
              <button
                type="button"
                onClick={onApply}
                aria-label="Reproducir vídeo de presentación"
                className="hero-play-btn relative z-10 w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center"
              >
                <Play className="w-8 h-8 sm:w-10 sm:h-10 text-[#e31c1c] fill-[#e31c1c] ml-1" />
              </button>
            </div>
            <p className="mt-4 text-[13px] text-[#6b7280]">
              Mira el vídeo completo antes de continuar
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
