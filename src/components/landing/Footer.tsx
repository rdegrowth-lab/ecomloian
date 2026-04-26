import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[hsl(var(--brand-bg))] border-t border-border px-4 sm:px-6 py-12">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <a href="#top" className="font-extrabold text-xl tracking-tight">
          ECOM<span className="text-primary"> LOIAN</span>
        </a>

        <a
          href="https://www.instagram.com/ecom_loian/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-white hover:text-primary transition"
        >
          <Instagram className="w-5 h-5" />
          <span className="font-medium">@ecom_loian</span>
        </a>

        <p className="text-xs text-[hsl(var(--brand-muted))] text-center sm:text-right">
          © 2026 Ecom Loian · Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
};

export default Footer;
