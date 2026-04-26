"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export type FocusRailItem = {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  meta?: string;
};

type Props = {
  items: FocusRailItem[];
  autoPlay?: boolean;
  interval?: number;
};

const FocusRail = ({ items, autoPlay = true, interval = 5000 }: Props) => {
  const [active, setActive] = useState(0);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (!autoPlay || hover) return;
    const id = setInterval(() => {
      setActive((a) => (a + 1) % items.length);
    }, interval);
    return () => clearInterval(id);
  }, [autoPlay, hover, interval, items.length]);

  const current = items[active];

  return (
    <section
      className="bg-neutral-950 py-20 px-4 sm:px-6"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-center">
        {/* Image */}
        <div className="order-1 lg:order-2 relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-900">
          <AnimatePresence mode="wait">
            <motion.img
              key={current.id}
              src={current.imageSrc}
              alt={current.title}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>
          {current.meta && (
            <div className="absolute top-4 left-4 bg-[#e31c1c] text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
              {current.meta}
            </div>
          )}
        </div>

        {/* List */}
        <div className="order-2 lg:order-1 space-y-1">
          {items.map((it, i) => {
            const isActive = i === active;
            return (
              <button
                key={it.id}
                onClick={() => setActive(i)}
                className={`w-full text-left flex gap-4 py-4 pl-5 border-l-2 transition-all ${
                  isActive
                    ? "border-[#e31c1c]"
                    : "border-neutral-800 hover:border-neutral-600"
                }`}
              >
                <div className="flex-1">
                  <h3
                    className={`text-base sm:text-lg font-bold transition-colors ${
                      isActive ? "text-white" : "text-neutral-500"
                    }`}
                  >
                    {it.title}
                  </h3>
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="text-sm text-neutral-400 leading-relaxed overflow-hidden"
                      >
                        <span className="block pt-1.5">{it.description}</span>
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FocusRail;
