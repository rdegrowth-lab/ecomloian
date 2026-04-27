const items = [
  "+340 revendedores activos",
  "Casos de éxito: €3.200/mes en 60 días",
  "Sistema aplicado en +15 nichos",
  "Mentoría grupal semanal en vivo",
  "Comunidad privada en Skool",
  "Downsell automático — nunca pierdes un lead",
];

const Ticker = () => {
  const loop = [...items, ...items, ...items];
  return (
    <div className="w-full bg-brand-red overflow-hidden py-3 border-y border-brand-red-dim">
      <div className="marquee-track">
        {loop.map((item, i) => (
          <div key={i} className="flex items-center px-6 whitespace-nowrap font-display text-[14px] tracking-[0.08em] text-white">
            {item}
            <span className="text-white/60 mx-6">·</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
