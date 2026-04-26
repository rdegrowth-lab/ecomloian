import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
  { q: "¿Qué pasa si me doy de baja?", a: "Pierdes el acceso inmediatamente a todo: formación, proveedores, comunidad y la sección de ofertas. Si quieres volver, entras al precio vigente en ese momento." },
  { q: "¿Es para mí si no he vendido nada nunca?", a: "Sí. El módulo 1 empieza desde cero absoluto. Pero si ya estás vendiendo, saltas directamente al módulo que necesites." },
  { q: "¿Qué diferencia hay entre los dos planes?", a: "El base da acceso a toda la formación y la comunidad. El anual añade las calls grupales mensuales con Loian, donde puedes exponer tu situación directamente." },
  { q: "¿Los proveedores son fiables?", a: "Loian los usa personalmente. Son proveedores verificados con pedidos reales hechos. La lista se actualiza cuando aparecen proveedores nuevos o se descarta alguno." },
  { q: "¿Puedo cambiar de plan más adelante?", a: "Sí. Si empiezas en base y quieres subir al anual, puedes hacerlo. Se descuenta lo ya pagado proporcionalmente." },
  { q: "¿Por qué no puedo comprar directamente?", a: "Porque queremos asegurarnos de que la comunidad encaja contigo y tú con ella. El formulario tarda 2 minutos y te orienta al mejor plan para tu situación." },
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
