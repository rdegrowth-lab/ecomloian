const steps = [
  { n: "01", title: "Aplicas y te cualificamos", desc: "Rellenas el formulario. Comprobamos que la comunidad encaja contigo. No aceptamos a todo el mundo." },
  { n: "02", title: "Accedes el mismo día", desc: "Entras a la comunidad, ves el módulo de bienvenida y presentas tu primer post." },
  { n: "03", title: "Haces tu primer pedido a proveedor", desc: "Con la lista verificada. Si tienes dudas, alguien en la comunidad ya ha pedido ahí antes." },
  { n: "04", title: "Publicas y recibes feedback real", desc: "Subes tus primeros anuncios con las guías de descripción, precio y foto. Los demás te ayudan a afinar." },
  { n: "05", title: "Compartes tu primera venta", desc: "Va al canal de victorias. Eso motiva al resto — y el resto te motivará a ti cuando llegues a €1.000/mes." },
  { n: "06", title: "Escalas con las calls mensuales", desc: "En la call grupal expones tu situación. Loian te da el siguiente paso exacto. Sin respuestas genéricas." },
];

const Steps = () => {
  return (
    <section className="px-4 sm:px-6 py-20 max-w-3xl mx-auto bg-white">
      <div className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0a0a0a] text-balance">
          El camino desde el día uno
        </h2>
      </div>

      <div className="relative pl-14 sm:pl-20">
        <div className="absolute left-4 sm:left-6 top-2 bottom-2 w-0.5 bg-[#e31c1c]" />
        <div className="space-y-10">
          {steps.map((s) => (
            <div key={s.n} className="relative">
              <div className="absolute -left-14 sm:-left-20 top-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#e31c1c] text-white flex items-center justify-center font-bold text-xs sm:text-sm">
                {s.n}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#0a0a0a]">
                {s.n} · {s.title}
              </h3>
              <p className="mt-2 text-[#6b7280] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
