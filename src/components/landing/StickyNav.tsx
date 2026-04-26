import { useEffect, useState } from "react";

type Props = { onApply: () => void };

const StickyNav = ({ onApply }: Props) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-[#e5e7eb] transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <a href="#top" className="font-extrabold text-base tracking-tight">
          <span className="text-[#0a0a0a]">ECOM</span>
          <span className="text-[#e31c1c]"> LOIAN</span>
        </a>
        <button
          onClick={onApply}
          className="bg-[#e31c1c] text-white px-4 py-2 rounded-md text-sm font-semibold hover:brightness-90 transition"
        >
          Aplicar ahora
        </button>
      </nav>
    </div>
  );
};

export default StickyNav;
