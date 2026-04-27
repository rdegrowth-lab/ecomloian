import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export type BudgetTag = "downsell" | "base" | "anual" | "llamada";

type Props = {
  onBack: () => void;
  onComplete: (data: { name: string; budget: BudgetTag }) => void;
  initialPlan?: "base" | "anual" | null;
};

const WEBHOOK_URL =
  "https://automatizacion.zonnet.es/webhook/66c1932f-6140-4473-91d3-d1b63de5b0a0";
const STORAGE_KEY = "ecom_loian_form_progress";

const problemOptions = [
  "No tengo un proceso claro de ventas",
  "Tengo tráfico pero no convierte",
  "Mis ofertas no son irresistibles",
  "Escalar, pero sin saber cómo",
  "No sé por dónde empezar",
];

const capitalOptions: { label: string; tag: BudgetTag }[] = [
  { label: "Menos de 50€ (versión light)", tag: "downsell" },
  { label: "Entre 200 y 500€ (solución media)", tag: "base" },
  { label: "Entre 500€ y 2000€ (solución premium + mentoring)", tag: "anual" },
  { label: "Sin presupuesto ahora (solo info)", tag: "downsell" },
];

const TOTAL_STEPS = 5;

const Apply = ({ onBack, onComplete }: Props) => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [problem, setProblem] = useState<string | null>(null);
  const [capital, setCapital] = useState<{ label: string; tag: BudgetTag } | null>(null);
  const [urgency, setUrgency] = useState(7);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Load saved progress
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const d = JSON.parse(raw);
        if (d.name) setName(d.name);
        if (d.email) setEmail(d.email);
        if (d.problem) setProblem(d.problem);
        if (d.capital) setCapital(d.capital);
        if (typeof d.urgency === "number") setUrgency(d.urgency);
      }
    } catch {
      /* ignore */
    }
  }, []);

  // Save on changes
  useEffect(() => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ name, email, problem, capital, urgency })
      );
    } catch {
      /* ignore */
    }
  }, [name, email, problem, capital, urgency]);

  const next = () => setStep((s) => Math.min(TOTAL_STEPS + 1, s + 1));

  const sendToWebhook = async () => {
    const payload = {
      nombre: name.trim(),
      contacto: email.trim(),
      problema: problem,
      capital: capital?.label ?? null,
      urgencia: urgency,
      timestamp: new Date().toISOString(),
      fuente: "typeform_loian",
    };

    const res = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      mode: "no-cors",
    });
    return res;
  };

  const submit = async () => {
    setError(null);
    setSubmitting(true);
    setStep(6);
    try {
      await sendToWebhook();
      await new Promise((r) => setTimeout(r, 1200));
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch {
        /* ignore */
      }
      onComplete({ name: name.trim(), budget: capital!.tag });
    } catch (e) {
      console.error("Webhook error", e);
      setError("Parece que hubo un error. Intenta de nuevo.");
      setStep(5);
    } finally {
      setSubmitting(false);
    }
  };

  const progress = (Math.min(step, TOTAL_STEPS) / TOTAL_STEPS) * 100;

  const variants = {
    enter: { opacity: 0, x: 40 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -40 },
  };

  const validEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

  const canNext1 = name.trim().length >= 3;
  const canNext2 = validEmail(email);
  const canNext3 = !!problem;
  const canNext4 = !!capital;
  const canSubmit = urgency >= 1 && urgency <= 10;

  return (
    <div className="relative min-h-screen bg-brand-black flex flex-col font-sans overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-grid-soft pointer-events-none opacity-50" />

      {/* Header */}
      <header className="relative z-10 border-b border-brand-border px-4 sm:px-6 py-4 flex items-center justify-between bg-brand-black/80 backdrop-blur">
        <a href="#" className="font-extrabold text-lg">
          <span className="text-[#f0f0f0]">ECOM</span>
          <span className="text-[#e31c1c]"> LOIAN</span>
        </a>
        <button
          onClick={onBack}
          className="text-sm text-brand-subtle hover:text-[#f0f0f0] transition"
        >
          ← Volver
        </button>
      </header>

      {/* Progress bar */}
      <div className="relative z-10 h-1 bg-brand-surface">
        <div
          className="h-full bg-[#e31c1c] transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-12">
        <div className="w-full max-w-xl relative overflow-hidden">
          <AnimatePresence mode="wait">
            {/* STEP 1 - NAME */}
            {step === 1 && (
              <motion.div
                key="s1"
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div>
                  <p className="text-sm text-[#e31c1c] font-semibold mb-2">1 → 5</p>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#f0f0f0]">
                    ¿Cuál es tu nombre?
                  </h2>
                </div>
                <input
                  type="text"
                  autoFocus
                  placeholder="Tu nombre completo"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && canNext1 && next()}
                  className="w-full border-b-2 border-brand-border bg-transparent text-2xl py-3 focus:outline-none focus:border-[#e31c1c] transition"
                />
                <button
                  disabled={!canNext1}
                  onClick={next}
                  className="bg-[#e31c1c] text-white font-bold py-3 px-8 rounded-lg disabled:opacity-40 hover:brightness-90 transition"
                >
                  Siguiente →
                </button>
              </motion.div>
            )}

            {/* STEP 2 - EMAIL */}
            {step === 2 && (
              <motion.div
                key="s2"
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div>
                  <p className="text-sm text-[#e31c1c] font-semibold mb-2">2 → 5</p>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#f0f0f0]">
                    ¿Cuál es tu email?
                  </h2>
                  <p className="mt-2 text-sm text-brand-subtle">
                    Te contactaremos aquí con los siguientes pasos.
                  </p>
                </div>

                <input
                  type="email"
                  autoFocus
                  placeholder="tu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && canNext2 && next()}
                  className="w-full border-b-2 border-brand-border bg-transparent text-2xl py-3 focus:outline-none focus:border-[#e31c1c] transition"
                />

                <button
                  disabled={!canNext2}
                  onClick={next}
                  className="bg-[#e31c1c] text-white font-bold py-3 px-8 rounded-lg disabled:opacity-40 hover:brightness-90 transition"
                >
                  Siguiente →
                </button>
              </motion.div>
            )}

            {/* STEP 3 - PROBLEM */}
            {step === 3 && (
              <motion.div
                key="s3"
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div>
                  <p className="text-sm text-[#e31c1c] font-semibold mb-2">3 → 5</p>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#f0f0f0]">
                    ¿Cuál es tu mayor reto AHORA?
                  </h2>
                </div>
                <div className="space-y-2">
                  {problemOptions.map((p, i) => (
                    <button
                      key={p}
                      onClick={() => {
                        setProblem(p);
                        setTimeout(next, 250);
                      }}
                      className={`w-full text-left border-2 rounded-lg px-4 py-4 transition flex items-center gap-3 ${
                        problem === p
                          ? "border-[#e31c1c] bg-brand-red/10"
                          : "border-brand-border bg-brand-black hover:border-brand-red/60"
                      }`}
                    >
                      <span className="w-6 h-6 rounded border border-brand-border flex items-center justify-center text-xs font-bold text-brand-subtle">
                        {String.fromCharCode(65 + i)}
                      </span>
                      <span className="text-[#f0f0f0]">{p}</span>
                    </button>
                  ))}
                </div>
                <button
                  disabled={!canNext3}
                  onClick={next}
                  className="bg-[#e31c1c] text-white font-bold py-3 px-8 rounded-lg disabled:opacity-40 hover:brightness-90 transition"
                >
                  Siguiente →
                </button>
              </motion.div>
            )}

            {/* STEP 4 - CAPITAL */}
            {step === 4 && (
              <motion.div
                key="s4"
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div>
                  <p className="text-sm text-[#e31c1c] font-semibold mb-2">4 → 5</p>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#f0f0f0]">
                    ¿Cuánto capital estás dispuesto a invertir en solucionar esto?
                  </h2>
                </div>
                <div className="space-y-2">
                  {capitalOptions.map((c, i) => (
                    <button
                      key={c.label}
                      onClick={() => {
                        setCapital(c);
                        setTimeout(next, 250);
                      }}
                      className={`w-full text-left border-2 rounded-lg px-4 py-4 transition flex items-center gap-3 ${
                        capital?.label === c.label
                          ? "border-[#e31c1c] bg-brand-red/10"
                          : "border-brand-border bg-brand-black hover:border-brand-red/60"
                      }`}
                    >
                      <span className="w-6 h-6 rounded border border-brand-border flex items-center justify-center text-xs font-bold text-brand-subtle">
                        {i + 1}
                      </span>
                      <span className="text-[#f0f0f0]">{c.label}</span>
                    </button>
                  ))}
                </div>
                <button
                  disabled={!canNext4}
                  onClick={next}
                  className="bg-[#e31c1c] text-white font-bold py-3 px-8 rounded-lg disabled:opacity-40 hover:brightness-90 transition"
                >
                  Siguiente →
                </button>
              </motion.div>
            )}

            {/* STEP 5 - URGENCY SLIDER */}
            {step === 5 && (
              <motion.div
                key="s5"
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <div>
                  <p className="text-sm text-[#e31c1c] font-semibold mb-2">5 → 5</p>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#f0f0f0]">
                    ¿Qué tan urgente es resolver esto?
                  </h2>
                </div>

                <div className="text-center">
                  <div className="text-7xl font-extrabold text-[#e31c1c] mb-2">
                    {urgency}
                  </div>
                  <p className="text-sm text-brand-subtle">de 10</p>
                </div>

                <div className="px-2">
                  <input
                    type="range"
                    min={1}
                    max={10}
                    step={1}
                    value={urgency}
                    onChange={(e) => setUrgency(parseInt(e.target.value, 10))}
                    className="w-full accent-[#e31c1c]"
                  />
                  <div className="flex justify-between text-xs text-brand-subtle mt-2">
                    <span>1 — Puedo esperar</span>
                    <span>10 — Lo necesito ASAP</span>
                  </div>
                </div>

                {error && (
                  <p className="text-sm text-[#e31c1c] text-center">{error}</p>
                )}

                <button
                  disabled={!canSubmit || submitting}
                  onClick={submit}
                  className="w-full bg-[#e31c1c] text-white font-bold py-4 rounded-lg disabled:opacity-40 hover:brightness-90 transition text-lg"
                >
                  {error ? "Reintentar" : "Enviar →"}
                </button>
              </motion.div>
            )}

            {/* STEP 6 - LOADING */}
            {step === 6 && (
              <motion.div
                key="s6"
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3 }}
                className="text-center py-16"
              >
                <div className="w-12 h-12 mx-auto border-4 border-brand-border border-t-[#e31c1c] rounded-full animate-spin" />
                <p className="mt-6 text-[#f0f0f0] font-medium text-lg">
                  Enviando tu aplicación…
                </p>
                <p className="mt-2 text-sm text-brand-subtle">
                  Datos recibidos correctamente
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <p className="mt-12 text-xs text-brand-subtle">
          Paso {Math.min(step, TOTAL_STEPS)} de {TOTAL_STEPS}
        </p>
      </div>
    </div>
  );
};

export default Apply;
