import * as React from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const STYLES = `
.cinematic-cta-wrapper {
  font-family: 'Plus Jakarta Sans', 'SF Pro Display', system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
}

@keyframes cta-breathe {
  0% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
  100% { transform: translate(-50%, -50%) scale(1.15); opacity: 0.9; }
}

@keyframes cta-scroll-marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

.animate-cta-breathe {
  animation: cta-breathe 8s ease-in-out infinite alternate;
}

.animate-cta-scroll-marquee {
  animation: cta-scroll-marquee 40s linear infinite;
}

.cta-bg-grid {
  background-color: #080808;
  background-size: 52px 52px;
  background-image:
    linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px);
  mask-image: linear-gradient(to bottom, transparent 0%, black 12%, black 75%, transparent 100%);
  -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 12%, black 75%, transparent 100%);
}

.cta-aurora {
  background: radial-gradient(
    circle at 50% 50%,
    rgba(227,28,28,0.22) 0%,
    rgba(227,28,28,0.08) 40%,
    transparent 70%
  );
}

.cta-giant-bg-text {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 24vw;
  line-height: 0.75;
  letter-spacing: 0.02em;
  color: transparent;
  -webkit-text-stroke: 1px rgba(255,255,255,0.05);
  background: linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 70%);
  -webkit-background-clip: text;
  background-clip: text;
  white-space: nowrap;
}

.cta-text-glow {
  color: #f0f0f0;
  text-shadow: 0 2px 30px rgba(0,0,0,0.6);
}

.cta-magnetic-btn {
  background: linear-gradient(145deg, #e31c1c 0%, #b81515 100%);
  box-shadow:
    0 20px 50px -12px rgba(227,28,28,0.55),
    inset 0 1px 1px rgba(255,255,255,0.25),
    inset 0 -2px 4px rgba(0,0,0,0.15);
  border: 1px solid rgba(227,28,28,0.7);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  transform-style: preserve-3d;
  perspective: 800px;
}

.cta-magnetic-btn:hover {
  box-shadow:
    0 30px 60px -10px rgba(227,28,28,0.7),
    inset 0 1px 1px rgba(255,255,255,0.3);
}
`;

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
            x: x * 0.35,
            y: y * 0.35,
            rotationX: -y * 0.12,
            rotationY: x * 0.12,
            scale: 1.05,
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

const MarqueeRow = () => (
  <div className="flex items-center gap-12 text-sm font-semibold text-brand-subtle whitespace-nowrap px-6">
    <span>Comunidad privada</span><span className="text-brand-red">·</span>
    <span>Proveedores verificados</span><span className="text-brand-red">·</span>
    <span>Calls con Loian</span><span className="text-brand-red">·</span>
    <span>Bolsa de trabajo interna</span><span className="text-brand-red">·</span>
    <span>Plazas limitadas</span><span className="text-brand-red">·</span>
    <span>Acceso inmediato</span><span className="text-brand-red">·</span>
  </div>
);

type Props = { onApply: () => void };

export default function CinematicCTA({ onApply }: Props) {
  const wrapperRef = useRef<HTMLElement | null>(null);
  const giantTextRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const subRef = useRef<HTMLParagraphElement | null>(null);
  const btnWrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!wrapperRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        giantTextRef.current,
        { y: "10vh", scale: 0.8, opacity: 0 },
        {
          y: "0vh",
          scale: 1,
          opacity: 1,
          ease: "power1.out",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 80%",
            end: "bottom bottom",
            scrub: 1,
          },
        }
      );

      gsap.fromTo(
        [headingRef.current, subRef.current, btnWrapRef.current],
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 60%",
          },
        }
      );
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <style>{STYLES}</style>
      <section
        id="formulario"
        ref={wrapperRef}
        className="cinematic-cta-wrapper relative bg-brand-black overflow-hidden py-32 sm:py-40"
      >
        <div className="absolute top-1/2 left-1/2 w-[80vw] h-[80vw] max-w-[900px] max-h-[900px] cta-aurora animate-cta-breathe pointer-events-none" />
        <div className="absolute inset-0 cta-bg-grid pointer-events-none" />

        <div
          ref={giantTextRef}
          className="absolute inset-x-0 bottom-0 flex items-end justify-center pointer-events-none select-none overflow-hidden"
        >
          <div className="cta-giant-bg-text">LOIAN</div>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.3em] text-brand-red mb-6 px-4 py-2 rounded-md"
            style={{ background: "rgba(227,28,28,0.12)", border: "1px solid rgba(227,28,28,0.3)" }}>
            Solo 5 plazas disponibles esta semana
          </span>

          <h2
            ref={headingRef}
            className="font-display text-5xl sm:text-6xl md:text-7xl tracking-tight leading-[0.95] cta-text-glow"
          >
            Si has llegado hasta aquí,
            <br />
            ya sabes lo que toca.
          </h2>

          <p
            ref={subRef}
            className="mt-6 text-lg sm:text-xl text-brand-subtle max-w-2xl mx-auto leading-relaxed"
          >
            No es para todos. Es para quien quiere dejar de mirar y empezar a vender.
            Aplica ahora — en 2 minutos sabes si encajas.
          </p>

          <div ref={btnWrapRef} className="mt-12 flex flex-col items-center gap-4">
            <MagneticButton
              onClick={onApply}
              className="btn-primary-cta text-base sm:text-lg"
              style={{ padding: "18px 44px" }}
            >
              Quiero mi plaza — Aplicar ahora
            </MagneticButton>

            <p className="text-xs text-brand-muted">
              ✓ Sin tarjeta de crédito · ✓ Llamada de 30 min · ✓ Respuesta en 24h
            </p>
          </div>
        </div>

        <div className="relative z-10 mt-24 overflow-hidden">
          <div className="flex animate-cta-scroll-marquee" style={{ width: "max-content" }}>
            <MarqueeRow />
            <MarqueeRow />
          </div>
        </div>
      </section>
    </>
  );
}
