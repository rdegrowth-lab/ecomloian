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
    <section className="relative bg-white overflow-hidden px-6 md:px-12 lg:px-16 py-20 lg:py-24">
      <div className="relative z-10 max-w-[1200px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-[42px] font-bold tracking-tight text-[#0a0a0a] leading-tight">
            Todo lo que necesitas para ganar dinero revendiendo
          </h2>
          <p className="mt-4 text-base text-[#6b7280] max-w-[520px] mx-auto leading-relaxed">
            Sin rodeos. Sin teoría vacía. Esto es lo que tienes desde el primer día.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ Icon, title, desc }) => (
            <div
              key={title}
              className="bg-[#f9f9f9] border border-[#e5e7eb] rounded-lg p-6 transition-all hover:shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
            >
              <div className="w-8 h-8 flex items-center justify-center mb-4">
                <Icon className="w-8 h-8 text-[#e31c1c]" strokeWidth={2} />
              </div>
              <h3 className="text-base font-bold text-[#0a0a0a]">{title}</h3>
              <p className="mt-2 text-sm text-[#6b7280] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
