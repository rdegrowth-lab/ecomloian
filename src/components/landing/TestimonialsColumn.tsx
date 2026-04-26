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
        style={{ background: "linear-gradient(to bottom, #ffffff, transparent)" }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 z-10"
        style={{ background: "linear-gradient(to top, #ffffff, transparent)" }}
      />
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...new Array(2)].fill(0).map((_, idx) => (
          <div key={idx} className="flex flex-col gap-6">
            {testimonials.map((t, i) => (
              <article
                key={`${idx}-${i}`}
                className="bg-white border border-[#e5e7eb] shadow-md rounded-2xl p-5"
              >
                <div className="text-[#facc15] text-sm tracking-tight">
                  {"⭐".repeat(t.stars)}
                </div>
                <p className="mt-3 text-sm text-[#0a0a0a] leading-relaxed">{t.text}</p>
                <div className="mt-4 flex items-center gap-3">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover bg-[#f5f5f5]"
                  />
                  <div className="leading-tight">
                    <p className="font-bold text-sm text-[#0a0a0a]">{t.name}</p>
                    <p className="text-xs text-[#e31c1c] font-semibold">{t.role}</p>
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
