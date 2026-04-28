import * as React from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";
import { useVideoGate } from "@/context/VideoGate";

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
        const move = (e: MouseEvent) => {
          const rect = element.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          gsap.to(element, { x: x * 0.25, y: y * 0.25, scale: 1.03, ease: "power2.out", duration: 0.4 });
        };
        const leave = () => gsap.to(element, { x: 0, y: 0, scale: 1, ease: "elastic.out(1, 0.4)", duration: 1 });
        element.addEventListener("mousemove", move);
        element.addEventListener("mouseleave", leave);
        return () => {
          element.removeEventListener("mousemove", move);
          element.removeEventListener("mouseleave", leave);
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
.hero-vsl-frame {
  background: #161616;
  border: 1px solid #222;
  box-shadow:
    0 40px 100px -20px rgba(0,0,0,0.6),
    0 10px 30px -10px rgba(227,28,28,0.15),
    0 0 0 1px rgba(255,255,255,0.04);
}
.hero-progress-track {
  height: 4px;
  background: #2a2a2a;
  border-radius: 2px;
  overflow: hidden;
  width: 100%;
}
.hero-progress-fill {
  height: 100%;
  background: #FF0000;
  box-shadow: 0 0 12px rgba(255,0,0,0.5);
  transition: width 0.3s linear;
}
.cta-locked {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
  filter: grayscale(0.4);
  transition: opacity 0.6s ease, filter 0.6s ease, transform 0.6s ease;
}
.cta-locked-interactive {
  opacity: 0.55;
  cursor: pointer;
  filter: grayscale(0.35);
  transition: opacity 0.6s ease, filter 0.6s ease, transform 0.6s ease;
}
.cta-unlocked {
  opacity: 1;
  cursor: pointer;
  transition: opacity 0.6s ease, filter 0.6s ease, transform 0.6s ease;
  animation: ctaUnlock 0.8s ease-out;
}
@keyframes ctaUnlock {
  0% { transform: scale(0.96); opacity: 0.5; }
  60% { transform: scale(1.03); opacity: 1; }
  100% { transform: scale(1); opacity: 1; }
}
`;

const YT_VIDEO_ID = "JzilG8pBn_o";

declare global {
  interface Window {
    YT?: any;
    onYouTubeIframeAPIReady?: () => void;
  }
}

let ytApiPromise: Promise<void> | null = null;
const loadYouTubeAPI = (): Promise<void> => {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.YT && window.YT.Player) return Promise.resolve();
  if (ytApiPromise) return ytApiPromise;
  ytApiPromise = new Promise((resolve) => {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(tag);
    const prev = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      prev?.();
      resolve();
    };
  });
  return ytApiPromise;
};

const Hero = ({ onApply }: Props) => {
  const playerContainerRef = useRef<HTMLDivElement | null>(null);
  const playerRef = useRef<any>(null);
  const intervalRef = useRef<number | null>(null);
  const { progress, unlocked, setProgress, openLockedModal, triggerShake, shakeNonce } = useVideoGate();
  const ctaRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    let cancelled = false;
    loadYouTubeAPI().then(() => {
      if (cancelled || !playerContainerRef.current) return;
      playerRef.current = new window.YT.Player(playerContainerRef.current, {
        videoId: YT_VIDEO_ID,
        playerVars: {
          rel: 0,
          modestbranding: 1,
          playsinline: 1,
          autoplay: 1,
          mute: 1,
        },
        events: {
          onReady: (e: any) => {
            try {
              e.target.mute();
              e.target.playVideo();
            } catch {}
            if (intervalRef.current) window.clearInterval(intervalRef.current);
            intervalRef.current = window.setInterval(() => {
              const p = playerRef.current;
              if (!p || !p.getDuration) return;
              const dur = p.getDuration();
              const cur = p.getCurrentTime();
              if (dur > 0) {
                setProgress(Math.min(100, (cur / dur) * 100));
              }
            }, 500);
          },
          onStateChange: (e: any) => {
            if (e.data === 0) setProgress(100);
          },
        },
      });
    });

    const onPlayRequest = () => {
      try {
        const p = playerRef.current;
        if (!p) return;
        p.unMute?.();
        p.setVolume?.(100);
        p.playVideo?.();
      } catch {}
    };
    window.addEventListener("hero:play-video", onPlayRequest);

    return () => {
      cancelled = true;
      window.removeEventListener("hero:play-video", onPlayRequest);
      if (intervalRef.current) window.clearInterval(intervalRef.current);
      try {
        playerRef.current?.destroy?.();
      } catch {}
    };
  }, [setProgress]);

  // Shake when triggered globally (only relevant if locked)
  useEffect(() => {
    if (shakeNonce === 0 || unlocked) return;
    const el = ctaRef.current;
    if (!el) return;
    el.classList.remove("cta-shake");
    void el.offsetWidth;
    el.classList.add("cta-shake");
  }, [shakeNonce, unlocked]);

  const scrollToForm = () => {
    const el = document.getElementById("formulario");
    if (el) el.scrollIntoView({ behavior: "smooth" });
    else onApply();
  };

  const handleCTA = () => {
    if (!unlocked) {
      triggerShake();
      openLockedModal();
      return;
    }
    scrollToForm();
  };

  return (
    <>
      <style>{HERO_STYLES}</style>
      <section
        id="top"
        className="relative bg-brand-black overflow-hidden px-4 sm:px-6 pt-20 sm:pt-28 pb-20"
      >
        <div className="absolute top-1/2 left-1/2 w-[80vw] h-[80vw] max-w-[900px] max-h-[900px] bg-aurora-red animate-aurora-breathe pointer-events-none" />
        <div className="absolute inset-0 bg-grid-soft pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-center pointer-events-none select-none overflow-hidden">
          <div className="hero-giant-bg-text">LOIAN</div>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <span className="inline-block text-[11px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-brand-subtle mb-6">
            Comunidad privada · Acceso por aplicación
          </span>

          <h1 className="font-display text-[44px] sm:text-[68px] leading-[0.95] tracking-tight text-balance text-[#f0f0f0]">
            La comunidad privada de{" "}
            <span className="reventa-badge">reventa online</span>
            <br className="hidden sm:block" /> que no encontrarás en ningún sitio más.
          </h1>

          <p className="mt-6 text-base sm:text-lg text-brand-subtle max-w-[600px] mx-auto leading-relaxed">
            Formación estructurada, proveedores verificados y un grupo de personas que ya están
            vendiendo. No es un curso. Es una sociedad.
          </p>

          {/* VSL */}
          <div className="mt-12 max-w-[760px] mx-auto">
            <div className="hero-vsl-frame aspect-video w-full rounded-lg overflow-hidden p-1.5">
              <div className="w-full h-full rounded overflow-hidden bg-black">
                <div ref={playerContainerRef} className="w-full h-full" />
              </div>
            </div>

            {/* Progress bar */}
            <div
              className="mt-4 hero-progress-track"
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(progress)}
              aria-label="Progreso del vídeo"
            >
              <div className="hero-progress-fill" style={{ width: `${progress}%` }} />
            </div>

            {/* CTA bloqueado hasta 80% */}
            <div className="mt-6 flex flex-col items-center gap-3">
              <MagneticButton
                ref={ctaRef}
                onClick={handleCTA}
                aria-disabled={!unlocked}
                className={cn(
                  "btn-primary-cta text-base",
                  unlocked ? "cta-unlocked" : "cta-locked-interactive"
                )}
              >
                {unlocked ? "Acceso al formulario →" : "Acceso al formulario"}
              </MagneticButton>
              <p className="text-xs text-brand-muted">
                {unlocked
                  ? "Acceso desbloqueado — completa tu aplicación"
                  : "Mira el vídeo completo para desbloquear el acceso"}
              </p>
            </div>
          </div>

          {/* Reveal: authority & social proof (no fake scarcity) */}
          {unlocked && (
            <div className="mt-12 max-w-xl mx-auto bg-brand-surface border border-brand-border rounded-lg p-8 animate-slide-up">
              <div className="flex items-center justify-center gap-3 text-[10px] uppercase tracking-[0.32em] text-brand-subtle">
                <span className="h-px w-8 bg-brand-border" />
                <span>Construido por dentro</span>
                <span className="h-px w-8 bg-brand-border" />
              </div>
              <h3 className="font-display text-3xl sm:text-[34px] text-[#f0f0f0] tracking-wide mt-4">
                Acceso por aplicación.
                <br /> No por tarjeta.
              </h3>
              <p className="mt-3 text-sm text-brand-subtle leading-relaxed">
                Revisamos cada perfil personalmente. Si encajas, entras. Sin embudos,
                sin upsells, sin promesas vacías.
              </p>
              <button onClick={scrollToForm} className="btn-primary-cta mt-6">
                Aplicar ahora →
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Hero;
