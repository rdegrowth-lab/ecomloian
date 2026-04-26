const items = [
  "Formación en 6 módulos",
  "Proveedores verificados",
  "Calls grupales mensuales",
  "Comunidad privada",
  "Bolsa de trabajo interna",
  "Ofertas exclusivas del día",
  "Sin letra pequeña",
  "Soporte entre miembros",
  "Actualizaciones constantes",
  "Solo para los que ejecutan",
];

const Ticker = () => {
  const loop = [...items, ...items];
  return (
    <div className="w-full bg-[#0a0a0a] overflow-hidden py-4">
      <div className="marquee-track">
        {loop.map((item, i) => (
          <div key={i} className="flex items-center px-6 whitespace-nowrap text-sm font-medium text-white">
            {item}
            <span className="text-[#e31c1c] mx-6">·</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
