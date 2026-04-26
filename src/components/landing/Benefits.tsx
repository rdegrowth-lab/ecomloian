const benefits = [
  {
    icon: "📦",
    title: "Formación en vídeo completa",
    desc: "6 módulos grabados: fundamentos, proveedores, tienda, logística, escalado y marca personal. Vas a tu ritmo, sin caducidad.",
  },
  {
    icon: "🤝",
    title: "Proveedores reales y verificados",
    desc: "Acceso a la lista de proveedores que Loian usa personalmente. Ropa, zapatos, perfumes, tecnología, vapers. Actualizados.",
  },
  {
    icon: "💬",
    title: "Comunidad activa 24/7",
    desc: "Feed diario de miembros compartiendo ventas, ofertas, dudas y victorias. La comunidad más activa del nicho en España.",
  },
  {
    icon: "📞",
    title: "Calls grupales mensuales con Loian",
    desc: "Sesiones en directo cada mes. Preguntas reales, respuestas reales. Solo para miembros del plan anual.",
  },
  {
    icon: "🏆",
    title: "Bolsa de trabajo interna",
    desc: "Los miembros se contratan entre sí para crecer más rápido. Una economía dentro de la comunidad.",
  },
  {
    icon: "🔒",
    title: "Ofertas del día — acceso exclusivo",
    desc: "La sección más adictiva. Miembros comparten liquidaciones, chollos y oportunidades que no están en ningún sitio más.",
  },
];

const Benefits = () => {
  return (
    <section className="px-4 sm:px-6 py-20 max-w-6xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Todo lo que necesitas para ganar dinero revendiendo
        </h2>
        <p className="mt-4 text-[hsl(var(--brand-muted))]">
          Sin rodeos. Sin teoría vacía. Esto es lo que entra en tu comunidad desde el primer día.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {benefits.map((b) => (
          <div
            key={b.title}
            className="bg-card border border-border rounded-xl p-6 hover:scale-[1.02] hover:border-primary/40 transition-transform"
          >
            <div className="text-3xl mb-3">{b.icon}</div>
            <h3 className="text-lg font-bold text-white">{b.title}</h3>
            <p className="mt-2 text-sm text-[hsl(var(--brand-muted))] leading-relaxed">{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
