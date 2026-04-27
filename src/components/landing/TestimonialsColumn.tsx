"use client";
import { motion } from "framer-motion";

export type Testimonial = {
  name: string;
  role: string;
  image: string;
  text: string;
  stars: number;
};

type Props = {
  testimonials: Testimonial[];
  duration?: number;
  className?: string;
};

const TestimonialsColumn = ({ testimonials, duration = 25, className = "" }: Props) => {
  return (
    <div className={`relative max-h-[700px] overflow-hidden ${className}`}>
      <div
        className="pointer-events-none absolute top-0 left-0 right-0 h-16 z-10"
        style={{ background: "linear-gradient(to bottom, #080808, transparent)" }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 z-10"
        style={{ background: "linear-gradient(to top, #080808, transparent)" }}
      />
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{ duration, repeat: Infinity, ease: "linear", repeatType: "loop" }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...new Array(2)].fill(0).map((_, idx) => (
          <div key={idx} className="flex flex-col gap-6">
            {testimonials.map((t, i) => (
              <article
                key={`${idx}-${i}`}
                className="bg-brand-surface border border-brand-border rounded-md p-5"
              >
                <div className="text-[#facc15] text-sm tracking-tight">
                  {"★".repeat(t.stars)}
                </div>
                <p className="mt-3 text-sm text-[#f0f0f0] leading-relaxed">{t.text}</p>
                <div className="mt-4 flex items-center gap-3">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover bg-brand-dark"
                  />
                  <div className="leading-tight">
                    <p className="font-bold text-sm text-[#f0f0f0]">{t.name}</p>
                    <p className="text-xs text-brand-red font-semibold">{t.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default TestimonialsColumn;
