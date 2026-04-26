const items = [
  "Acceso a todos los proveedores verificados (actualizados constantemente)",
  'La sección "Ofertas del día" — chollos que no están en ningún otro sitio',
  "Todas las grabaciones de las calls grupales anteriores",
  "Tu posición y reputación en la bolsa de trabajo interna",
  "El precio actual bloqueado — si cancelas, vuelves al precio vigente",
  "El contexto acumulado de la comunidad: semanas de conversaciones",
];

const FomoBlock = () => {
  return (
    <section className="bg-white border-y border-[#e5e7eb] py-16 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl sm:text-[32px] font-bold text-[#0a0a0a] tracking-tight">
          ¿Qué pierdes si cancelas?
        </h2>
        <p className="mt-3 text-base text-[#e31c1c] font-medium">
          El valor dentro crece cada semana. Quien sale, sale en el peor momento.
        </p>

        <ul className="mt-10 space-y-3.5 text-left max-w-[520px] mx-auto">
          {items.map((it) => (
            <li key={it} className="flex items-start gap-3 text-[#0a0a0a]">
              <span className="text-[#e31c1c] font-bold mt-0.5 shrink-0">→</span>
              <span>{it}</span>
            </li>
          ))}
        </ul>

        <p className="mt-8 italic text-sm text-[#6b7280]">
          "Los miembros con más resultados son los que llevan más tiempo dentro. No es casualidad."
        </p>
      </div>
    </section>
  );
};

export default FomoBlock;
