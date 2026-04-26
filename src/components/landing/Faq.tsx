import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { q: "¿Qué pasa si me doy de baja?", a: "Pierdes el acceso inmediatamente a todo: formación, proveedores, comunidad y sección de ofertas. Si vuelves, entras al precio vigente en ese momento, que puede ser mayor." },
  { q: "¿Tengo que saber de reventa para entrar?", a: "No. El Módulo 1 empieza desde cero absoluto. Pero si ya vendes, saltas directamente al módulo que necesites." },
  { q: "¿Qué diferencia hay entre los dos planes?", a: "El plan base da acceso a toda la formación y la comunidad. El plan anual añade las calls grupales mensuales con Loian, donde puedes exponer tu caso directamente y recibir feedback." },
  { q: "¿Cuándo son las calls grupales?", a: "Una vez al mes, en directo. Se graban y las grabaciones quedan en la comunidad para siempre. Solo para miembros del plan anual." },
  { q: "¿Los proveedores son de España?", a: "La lista incluye proveedores españoles y europeos. Algunos tienen envío contra reembolso. La lista se actualiza cuando Loian encuentra nuevos proveedores verificados." },
  { q: "¿Puedo cambiar de plan?", a: "Sí. Si empiezas con el plan trimestral y quieres subir al anual, puedes hacerlo en cualquier momento. Te descontamos lo ya pagado." },
  { q: "¿Hay garantía?", a: "Sí. Si en los primeros 7 días no ves el valor, te devolvemos el dinero sin preguntas." },
];

const Faq = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="px-4 sm:px-6 py-20 max-w-3xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-10">
        Preguntas frecuentes
      </h2>
      <div className="divide-y divide-border border-y border-border">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q}>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full flex items-center justify-between gap-4 py-5 text-left"
                aria-expanded={isOpen}
              >
                <span className="text-base sm:text-lg font-semibold text-white">{f.q}</span>
                {isOpen ? (
                  <Minus className="w-5 h-5 text-primary shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-primary shrink-0" />
                )}
              </button>
              {isOpen && (
                <div className="pb-6 text-[hsl(var(--brand-muted))] leading-relaxed animate-fade-in">
                  {f.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Faq;
