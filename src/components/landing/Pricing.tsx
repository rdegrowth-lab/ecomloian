import { Check } from "lucide-react";

type Props = { onApply: (plan?: "base" | "anual") => void };

const baseFeatures = [
  "Formación completa en 6 módulos",
  "Lista de proveedores verificados",
  "Acceso a la comunidad privada",
  'Sección "Ofertas del día"',
  "Bolsa de trabajo interna",
  "Soporte entre miembros",
];

const proFeatures = [
  "Todo lo del plan base",
  "Calls grupales mensuales en directo con Loian",
  "Grabaciones de todas las calls anteriores",
  "Feedback directo de Loian en la comunidad",
  "Acceso prioritario a novedades y proveedores nuevos",
  "Precio bloqueado de por vida",
];

const Pricing = ({ onApply }: Props) => {
  return (
    <section id="pricing" className="px-4 sm:px-6 py-20 max-w-5xl mx-auto bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0a0a0a]">
          Elige tu acceso
        </h2>
        <p className="mt-3 text-[#6b7280] max-w-xl mx-auto">
          El precio está garantizado mientras mantengas tu plaza. Si cancelas, vuelves al precio
          vigente.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-[800px] mx-auto">
        {/* Base */}
        <div className="bg-[#f5f5f5] border border-[#e5e7eb] border-t-4 border-t-[#0a0a0a] rounded-xl p-7 flex flex-col">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0a0a0a]">
            Acceso base
          </span>
          <h3 className="mt-4 text-xl font-bold text-[#0a0a0a]">Comunidad + Formación</h3>
          <div className="mt-5">
            <span className="text-5xl font-extrabold text-[#0a0a0a]">€297</span>
            <span className="text-[#6b7280]"> / trimestre</span>
            <p className="text-sm text-[#6b7280] mt-1">≈ €99/mes · cancela cuando quieras</p>
          </div>
          <ul className="mt-6 space-y-3 flex-1">
            {baseFeatures.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-[#0a0a0a]">
                <Check className="w-4 h-4 text-[#e31c1c] mt-0.5 shrink-0" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <button
            onClick={() => onApply("base")}
            className="mt-7 w-full bg-[#0a0a0a] hover:bg-[#333] text-white font-semibold py-3 rounded-lg transition"
          >
            Aplicar al acceso base →
          </button>
        </div>

        {/* Featured */}
        <div className="relative bg-white border-2 border-[#e31c1c] rounded-xl p-7 flex flex-col">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#e31c1c] text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
            ⭐ MÁS COMPLETO
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#e31c1c]">
            Sistema anual con calls
          </span>
          <h3 className="mt-4 text-xl font-bold text-[#0a0a0a]">Comunidad + Calls con Loian</h3>
          <div className="mt-5">
            <div className="flex items-baseline gap-3 flex-wrap">
              <span className="text-[#6b7280] line-through text-lg">€1.200/año</span>
              <span className="text-5xl font-extrabold text-[#e31c1c]">€997</span>
              <span className="text-[#6b7280]">/ año</span>
            </div>
            <p className="text-sm text-green-600 font-medium mt-1">
              Ahorras €203 vs pago trimestral
            </p>
          </div>
          <ul className="mt-6 space-y-3 flex-1">
            {proFeatures.map((f, i) => (
              <li key={f} className="flex items-start gap-2 text-sm text-[#0a0a0a]">
                <Check className="w-4 h-4 text-[#e31c1c] mt-0.5 shrink-0" />
                <span className={i === 1 || i === 5 ? "font-semibold" : ""}>{f}</span>
              </li>
            ))}
          </ul>
          <button
            onClick={() => onApply("anual")}
            className="mt-7 w-full bg-[#e31c1c] hover:brightness-90 text-white font-bold py-4 rounded-lg text-base transition"
          >
            Aplicar al plan anual →
          </button>
          <p className="mt-3 text-xs text-center text-[#6b7280]">
            🔒 Plazas limitadas en este lanzamiento
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
