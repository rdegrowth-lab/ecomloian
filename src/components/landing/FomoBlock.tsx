const items = [
  "Acceso inmediato a todos los proveedores verificados",
  'La sección "Ofertas del día" — chollos que no están en ningún sitio más',
  "Todas las grabaciones de las calls grupales anteriores",
  "Tu posición en la bolsa de trabajo interna",
  "El contexto de la comunidad — conversaciones que llevan semanas",
  "El precio bloqueado (si cancelas, vuelves a precio nuevo)",
];

const FomoBlock = () => {
  return (
    <section className="px-4 sm:px-6 py-16 max-w-4xl mx-auto">
      <div className="bg-[hsl(var(--brand-bg))] border-l-4 border-primary p-8 sm:p-12 rounded-r-xl shadow-[0_0_60px_hsl(var(--primary)/0.05)]">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">¿Qué pierdes si te sales?</h2>

        <ul className="mt-7 space-y-3">
          {items.map((it) => (
            <li key={it} className="flex items-start gap-3 text-[hsl(var(--brand-muted))]">
              <span className="text-primary font-bold mt-0.5">→</span>
              <span className="text-white/90">{it}</span>
            </li>
          ))}
        </ul>

        <p className="mt-8 italic text-[hsl(var(--brand-muted))] text-sm sm:text-base">
          "Los que más aprovechan la comunidad son los que llevan más tiempo. El valor crece cada
          mes que estás dentro."
        </p>
      </div>
    </section>
  );
};

export default FomoBlock;
