import * as React from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
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
            x: x * 0.3,
            y: y * 0.3,
            rotationX: -y * 0.1,
            rotationY: x * 0.1,
            scale: 1.04,
            ease: "power2.out",
            duration: 0.4,
          });
        };

        const handleMouseLeave = () => {
          gsap.to(element, {
            x: 0, y: 0, rotationX: 0, rotationY: 0, scale: 1,
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
.hero-giant-bg-text {
  font-size: 22vw;
  line-height: 0.75;
  font-weight: 900;
  letter-spacing: -0.05em;
  color: transparent;
  -webkit-text-stroke: 1px rgba(10,10,10,0.06);
  background: linear-gradient(180deg, rgba(10,10,10,0.07) 0%, transparent 60%);
  -webkit-background-clip: text;
  background-clip: text;
  white-space: nowrap;
}
.hero-magnetic-btn {
  background: linear-gradient(145deg, #e31c1c 0%, #b81515 100%);
  box-shadow:
    0 20px 50px -12px rgba(227,28,28,0.5),
    inset 0 1px 1px rgba(255,255,255,0.25),
    inset 0 -2px 4px rgba(0,0,0,0.15);
  border: 1px solid rgba(227,28,28,0.7);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  transform-style: preserve-3d;
  perspective: 800px;
}
.hero-magnetic-btn:hover {
  box-shadow:
    0 30px 60px -10px rgba(227,28,28,0.65),
    inset 0 1px 1px rgba(255,255,255,0.3);
}
.hero-vsl-frame {
  background: linear-gradient(180deg, #ffffff 0%, #f9f9f9 100%);
  box-shadow:
    0 30px 80px -20px rgba(10,10,10,0.18),
    0 0 0 1px rgba(10,10,10,0.05);
}
`;

const Hero = ({ onApply }: Props) => {
  return (
    <>
      <style>{HERO_STYLES}</style>
      <section
        id="top"
        className="relative bg-white overflow-hidden px-4 sm:px-6 pt-20 sm:pt-28 pb-20"
      >
        {/* Aurora */}
        <div className="absolute top-1/2 left-1/2 w-[80vw] h-[80vw] max-w-[900px] max-h-[900px] bg-aurora-red animate-aurora-breathe pointer-events-none" />

        {/* Grid background */}
        <div className="absolute inset-0 bg-grid-soft pointer-events-none" />

        {/* Giant background text */}
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-center pointer-events-none select-none overflow-hidden">
          <div className="hero-giant-bg-text">LOIAN</div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <span className="inline-block text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#e31c1c] mb-6">
            ◉ Comunidad privada · Plazas limitadas
          </span>

          <h1 className="text-[36px] sm:text-[56px] font-extrabold leading-[1.05] tracking-tight text-balance text-glow-dark">
            La comunidad <span className="text-[#e31c1c]">privada</span> de reventa online
            <br className="hidden sm:block" /> que no encontrarás en ningún sitio más.
          </h1>

          <p className="mt-6 text-base sm:text-lg text-[#6b7280] max-w-[600px] mx-auto leading-relaxed">
            Formación estructurada, proveedores verificados y un grupo de personas que ya están
            vendiendo. No es un curso. Es una sociedad.
          </p>

          {/* VSL embed con frame premium */}
          <div className="mt-12 max-w-[760px] mx-auto">
            <div className="hero-vsl-frame aspect-video w-full rounded-2xl overflow-hidden p-1.5">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Video de presentación ECOM LOIAN"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-xl"
              />
            </div>
            <p className="mt-3 text-[13px] text-[#6b7280]">
              Mira el vídeo completo antes de continuar
            </p>
          </div>

          {/* CTA con botón magnético */}
          <div className="mt-10 flex flex-col items-center gap-4">
            <MagneticButton
              onClick={onApply}
              className="hero-magnetic-btn text-white font-bold text-base sm:text-lg px-10 sm:px-14 py-4 sm:py-5 rounded-2xl"
            >
              Quiero entrar → Aplicar ahora
            </MagneticButton>
            <p className="text-xs text-[#6b7280]">
              Aplicar no te obliga a nada — en 2 minutos sabes si encajas
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
