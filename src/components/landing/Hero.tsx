import { Play } from "lucide-react";

const avatars = [
  { initials: "JC" },
  { initials: "GM" },
  { initials: "AS" },
  { initials: "LH" },
  { initials: "FV" },
];

const Hero = () => {
  return (
    <section id="top" className="px-4 sm:px-6 pt-12 sm:pt-20 pb-10 max-w-5xl mx-auto text-center">
      <h1 className="text-4xl sm:text-5xl md:text-[52px] font-extrabold leading-[1.05] tracking-tight text-balance">
        El revendedor que <span className="text-primary">cobra</span> cada semana.
      </h1>
      <p className="mt-6 text-base sm:text-lg text-[hsl(var(--brand-muted))] max-w-[560px] mx-auto leading-relaxed">
        Formación completa, proveedores reales y una comunidad privada donde todos están
        haciendo dinero ahora mismo. Acceso inmediato.
      </p>

      <div className="mt-8 flex items-center justify-center gap-3 flex-wrap">
        <div className="flex -space-x-2">
          {avatars.map((a) => (
            <div
              key={a.initials}
              className="w-9 h-9 rounded-full bg-[#333] border-2 border-[hsl(var(--brand-bg))] flex items-center justify-center text-primary text-xs font-bold"
            >
              {a.initials}
            </div>
          ))}
        </div>
        <p className="text-sm text-[hsl(var(--brand-muted))]">
          +340 miembros activos · <span className="text-[hsl(var(--brand-yellow))]">★★★★★</span> 4.9
        </p>
      </div>

      <div className="mt-10 max-w-[720px] mx-auto">
        <div className="group relative aspect-video w-full bg-black border-2 border-primary rounded-xl flex flex-col items-center justify-center cursor-pointer overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
          <div className="relative z-10 w-20 h-20 rounded-full bg-primary flex items-center justify-center transition-transform group-hover:scale-110 shadow-[0_0_40px_hsl(var(--primary)/0.4)]">
            <Play className="w-8 h-8 text-primary-foreground fill-primary-foreground ml-1" />
          </div>
          <p className="relative z-10 mt-5 text-sm text-white font-medium">
            Mira el vídeo antes de continuar — 8 minutos
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
