import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
  {
    q: "¿Qué pasa si me doy de baja?",
    a: "Pierdes el acceso inmediatamente a todo. Si vuelves, entras al precio vigente, que puede ser mayor.",
  },
  {
    q: "¿Es para mí si no he vendido nada nunca?",
    a: "Sí. El módulo 1 empieza desde cero. Si ya vendes, saltas directamente al módulo que necesites.",
  },
  {
    q: "¿Qué diferencia hay entre los dos planes?",
    a: "El base da acceso a toda la formación y la comunidad. El anual añade las calls grupales con Loian.",
  },
  {
    q: "¿Cuándo son las calls grupales?",
    a: "Una vez al mes, en directo. Se graban y las grabaciones quedan en la comunidad. Solo plan anual.",
  },
  {
    q: "¿Los proveedores son de España?",
    a: "La lista incluye proveedores españoles y europeos. Algunos permiten pago contra reembolso.",
  },
  {
    q: "¿Por qué no puedo comprar directamente?",
    a: "Queremos asegurarnos de que la comunidad encaja contigo. El formulario tarda 2 minutos.",
  },
  {
    q: "¿Hay garantía?",
    a: "Sí. Si en los primeros 7 días no ves el valor, te devolvemos el dinero sin preguntas.",
  },
];

const Faq = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="px-4 sm:px-6 py-20 max-w-3xl mx-auto bg-white">
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0a0a0a] text-center mb-10">
        Preguntas frecuentes
      </h2>
      <div className="divide-y divide-[#e5e7eb] border-y border-[#e5e7eb]">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q}>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full flex items-center justify-between gap-4 py-5 text-left"
                aria-expanded={isOpen}
              >
                <span className="text-base sm:text-lg font-semibold text-[#0a0a0a]">{f.q}</span>
                <span
                  className="text-[#e31c1c] text-2xl font-light shrink-0 transition-transform duration-300"
                  style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                >
                  +
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pb-6 text-[#6b7280] leading-relaxed">{f.a}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Faq;
