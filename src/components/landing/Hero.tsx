type Props = { onApply: () => void };

const Hero = ({ onApply }: Props) => {
  return (
    <section id="top" className="px-4 sm:px-6 pt-16 sm:pt-24 pb-16 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-[36px] sm:text-[52px] font-extrabold leading-[1.05] tracking-tight text-[#0a0a0a] text-balance">
          La comunidad <span className="text-[#e31c1c]">privada</span> de reventa online
          <br className="hidden sm:block" /> que no encontrarás en ningún sitio más.
        </h1>

        <p className="mt-5 text-base sm:text-lg text-[#6b7280] max-w-[560px] mx-auto leading-relaxed">
          Formación estructurada, proveedores verificados y un grupo de personas que ya están
          vendiendo. No es un curso. Es una sociedad.
        </p>

        <div className="mt-8">
          <button
            onClick={onApply}
            className="bg-[#e31c1c] hover:brightness-90 text-white font-bold rounded-lg shadow-lg transition"
            style={{ fontSize: "16px", padding: "14px 32px" }}
          >
            Quiero entrar → Aplicar ahora
          </button>
        </div>

        <p className="mt-3 text-xs text-[#6b7280]">
          Aplicar no te obliga a nada — en 2 minutos sabes si encajas
        </p>

        {/* VSL embed */}
        <div className="mt-12 max-w-[720px] mx-auto">
          <div className="aspect-video w-full rounded-xl overflow-hidden border border-[#e5e7eb] shadow-sm bg-[#f9f9f9]">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Video de presentación ECOM LOIAN"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
          <p className="mt-3 text-[13px] text-[#6b7280]">Mira el vídeo completo antes de continuar</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
