const benefits = [
  {
    icon: "📦",
    title: "Formación en 6 módulos",
    desc: "Fundamentos, proveedores, tienda, logística, escalado y marca personal. Vas a tu ritmo. Sin caducidad.",
  },
  {
    icon: "🤝",
    title: "Proveedores verificados y actualizados",
    desc: "La lista de proveedores reales que Loian usa: ropa, zapatos, perfumes, tecnología, vapers. Actualizada cuando hay novedades.",
  },
  {
    icon: "💬",
    title: "Comunidad activa — no un grupo muerto",
    desc: "Feed diario donde los miembros comparten ventas, dudas, logros y oportunidades. Hay gente dentro ahora mismo.",
  },
  {
    icon: "📞",
    title: "Calls grupales mensuales (plan anual)",
    desc: "Una sesión en directo al mes con Loian. Expones tu caso, recibes feedback real. Grabadas para quien no puede en directo.",
  },
  {
    icon: "🏆",
    title: "Bolsa de trabajo interna",
    desc: "Los miembros se contratan entre sí: fotos, gestión de pedidos, embalaje. Una economía dentro de la comunidad.",
  },
  {
    icon: "🔒",
    title: 'Sección "Ofertas del día"',
    desc: "La sección más activa. Miembros comparten liquidaciones y oportunidades que no aparecen en ningún sitio más. Solo para miembros.",
  },
];

const Benefits = () => {
  return (
    <section className="px-4 sm:px-6 py-20 max-w-6xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <h2 className="text-3xl sm:text-[40px] font-bold tracking-tight text-[#0a0a0a] leading-tight">
          No es un curso que compras y olvidas.
        </h2>
        <p className="mt-3 text-lg font-medium text-[#e31c1c]">
          Es una comunidad activa donde la gente vende cada semana.
        </p>
        <p className="mt-5 text-[#0a0a0a] max-w-[600px] mx-auto leading-relaxed">
          Dentro encuentras formación estructurada en vídeo, la lista de proveedores que Loian usa
          personalmente, y un grupo de personas con tu mismo objetivo que se ayudan entre sí todos
          los días. El valor crece cada semana que estás dentro.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {benefits.map((b) => (
          <div
            key={b.title}
            className="bg-[#f5f5f5] border-t-[3px] border-[#e31c1c] rounded-lg p-5 hover:scale-[1.02] transition-transform"
          >
            <div className="text-3xl mb-3">{b.icon}</div>
            <h3 className="text-lg font-bold text-[#0a0a0a]">{b.title}</h3>
            <p className="mt-2 text-sm text-[#6b7280] leading-relaxed">{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
