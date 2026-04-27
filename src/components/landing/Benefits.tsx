import { Package, Handshake, MessageCircle, Phone, Trophy, Lock, LucideIcon } from "lucide-react";

type Item = { Icon: LucideIcon; title: string; desc: string };

const items: Item[] = [
  {
    Icon: Package,
    title: "Formación en vídeo completa",
    desc: "6 módulos grabados: fundamentos, proveedores, tienda, logística, escalado y marca personal. Vas a tu ritmo, sin caducidad.",
  },
  {
    Icon: Handshake,
    title: "Proveedores reales y verificados",
    desc: "La lista de proveedores que Loian usa personalmente: ropa, zapatos, perfumes, tecnología, vapers. Actualizada con novedades.",
  },
  {
    Icon: MessageCircle,
    title: "Comunidad activa 24/7",
    desc: "Feed diario donde los miembros comparten ventas, dudas, logros y oportunidades. No es un grupo muerto.",
  },
  {
    Icon: Phone,
    title: "Calls grupales mensuales con Loian",
    desc: "Sesiones en directo cada mes. Expones tu caso, recibes feedback real. Solo plan anual. Grabadas.",
  },
  {
    Icon: Trophy,
    title: "Bolsa de trabajo interna",
    desc: "Los miembros se contratan entre sí: fotos, gestión de pedidos, embalaje. Una economía dentro de la comunidad.",
  },
  {
    Icon: Lock,
    title: 'Sección "Ofertas del día"',
    desc: "Miembros comparten liquidaciones y oportunidades que no están en ningún sitio más. La sección más activa.",
  },
];

const Benefits = () => {
  return (
    <section className="relative bg-brand-black overflow-hidden px-4 sm:px-6 py-20">
      <div className="absolute inset-0 bg-grid-soft pointer-events-none opacity-70" />
      <div className="relative z-10 max-w-5xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <h2 className="font-display text-4xl sm:text-[44px] tracking-tight text-[#f0f0f0] leading-tight">
          Todo lo que necesitas para ganar dinero revendiendo
        </h2>
        <p className="mt-4 text-brand-subtle max-w-[520px] mx-auto leading-relaxed">
          Sin rodeos. Sin teoría vacía. Esto es lo que tienes desde el primer día.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
        {items.map(({ Icon, title, desc }) => (
          <div key={title} className="flex gap-4 bg-brand-surface border border-brand-border rounded-md p-5 hover:border-brand-red/60 transition-colors">
            <div className="shrink-0 w-10 h-10 rounded-md bg-brand-red/10 border border-brand-red/30 flex items-center justify-center">
              <Icon className="w-5 h-5 text-brand-red" strokeWidth={2.2} />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#f0f0f0]">{title}</h3>
              <p className="mt-1.5 text-sm text-brand-subtle leading-relaxed">{desc}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Benefits;
