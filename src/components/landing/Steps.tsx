const steps = [
  { n: "01", title: "Entras y te orientas el primer día", desc: "Accedes a la comunidad, ves el módulo de bienvenida y publicas tu primer post. Bienvenido al juego." },
  { n: "02", title: "Aprendes con los módulos grabados", desc: "Empiezas por Fundamentos si eres nuevo, o saltas directamente a Proveedores si ya vendiste algo. Sin pasos obligatorios." },
  { n: "03", title: "Haces tu primer pedido a proveedor", desc: "Usas la lista de proveedores verificada. Preguntas en la comunidad si tienes dudas. Alguien ya ha pedido ahí antes." },
  { n: "04", title: "Publicas y empiezas a vender", desc: "Con las guías de descripción, fotografía y precio. Los demás miembros te dan feedback real en tiempo real." },
  { n: "05", title: "Compartes tu primera victoria", desc: "Tu primera venta va al canal #victorias. El FOMO que genera en los demás empuja a todos a seguir." },
  { n: "06", title: "Escalas con las calls mensuales", desc: "En la call grupal con Loian expones tu situación. Él te da el siguiente paso exacto. Sin genéricos." },
];

const Steps = () => {
  return (
    <section className="px-4 sm:px-6 py-20 max-w-3xl mx-auto">
      <div className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-balance">
          El método que siguen los que ya están cobrando
        </h2>
      </div>

      <div className="relative pl-14 sm:pl-20">
        <div className="absolute left-5 sm:left-7 top-2 bottom-2 w-0.5 bg-primary/60" />
        <div className="space-y-10">
          {steps.map((s) => (
            <div key={s.n} className="relative">
              <div className="absolute -left-14 sm:-left-20 top-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shadow-[0_0_20px_hsl(var(--primary)/0.4)]">
                {s.n}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">{s.title}</h3>
              <p className="mt-2 text-[hsl(var(--brand-muted))] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
