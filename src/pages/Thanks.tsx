import type { BudgetTag } from "./Apply";

type Props = { tag: BudgetTag; onBack: () => void };

const Thanks = ({ tag, onBack }: Props) => {
  const showCalendly = tag === "llamada" || tag === "anual";

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="border-b border-[#e5e7eb] px-4 sm:px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-extrabold text-lg">
          <span className="text-[#0a0a0a]">ECOM</span>
          <span className="text-[#e31c1c]"> LOIAN</span>
        </a>
        <button onClick={onBack} className="text-sm text-[#6b7280] hover:text-[#0a0a0a] transition">
          ← Volver al inicio
        </button>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 py-16">
        <div className="w-full max-w-2xl text-center">
          {showCalendly && (
            <>
              <h1 className="text-3xl sm:text-4xl font-bold text-[#0a0a0a] tracking-tight">
                ¡Tu aplicación ha sido aceptada 🎉
              </h1>
              <p className="mt-4 text-[#6b7280] text-lg">
                El siguiente paso es una llamada rápida de 15 minutos con Loian para resolver tus
                dudas y darte acceso.
              </p>
              <div className="mt-10 border-2 border-dashed border-[#e31c1c] rounded-xl p-12 bg-[#fff5f5]">
                <p className="text-[#e31c1c] font-bold text-lg">
                  [ Calendly embed aquí — pega tu link ]
                </p>
                <p className="mt-2 text-sm text-[#6b7280]">
                  Sustituye este placeholder por un &lt;iframe&gt; de Calendly
                </p>
              </div>
            </>
          )}

          {tag === "base" && (
            <>
              <h1 className="text-3xl sm:text-4xl font-bold text-[#0a0a0a] tracking-tight">
                Perfecto — te orientamos al plan base
              </h1>
              <p className="mt-4 text-[#6b7280] text-lg">
                Acceso inmediato a la formación y la comunidad. Cuando estés listo, puedes subir al
                anual desde dentro.
              </p>
              <a
                href="#"
                className="inline-block mt-10 bg-[#e31c1c] text-white font-bold text-lg px-8 py-4 rounded-lg hover:brightness-90 transition"
              >
                Acceder al plan base →
              </a>
            </>
          )}

          {tag === "downsell" && (
            <>
              <h1 className="text-3xl sm:text-4xl font-bold text-[#0a0a0a] tracking-tight">
                Tenemos algo para ti antes
              </h1>
              <p className="mt-4 text-[#6b7280] text-lg">
                Antes de entrar a la comunidad, empieza con nuestro pack de proveedores. Es el
                primer paso.
              </p>
              <a
                href="#"
                className="inline-block mt-10 bg-[#e31c1c] text-white font-bold text-lg px-8 py-4 rounded-lg hover:brightness-90 transition"
              >
                Ver el Pack de Proveedores →
              </a>
              <p className="mt-6 text-sm text-[#6b7280]">
                Cuando estés generando tus primeras ventas, la comunidad te estará esperando.
              </p>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Thanks;
