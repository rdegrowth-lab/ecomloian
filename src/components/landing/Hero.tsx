import OrbitingAvatarsCTA from "./OrbitingAvatarsCTA";

type Props = { onApply: () => void };

const avatars = [
  { src: "https://api.dicebear.com/7.x/initials/svg?seed=AG&backgroundColor=e31c1c&fontColor=ffffff", alt: "AG" },
  { src: "https://api.dicebear.com/7.x/initials/svg?seed=JC&backgroundColor=0a0a0a&fontColor=ffffff", alt: "JC" },
  { src: "https://api.dicebear.com/7.x/initials/svg?seed=SF&backgroundColor=e31c1c&fontColor=ffffff", alt: "SF" },
  { src: "https://api.dicebear.com/7.x/initials/svg?seed=LH&backgroundColor=0a0a0a&fontColor=ffffff", alt: "LH" },
  { src: "https://api.dicebear.com/7.x/initials/svg?seed=FV&backgroundColor=e31c1c&fontColor=ffffff", alt: "FV" },
  { src: "https://api.dicebear.com/7.x/initials/svg?seed=NM&backgroundColor=0a0a0a&fontColor=ffffff", alt: "NM" },
];

const Hero = ({ onApply }: Props) => {
  return (
    <div id="top">
      <OrbitingAvatarsCTA
        title={
          <>
            La comunidad privada de <br />
            <span className="text-[#e31c1c]">reventa online</span> <br />
            que sí funciona.
          </>
        }
        description="Formación real, proveedores verificados y un grupo de personas que ya están vendiendo. No es un curso. Es una sociedad."
        buttonText="Quiero entrar → Aplicar ahora"
        buttonProps={{ onClick: onApply }}
        avatars={avatars}
        orbitRadius={18}
        orbitDuration={35}
        className="bg-white"
      />
      <p className="text-center text-xs text-[#6b7280] -mt-10 mb-10 px-4">
        Sin compromiso. Aplicar no te obliga a nada — solo comprobamos que encajas.
      </p>
    </div>
  );
};

export default Hero;
