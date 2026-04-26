const items = [
  "Acceso a todos los proveedores verificados (actualizados constantemente)",
  'La sección "Ofertas del día" — chollos que no están en ningún otro sitio',
  "Todas las grabaciones de las calls grupales anteriores",
  "Tu posición y reputación en la bolsa de trabajo interna",
  "El contexto de la comunidad — conversaciones que llevan semanas",
  "El precio actual bloqueado (si cancelas, vuelves al precio vigente)",
];

const FomoBlock = () => {
  return (
    <section className="bg-[#0a0a0a] py-16 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-[32px] font-bold text-white tracking-tight">
          ¿Qué pierdes si cancelas?
        </h2>
        <p className="mt-3 text-lg font-medium text-[#e31c1c]">
          El valor dentro crece cada semana. Quien sale, sale en el peor momento.
        </p>

        <ul className="mt-10 space-y-4 text-left max-w-2xl mx-auto">
          {items.map((it) => (
            <li key={it} className="flex items-start gap-3 text-white">
              <span className="text-[#e31c1c] font-bold mt-0.5 shrink-0">→</span>
              <span>{it}</span>
            </li>
          ))}
        </ul>

        <p className="mt-10 italic text-sm text-gray-400">
          "Los miembros que más resultados tienen llevan más tiempo dentro. No es casualidad."
        </p>
      </div>
    </section>
  );
};

export default FomoBlock;
