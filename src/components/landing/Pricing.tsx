import { Check } from "lucide-react";

const baseFeatures = [
  "Formación completa en 6 módulos",
  "Acceso a la comunidad privada",
  "Lista de proveedores verificados",
  "Feed de miembros y soporte",
  'Sección "Ofertas del día"',
  "Bolsa de trabajo interna",
];

const proFeatures = [
  "Todo lo del plan base",
  "Calls grupales mensuales con Loian",
  "Grabaciones de todas las calls anteriores",
  "Retroalimentación directa de Loian",
  "Acceso prioritario a novedades",
  "Precio bloqueado de por vida",
];

const Pricing = () => {
  return (
    <section id="pricing" className="px-4 sm:px-6 py-20 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Elige tu acceso</h2>
        <p className="mt-3 text-[hsl(var(--brand-muted))] max-w-xl mx-auto">
          Sin contratos. El precio actual está garantizado mientras mantengas tu plaza activa.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Base */}
        <div className="bg-card border border-border rounded-2xl p-7 flex flex-col">
          <span className="text-xs font-bold uppercase tracking-wider text-[hsl(var(--brand-muted))]">
            Acceso base
          </span>
          <h3 className="mt-4 text-xl font-bold text-white">Comunidad + Formación</h3>
          <div className="mt-5">
            <span className="text-5xl font-extrabold text-white">€297</span>
            <span className="text-[hsl(var(--brand-muted))]"> / trimestre</span>
            <p className="text-sm text-[hsl(var(--brand-muted))] mt-1">o €99/mes · Cancela cuando quieras</p>
          </div>
          <ul className="mt-6 space-y-3 flex-1">
            {baseFeatures.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-white/90">
                <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <button className="mt-7 w-full bg-primary text-primary-foreground font-semibold py-3 rounded-lg hover:brightness-90 transition">
            Empezar ahora →
          </button>
        </div>

        {/* Featured */}
        <div className="relative bg-card border-2 border-primary rounded-2xl p-7 flex flex-col shadow-[0_0_60px_hsl(var(--primary)/0.15)]">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
            ⭐ MÁS POPULAR
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            Sistema completo anual
          </span>
          <h3 className="mt-4 text-xl font-bold text-white">Comunidad + Calls con Loian</h3>
          <div className="mt-5">
            <div className="flex items-baseline gap-3">
              <span className="text-[hsl(var(--brand-muted))] line-through text-lg">€1.200</span>
              <span className="text-5xl font-extrabold text-white">€997</span>
              <span className="text-[hsl(var(--brand-muted))]"> / año</span>
            </div>
            <p className="text-sm text-[hsl(var(--brand-muted))] mt-1">Ahorras €203 vs pago trimestral</p>
          </div>
          <ul className="mt-6 space-y-3 flex-1">
            {proFeatures.map((f, i) => (
              <li key={f} className="flex items-start gap-2 text-sm text-white/90">
                <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className={i === 1 || i === 5 ? "font-semibold" : ""}>{f}</span>
              </li>
            ))}
          </ul>
          <button className="mt-7 w-full bg-primary text-primary-foreground font-bold py-4 rounded-lg text-base hover:brightness-90 transition">
            Reservar mi plaza →
          </button>
          <p className="mt-3 text-xs text-center text-[hsl(var(--brand-muted))]">
            🔒 Solo quedan plazas limitadas este mes
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
