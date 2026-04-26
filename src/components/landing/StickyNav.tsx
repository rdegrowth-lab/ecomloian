import { useEffect, useState } from "react";

const StickyNav = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 bg-[hsl(var(--brand-bg))]/95 backdrop-blur border-b border-border transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <a href="#top" className="font-extrabold text-base tracking-tight">
          ECOM<span className="text-primary"> LOIAN</span>
        </a>
        <a
          href="#pricing"
          className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-semibold hover:brightness-90 transition"
        >
          Entrar a la comunidad
        </a>
      </nav>
    </div>
  );
};

export default StickyNav;
