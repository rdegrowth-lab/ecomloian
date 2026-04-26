const items = [
  "Formación completa en módulos",
  "Proveedores verificados",
  "Comunidad privada",
  "Calls grupales",
  "Bolsa de trabajo interna",
  "Actualizaciones semanales",
  "Victorias en tiempo real",
  "Soporte entre miembros",
  "Sin letra pequeña",
  "Acceso inmediato",
];

const Ticker = () => {
  const loop = [...items, ...items];
  return (
    <div className="w-full bg-card border-y border-border overflow-hidden py-4">
      <div className="marquee-track">
        {loop.map((item, i) => (
          <div key={i} className="flex items-center px-6 whitespace-nowrap text-sm font-medium text-white">
            {item}
            <span className="text-primary mx-6">·</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
