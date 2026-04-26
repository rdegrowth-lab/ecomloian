import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] px-4 sm:px-6 py-12">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <a href="#top" className="font-extrabold text-2xl tracking-tight">
          <span className="text-white">ECOM</span>
          <span className="text-[#e31c1c]"> LOIAN</span>
        </a>

        <a
          href="https://www.instagram.com/ecom_loian/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-white hover:text-[#e31c1c] transition"
        >
          <Instagram className="w-5 h-5" />
          <span className="font-medium">@ecom_loian</span>
        </a>

        <div className="text-xs text-gray-400 text-center sm:text-right space-y-1">
          <p>© 2026 Ecom Loian · Todos los derechos reservados</p>
          <a href="#" className="hover:text-white transition underline">
            Política de privacidad
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
