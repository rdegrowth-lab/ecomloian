import { CSSProperties, ReactNode } from "react";

type Avatar = { src: string; alt: string };

type Props = {
  title: ReactNode;
  description: string;
  buttonText: string;
  buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement> & { style?: CSSProperties };
  avatars: Avatar[];
  orbitRadius?: number; // in rem
  orbitDuration?: number; // seconds
  className?: string;
};

const OrbitingAvatarsCTA = ({
  title,
  description,
  buttonText,
  buttonProps,
  avatars,
  orbitRadius = 18,
  orbitDuration = 35,
  className = "",
}: Props) => {
  return (
    <section className={`relative overflow-hidden px-4 sm:px-6 py-20 sm:py-28 ${className}`}>
      {/* Orbit container */}
      <div
        className="pointer-events-none absolute inset-0 mx-auto flex items-center justify-center"
        aria-hidden="true"
      >
        <div
          className="relative"
          style={{
            width: `${orbitRadius * 2}rem`,
            height: `${orbitRadius * 2}rem`,
            animation: `orbit-spin ${orbitDuration}s linear infinite`,
          }}
        >
          {avatars.map((a, i) => {
            const angle = (i / avatars.length) * 2 * Math.PI;
            const x = Math.cos(angle) * orbitRadius;
            const y = Math.sin(angle) * orbitRadius;
            return (
              <div
                key={i}
                className="absolute top-1/2 left-1/2"
                style={{
                  transform: `translate(-50%, -50%) translate(${x}rem, ${y}rem)`,
                }}
              >
                <div
                  className="rounded-full overflow-hidden border-2 border-white shadow-lg bg-[hsl(var(--brand-card))]"
                  style={{
                    width: "56px",
                    height: "56px",
                    animation: `orbit-counter ${orbitDuration}s linear infinite`,
                  }}
                >
                  <img src={a.src} alt={a.alt} className="w-full h-full object-cover" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Center content */}
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-[56px] font-extrabold leading-[1.05] tracking-tight text-balance text-[hsl(var(--brand-dark))]">
          {title}
        </h1>
        <p className="mt-6 text-base sm:text-lg text-[hsl(var(--brand-muted))] max-w-xl mx-auto leading-relaxed">
          {description}
        </p>
        <div className="mt-8">
          <button
            {...buttonProps}
            className="rounded-lg font-bold transition-transform hover:scale-105 shadow-lg"
            style={{
              backgroundColor: "#e31c1c",
              color: "#fff",
              fontSize: "16px",
              padding: "14px 32px",
              ...(buttonProps?.style || {}),
            }}
          >
            {buttonText}
          </button>
        </div>
      </div>

      <style>{`
        @keyframes orbit-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes orbit-counter {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
      `}</style>
    </section>
  );
};

export default OrbitingAvatarsCTA;
