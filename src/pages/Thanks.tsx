import type { BudgetTag } from "./Apply";

type Props = { tag: BudgetTag; name: string; onBack: () => void };

// 🔧 Reemplaza este link por tu grupo real de WhatsApp o tu wa.me directo
const WHATSAPP_LINK = "https://chat.whatsapp.com/REEMPLAZA_CON_TU_CODIGO";

const Thanks = ({ name, onBack }: Props) => {
  const friendlyName = name?.split(" ")[0] || "amigo";

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <header className="border-b border-[#e5e7eb] px-4 sm:px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-extrabold text-lg">
          <span className="text-[#0a0a0a]">ECOM</span>
          <span className="text-[#e31c1c]"> LOIAN</span>
        </a>
        <button
          onClick={onBack}
          className="text-sm text-[#6b7280] hover:text-[#0a0a0a] transition"
        >
          ← Volver al inicio
        </button>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 py-16">
        <div className="w-full max-w-xl text-center">
          <div className="text-5xl mb-4">🎉</div>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#0a0a0a] tracking-tight">
            ¡Perfecto, {friendlyName}!
          </h1>
          <p className="mt-4 text-[#6b7280] text-lg">
            Accede a la comunidad de prelanzamiento.
          </p>
          <p className="mt-2 text-[#6b7280]">
            Te esperamos en WhatsApp. Allí te compartimos acceso inmediato a la comunidad.
          </p>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 mt-10 bg-[#e31c1c] text-white font-bold text-lg px-8 py-4 rounded-lg hover:brightness-90 transition shadow-lg"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-6 h-6 fill-current"
              aria-hidden="true"
            >
              <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.414c-.003 6.555-5.338 11.89-11.893 11.89a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.59 5.319l-.999 3.648 3.898-1.666z" />
            </svg>
            Entrar a la comunidad
          </a>

          <p className="mt-6 text-xs text-[#6b7280]">
            Si no se abre, copia y pega esto en tu navegador:
          </p>
          <p className="mt-1 text-xs text-[#6b7280] break-all font-mono">
            {WHATSAPP_LINK}
          </p>
        </div>
      </main>
    </div>
  );
};

export default Thanks;
