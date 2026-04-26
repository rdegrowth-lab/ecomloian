type Review = { name: string; stars: number; text: string; product: string };

const reviews: Review[] = [
  { name: "Alberto M.", stars: 5, text: "Hace unas semanas vi a Loian por Instagram. Llevaba bastante tiempo buscando a alguien que me diera apoyo 1/1, y las llamadas me solucionaron todas las dudas que tenía. Además, el seguimiento que hacen es una locura: me dio el paso a paso exacto que tenía que seguir. Unas semanas más tarde, estos son los resultados que he conseguido.", product: "Formación 1/1 Con LOIAN" },
  { name: "Gabriel G.", stars: 5, text: "Algunos de las ventas de hoy después de semanas aplicando todo lo del pack completo de la tienda de verdad que el precio es ridículo comparado con todo el valor que hay dentro.", product: "Pack Tienda Completa" },
  { name: "Jesus C.", stars: 5, text: "Muy buenos los proveedores y las guías que incluyen en el pack completo. Sinceramente, no me esperaba conseguir estos resultados en tan poco tiempo.", product: "Pack Tienda Completa" },
  { name: "Gerard M.", stars: 5, text: "Me acaba de llegar el pedido que hice al proveedor de perfumes. Me ha llegado bastante rápido y la calidad es muy buena.", product: "Proveedor De Perfumes" },
  { name: "Lucian E.", stars: 5, text: "Acabo de abrir el paquete del proveedor de ropa y la verdad es que muy bien. Volveré a pedir.", product: "Proveedor de Ropa" },
  { name: "Sergio F.", stars: 5, text: "Resultados después 1 semana aplicando todo lo que dice en las guías y de hacer pedidos a los proveedores.", product: "Pack Tienda Completa" },
  { name: "Iker X.", stars: 5, text: "Muy bueno el proveedor de zapas, ya tengo vendidas 2 de las 5 que pedí.", product: "Proveedor de Zapas" },
  { name: "Andres L.", stars: 5, text: "Muy satisfecho con los proveedores españoles: envío muy rápido y lo mejor es que puedes pagar contra reembolso.", product: "Proveedores Españoles" },
  { name: "Aitor S.", stars: 5, text: "Resultados tras 3 semanas aplicando todo lo que dan en el pack. La verdad es que dan información que ayuda muchísimo y el apoyo que dan es muy bueno.", product: "Pack Tienda Completa" },
  { name: "Alex S.", stars: 5, text: "Hace unas semanas pedí al proveedor de vapers y la verdad es que tienen un catálogo muy amplio y disponen de todas las marcas. Hasta ahora, el mejor que he probado. Ahora voy a ponerme a venderlos todos.", product: "Proveedor De Vapers" },
  { name: "Adria E.", stars: 5, text: "Hace ya bastante tiempo compré proveedores de otra página y me estafaron. Esta vez probé con Loian porque me pareció fiable y le compré el pack completo de toda la tienda, porque era lo que me parecía más rentable. Hoy acabo de hacer mi primera venta. Voy a por más.", product: "Pack Tienda Completa" },
  { name: "Judit M.", stars: 5, text: "Me acaba de llegar el iPhone que pedí hace unas semanas. La verdad, muy buena calidad, mucho mejor de lo que esperaba.", product: "Proveedor De Moviles" },
  { name: "Alejandro R.", stars: 5, text: "Primer pedido al proveedor de camisetas de fútbol: me ha llegado rapidísimo y la calidad es muy buena. Ahora voy a probar a venderlas a ver qué tal.", product: "Proveedor De Fútbol" },
  { name: "Carlos Y.", stars: 5, text: "Hace ya bastante que compré el pack completo de toda la tienda. La verdad, lo que hay dentro es una reliquia. Antes de comprarlo yo ya revendía por Vinted, pero comprarlo y aplicar exactamente todo lo que decía me hizo pasar al siguiente nivel. Esto es lo que he sacado este mes en efectivo de todas mis ganancias en Vinted.", product: "Pack Tienda Completa" },
  { name: "Jose M.", stars: 5, text: "Estas son algunas de las estadísticas de mi cuenta de Vinted después de unas semanas aplicando todo lo que explican en las guías.", product: "Pack Tienda Completa" },
  { name: "Ariadna S.", stars: 5, text: "Las descripciones que enseñan funcionan de verdad.", product: "Pack Tienda Completa" },
  { name: "Lara H.", stars: 4, text: "Lo recomiendo a cualquiera que quiera empezar en reventa sin perder dinero.", product: "Lista de Nuestros Productos Ganadores" },
  { name: "Sergio F.", stars: 5, text: "Hace unas semanas vi a Loian en Instagram, le eché un ojo a la web y decidí comprar el proveedor de ropa vintage. Pensaba que me estafaría y no me daría nada (como ya me ha pasado otras veces con otras personas), pero no: me llegó el contacto al instante al correo, así que decidí hacerle un pedido. Hoy me acaba de llegar el envío rapidísimo, la verdad, y la calidad es una locura. De verdad, muchas gracias, Loian. 100% recomendable.", product: "Proveedor De Vintage" },
  { name: "Joan P.", stars: 5, text: "El pack completo de toda la tienda es una locura. Literalmente me parece ridículo el precio que pagué en comparación con todo lo que estoy aprendiendo. Gracias a todas las guías y proveedores estoy empezando a ver resultados. Hoy acabo de hacer mis primeras dos ventas en persona y por eso estoy escribiendo esto. Muchas gracias por todo.", product: "Pack Tienda Completa" },
  { name: "Pablo M.", stars: 5, text: "Me gustó que no hay letra pequeña.", product: "Pack Tienda Completa" },
  { name: "Fran V.", stars: 5, text: "Pedi un lote pequeño y llegó perfecto, calidad top.", product: "Proveedor De Vapers" },
  { name: "Javier M.", stars: 3, text: "Me gustó porque está hecho desde experiencia real.", product: "Pack Tienda Completa" },
  { name: "Enrique S.", stars: 5, text: "Producto increíble, detalles perfectos y se nota la calidad.", product: "Pack Proveedores" },
  { name: "Sergio S.", stars: 3, text: "Se nota que es proveedor serio, todo bien empaquetado y calidad top.", product: "Pack Proveedores" },
  { name: "Hugo D.", stars: 5, text: "De verdad, de los mejores pedidos que he hecho.", product: "Pack Proveedores" },
  { name: "Adrià C.", stars: 5, text: "Muy útil si ya vendes pero quieres escalar.", product: "Formación 1/1 Con LOIAN" },
  { name: "Júlia N.", stars: 5, text: "Todo llega al email, rápido y sin lios.", product: "Pack Tienda Completa" },
  { name: "Marcos R.", stars: 4, text: "Proveedor serio, buena comunicación y calidad constante.", product: "Proveedor de Zapas" },
  { name: "Nicolás D.", stars: 5, text: "La guía de escalar en Vinted es de lo mejor. Te explica cómo pasar de 5 a 50 anuncios.", product: "Pack +50 Guías Para reventa" },
  { name: "Jorge J.", stars: 5, text: "Mi segunda venta después de aplicar el método fue de 70€ de beneficio. Ya lo vi claro.", product: "Pack +50 Guías Para reventa" },
  { name: "Bruno A.", stars: 5, text: "Me encantó porque no es teoría. Son pasos exactos y ejemplos.", product: "Pack +50 Guías Para reventa" },
  { name: "Abril P.", stars: 5, text: "Pedí sudaderas y camisetas y todo venía con buena salida.", product: "Proveedor De Vintage" },
  { name: "Adrián S.", stars: 5, text: "Tuve una llamada con Loian y me organizó todo el negocio desde cero. Salí con un plan claro de validación y escalado.", product: "Formación 1/1 Con LOIAN" },
  { name: "Iván E.", stars: 4, text: "La ropa viene muy bien acabada, nada de fallos raros.", product: "Proveedor de Ropa" },
  { name: "Angel O.", stars: 5, text: "Proveedor de perfumes muy fiable, todo llegó perfecto y con una calidad increíble.", product: "Proveedor De Perfumes" },
  { name: "Alba H.", stars: 5, text: "Esto te da confianza porque sabes lo que estás comprando.", product: "Lista de Nuestros Productos Ganadores" },
  { name: "Gabriel L.", stars: 4, text: "Se nota que es proveedor serio, calidad constante en todos los modelos.", product: "Proveedor De Perfumes" },
  { name: "Ferran V.", stars: 5, text: "Me llegó en 24h y era exactamente lo que quería, 10/10.", product: "Pack Proveedores" },
  { name: "Sergio M.", stars: 5, text: "Me ha ayudado a elegir productos que destacan más en Vinted.", product: "Lista de Nuestros Productos Ganadores" },
  { name: "Javier L.", stars: 5, text: "Me gustó porque te obliga a ejecutar.", product: "Pack Tienda Completa" },
];

