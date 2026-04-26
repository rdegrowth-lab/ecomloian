import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export type BudgetTag = "downsell" | "base" | "anual" | "llamada";

type Props = {
  onBack: () => void;
  onComplete: (tag: BudgetTag) => void;
  initialPlan?: "base" | "anual" | null;
};

const situations = [
  "Nunca he vendido nada online",
  "He vendido alguna vez pero sin sistema",
  "Ya vendo de forma regular y quiero escalar",
  "Tengo tienda montada pero me falta formación",
];

const budgets: { label: string; tag: BudgetTag }[] = [
  { label: "Menos de €100", tag: "downsell" },
  { label: "€100–€300", tag: "base" },
  { label: "€300–€1.000", tag: "anual" },
  { label: "Más de €1.000", tag: "llamada" },
];

const TOTAL_STEPS = 4;

const Apply = ({ onBack, onComplete, initialPlan }: Props) => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [situation, setSituation] = useState<string | null>(null);
  const [budget, setBudget] = useState<BudgetTag | null>(
    initialPlan === "anual" ? "anual" : initialPlan === "base" ? "base" : null
  );

  const next = () => setStep((s) => Math.min(TOTAL_STEPS, s + 1));

  const submit = () => {
    setStep(4);
    setTimeout(() => {
      if (budget) onComplete(budget);
    }, 1500);
  };

  const progress = (step / TOTAL_STEPS) * 100;

  const variants = {
    enter: { opacity: 0, x: 40 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -40 },
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="border-b border-[#e5e7eb] px-4 sm:px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-extrabold text-lg">
          <span className="text-[#0a0a0a]">ECOM</span>
          <span className="text-[#e31c1c]"> LOIAN</span>
        </a>
        <button
          onClick={onBack}
          className="text-sm text-[#6b7280] hover:text-[#0a0a0a] transition"
        >
          ← Volver
        </button>
      </header>

      {/* Progress bar */}
      <div className="h-1 bg-[#f5f5f5]">
        <div
          className="h-full bg-[#e31c1c] transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-12">
        <div className="w-full max-w-xl text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0a0a0a]">
            Antes de entrar, cuéntanos un poco
          </h1>
          <p className="mt-3 text-[#6b7280]">
            Este formulario nos ayuda a orientarte al plan que más encaja con tu situación. Tarda 2
            minutos.
          </p>
        </div>

        <div className="w-full max-w-xl relative overflow-hidden">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="s1"
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <h2 className="text-xl font-bold text-[#0a0a0a]">
                  ¿Cómo te llamas y de dónde eres?
                </h2>
                <input
                  type="text"
                  placeholder="Nombre completo"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-[#e5e7eb] rounded-lg px-4 py-3 focus:outline-none focus:border-[#e31c1c]"
                />
                <input
                  type="text"
                  placeholder="Ciudad y país"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full border border-[#e5e7eb] rounded-lg px-4 py-3 focus:outline-none focus:border-[#e31c1c]"
                />
                <button
                  disabled={!name.trim() || !city.trim()}
                  onClick={next}
                  className="w-full bg-[#e31c1c] text-white font-bold py-3 rounded-lg disabled:opacity-40 hover:brightness-90 transition"
                >
                  Siguiente →
                </button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="s2"
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3 }}
                className="space-y-3"
              >
                <h2 className="text-xl font-bold text-[#0a0a0a]">
                  ¿Cuál es tu situación actual con la reventa?
                </h2>
                <div className="space-y-2">
                  {situations.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSituation(s)}
                      className={`w-full text-left border rounded-lg px-4 py-3 transition ${
                        situation === s
                          ? "border-[#e31c1c] bg-[#fff5f5]"
                          : "border-[#0a0a0a] bg-white hover:border-[#e31c1c]"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
                <button
                  disabled={!situation}
                  onClick={next}
                  className="w-full bg-[#e31c1c] text-white font-bold py-3 rounded-lg disabled:opacity-40 hover:brightness-90 transition"
                >
                  Siguiente →
                </button>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="s3"
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3 }}
                className="space-y-3"
              >
                <h2 className="text-xl font-bold text-[#0a0a0a]">
                  ¿Con qué presupuesto cuentas para invertir en la comunidad?
                </h2>
                <div className="space-y-2">
                  {budgets.map((b) => (
                    <button
                      key={b.tag}
                      onClick={() => setBudget(b.tag)}
                      className={`w-full text-left border rounded-lg px-4 py-3 transition ${
                        budget === b.tag
                          ? "border-[#e31c1c] bg-[#fff5f5]"
                          : "border-[#0a0a0a] bg-white hover:border-[#e31c1c]"
                      }`}
                    >
                      {b.label}
                    </button>
                  ))}
                </div>
                <button
                  disabled={!budget}
                  onClick={submit}
                  className="w-full bg-[#e31c1c] text-white font-bold py-3 rounded-lg disabled:opacity-40 hover:brightness-90 transition"
                >
                  Enviar aplicación →
                </button>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div
                key="s4"
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3 }}
                className="text-center py-12"
              >
                <div className="w-12 h-12 mx-auto border-4 border-[#e5e7eb] border-t-[#e31c1c] rounded-full animate-spin" />
                <p className="mt-6 text-[#0a0a0a] font-medium">
                  Procesando tu aplicación…
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <p className="mt-8 text-xs text-[#6b7280]">
          Paso {step} de {TOTAL_STEPS}
        </p>
      </div>
    </div>
  );
};

export default Apply;