const initialsOf = (name: string) =>
  name
    .replace(".", "")
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

const Stars = ({ n }: { n: number }) => (
  <span className="text-[hsl(var(--brand-yellow))] text-sm tracking-tight" aria-label={`${n} de 5 estrellas`}>
    {"★".repeat(n)}
    <span className="text-muted-foreground/40">{"★".repeat(5 - n)}</span>
  </span>
);

const Testimonials = () => {
  return (
    <section className="px-4 sm:px-6 py-20 max-w-6xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Lo que dicen los que ya están dentro</h2>
        <p className="mt-3 text-[hsl(var(--brand-muted))]">Reseñas reales de clientes reales. Sin filtros.</p>
        <div className="mt-6 inline-flex items-center gap-3">
          <span className="text-[hsl(var(--brand-yellow))] text-2xl">★★★★★</span>
          <span className="text-white font-bold text-lg">4.9</span>
          <span className="text-[hsl(var(--brand-muted))]">· +44 reseñas verificadas</span>
        </div>
      </div>

      <div className="masonry-3">
        {reviews.map((r, i) => (
          <article key={i} className="bg-card border border-border rounded-xl p-5">
            <header className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#2a2a2a] flex items-center justify-center text-primary font-bold text-sm">
                {initialsOf(r.name)}
              </div>
              <div>
                <p className="text-white font-bold text-sm leading-tight">{r.name}</p>
                <Stars n={r.stars} />
              </div>
            </header>
            <p className="mt-3 text-sm text-[hsl(var(--brand-muted))] leading-relaxed">{r.text}</p>
            <div className="mt-4 inline-block text-[11px] font-semibold uppercase tracking-wide text-primary border border-primary/30 rounded-full px-2.5 py-1">
              {r.product}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
