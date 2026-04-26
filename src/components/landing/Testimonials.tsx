import TestimonialsColumn, { Testimonial } from "./TestimonialsColumn";

const testimonials: Testimonial[] = [
  // COLUMNA 1 (1-14)
  { name: "Alberto M.", role: "Formación 1/1 Con LOIAN", image: "https://api.dicebear.com/7.x/initials/svg?seed=AM&backgroundColor=0a0a0a&fontColor=ffffff", text: "Llevaba bastante tiempo buscando a alguien que me diera apoyo 1/1. Las llamadas me solucionaron todas las dudas que tenía y el seguimiento es una locura: me dio el paso a paso exacto. Unas semanas después, estos son los resultados.", stars: 5 },
  { name: "Gabriel G.", role: "Pack Tienda Completa", image: "https://api.dicebear.com/7.x/initials/svg?seed=GG&backgroundColor=e31c1c&fontColor=ffffff", text: "Algunas de las ventas de hoy después de semanas aplicando todo lo del pack completo. El precio es ridículo comparado con todo el valor que hay dentro.", stars: 5 },
  { name: "Jesus C.", role: "Pack Tienda Completa", image: "https://api.dicebear.com/7.x/initials/svg?seed=JC&backgroundColor=0a0a0a&fontColor=ffffff", text: "Muy buenos los proveedores y las guías. Sinceramente, no me esperaba conseguir estos resultados en tan poco tiempo.", stars: 5 },
  { name: "Gerard M.", role: "Proveedor De Perfumes", image: "https://api.dicebear.com/7.x/initials/svg?seed=GM&backgroundColor=e31c1c&fontColor=ffffff", text: "Me acaba de llegar el pedido del proveedor de perfumes. Ha llegado bastante rápido y la calidad es muy buena.", stars: 5 },
  { name: "Lucian E.", role: "Proveedor de Ropa", image: "https://api.dicebear.com/7.x/initials/svg?seed=LE&backgroundColor=0a0a0a&fontColor=ffffff", text: "Acabo de abrir el paquete del proveedor de ropa y la verdad es que muy bien. Volveré a pedir.", stars: 5 },
  { name: "Sergio F.", role: "Pack Tienda Completa", image: "https://api.dicebear.com/7.x/initials/svg?seed=SF&backgroundColor=e31c1c&fontColor=ffffff", text: "Resultados después de 1 semana aplicando todo lo que dice en las guías y haciendo pedidos a los proveedores.", stars: 5 },
  { name: "Iker X.", role: "Proveedor de Zapas", image: "https://api.dicebear.com/7.x/initials/svg?seed=IX&backgroundColor=0a0a0a&fontColor=ffffff", text: "Muy bueno el proveedor de zapas, ya tengo vendidas 2 de las 5 que pedí.", stars: 5 },
  { name: "Andres L.", role: "Proveedores Españoles", image: "https://api.dicebear.com/7.x/initials/svg?seed=AL&backgroundColor=e31c1c&fontColor=ffffff", text: "Muy satisfecho con los proveedores españoles: envío muy rápido y lo mejor es que puedes pagar contra reembolso.", stars: 5 },
  { name: "Aitor S.", role: "Pack Tienda Completa", image: "https://api.dicebear.com/7.x/initials/svg?seed=AS&backgroundColor=0a0a0a&fontColor=ffffff", text: "Resultados tras 3 semanas aplicando todo lo que dan en el pack. La información ayuda muchísimo y el apoyo que dan es muy bueno.", stars: 5 },
  { name: "Alex S.", role: "Proveedor De Vapers", image: "https://api.dicebear.com/7.x/initials/svg?seed=AS2&backgroundColor=e31c1c&fontColor=ffffff", text: "Pedí al proveedor de vapers y tienen un catálogo enorme con todas las marcas. Hasta ahora el mejor que he probado. Me pongo a venderlos todos.", stars: 5 },
  { name: "Adria E.", role: "Pack Tienda Completa", image: "https://api.dicebear.com/7.x/initials/svg?seed=AE&backgroundColor=0a0a0a&fontColor=ffffff", text: "Ya me estafaron en otra página. Esta vez probé con Loian porque me pareció fiable. Hoy acabo de hacer mi primera venta. Voy a por más.", stars: 5 },
  { name: "Judit M.", role: "Proveedor De Moviles", image: "https://api.dicebear.com/7.x/initials/svg?seed=JM&backgroundColor=e31c1c&fontColor=ffffff", text: "Me acaba de llegar el iPhone que pedí hace unas semanas. Muy buena calidad, mucho mejor de lo que esperaba.", stars: 5 },
  { name: "Alejandro R.", role: "Proveedor De Fútbol", image: "https://api.dicebear.com/7.x/initials/svg?seed=AR&backgroundColor=0a0a0a&fontColor=ffffff", text: "Primer pedido al proveedor de camisetas de fútbol: llegó rapidísimo y la calidad es muy buena. Ahora a venderlas.", stars: 5 },
  { name: "Carlos Y.", role: "Pack Tienda Completa", image: "https://api.dicebear.com/7.x/initials/svg?seed=CY&backgroundColor=e31c1c&fontColor=ffffff", text: "Ya revendía por Vinted, pero aplicar todo lo que decía me hizo pasar al siguiente nivel. Esto es lo que he sacado este mes en efectivo.", stars: 5 },

  // COLUMNA 2 (15-27)
  { name: "Jose M.", role: "Pack Tienda Completa", image: "https://api.dicebear.com/7.x/initials/svg?seed=JM2&backgroundColor=0a0a0a&fontColor=ffffff", text: "Estas son algunas de las estadísticas de mi cuenta de Vinted después de unas semanas aplicando todo lo que explican en las guías.", stars: 5 },
  { name: "Ariadna S.", role: "Pack Tienda Completa", image: "https://api.dicebear.com/7.x/initials/svg?seed=ARS&backgroundColor=e31c1c&fontColor=ffffff", text: "Las descripciones que enseñan funcionan de verdad.", stars: 5 },
  { name: "Lara H.", role: "Lista de Productos Ganadores", image: "https://api.dicebear.com/7.x/initials/svg?seed=LH&backgroundColor=0a0a0a&fontColor=ffffff", text: "Lo recomiendo a cualquiera que quiera empezar en reventa sin perder dinero.", stars: 4 },
  { name: "Sergio F.", role: "Proveedor De Vintage", image: "https://api.dicebear.com/7.x/initials/svg?seed=SF2&backgroundColor=e31c1c&fontColor=ffffff", text: "Pensaba que me estafaría como otras veces, pero me llegó el contacto al instante. El envío rapidísimo y la calidad una locura. 100% recomendable.", stars: 5 },
  { name: "Joan P.", role: "Pack Tienda Completa", image: "https://api.dicebear.com/7.x/initials/svg?seed=JP&backgroundColor=0a0a0a&fontColor=ffffff", text: "Es una locura el precio que pagué comparado con todo lo que estoy aprendiendo. Hoy acabo de hacer mis primeras dos ventas en persona.", stars: 5 },
  { name: "Pablo M.", role: "Pack Tienda Completa", image: "https://api.dicebear.com/7.x/initials/svg?seed=PM&backgroundColor=e31c1c&fontColor=ffffff", text: "Me gustó que no hay letra pequeña.", stars: 5 },
  { name: "Fran V.", role: "Proveedor De Vapers", image: "https://api.dicebear.com/7.x/initials/svg?seed=FV&backgroundColor=0a0a0a&fontColor=ffffff", text: "Pedí un lote pequeño y llegó perfecto, calidad top.", stars: 5 },
  { name: "Enrique S.", role: "Pack Proveedores", image: "https://api.dicebear.com/7.x/initials/svg?seed=ES&backgroundColor=e31c1c&fontColor=ffffff", text: "Producto increíble, detalles perfectos y se nota la calidad.", stars: 5 },
  { name: "Hugo D.", role: "Pack Proveedores", image: "https://api.dicebear.com/7.x/initials/svg?seed=HD&backgroundColor=0a0a0a&fontColor=ffffff", text: "De verdad, de los mejores pedidos que he hecho.", stars: 5 },
  { name: "Adrià C.", role: "Formación 1/1 Con LOIAN", image: "https://api.dicebear.com/7.x/initials/svg?seed=AC&backgroundColor=e31c1c&fontColor=ffffff", text: "Muy útil si ya vendes pero quieres escalar.", stars: 5 },
  { name: "Júlia N.", role: "Pack Tienda Completa", image: "https://api.dicebear.com/7.x/initials/svg?seed=JN&backgroundColor=0a0a0a&fontColor=ffffff", text: "Todo llega al email, rápido y sin líos.", stars: 5 },
  { name: "Marcos R.", role: "Proveedor de Zapas", image: "https://api.dicebear.com/7.x/initials/svg?seed=MR&backgroundColor=e31c1c&fontColor=ffffff", text: "Proveedor serio, buena comunicación y calidad constante.", stars: 4 },
  { name: "Javier M.", role: "Pack Tienda Completa", image: "https://api.dicebear.com/7.x/initials/svg?seed=JM3&backgroundColor=0a0a0a&fontColor=ffffff", text: "Me gustó porque está hecho desde experiencia real.", stars: 4 },

  // COLUMNA 3 (28-40)
  { name: "Nicolás D.", role: "Pack +50 Guías Para Reventa", image: "https://api.dicebear.com/7.x/initials/svg?seed=ND&backgroundColor=e31c1c&fontColor=ffffff", text: "La guía de escalar en Vinted es de lo mejor. Te explica cómo pasar de 5 a 50 anuncios.", stars: 5 },
  { name: "Jorge J.", role: "Pack +50 Guías Para Reventa", image: "https://api.dicebear.com/7.x/initials/svg?seed=JJ&backgroundColor=0a0a0a&fontColor=ffffff", text: "Mi segunda venta después de aplicar el método fue de 70€ de beneficio. Ya lo vi claro.", stars: 5 },
  { name: "Bruno A.", role: "Pack +50 Guías Para Reventa", image: "https://api.dicebear.com/7.x/initials/svg?seed=BA&backgroundColor=e31c1c&fontColor=ffffff", text: "Me encantó porque no es teoría. Son pasos exactos y ejemplos.", stars: 5 },
  { name: "Abril P.", role: "Proveedor De Vintage", image: "https://api.dicebear.com/7.x/initials/svg?seed=AP&backgroundColor=0a0a0a&fontColor=ffffff", text: "Pedí sudaderas y camisetas y todo venía con buena salida.", stars: 5 },
  { name: "Adrián S.", role: "Formación 1/1 Con LOIAN", image: "https://api.dicebear.com/7.x/initials/svg?seed=ADS&backgroundColor=e31c1c&fontColor=ffffff", text: "Tuve una llamada con Loian y me organizó todo el negocio desde cero. Salí con un plan claro de validación y escalado.", stars: 5 },
  { name: "Iván E.", role: "Proveedor de Ropa", image: "https://api.dicebear.com/7.x/initials/svg?seed=IE&backgroundColor=0a0a0a&fontColor=ffffff", text: "La ropa viene muy bien acabada, nada de fallos raros.", stars: 4 },
  { name: "Angel O.", role: "Proveedor De Perfumes", image: "https://api.dicebear.com/7.x/initials/svg?seed=AO&backgroundColor=e31c1c&fontColor=ffffff", text: "Proveedor de perfumes muy fiable, todo llegó perfecto y con una calidad increíble.", stars: 5 },
  { name: "Alba H.", role: "Lista de Productos Ganadores", image: "https://api.dicebear.com/7.x/initials/svg?seed=AH&backgroundColor=0a0a0a&fontColor=ffffff", text: "Esto te da confianza porque sabes lo que estás comprando.", stars: 5 },
  { name: "Gabriel L.", role: "Proveedor De Perfumes", image: "https://api.dicebear.com/7.x/initials/svg?seed=GL&backgroundColor=e31c1c&fontColor=ffffff", text: "Se nota que es proveedor serio, calidad constante en todos los modelos.", stars: 4 },
  { name: "Ferran V.", role: "Pack Proveedores", image: "https://api.dicebear.com/7.x/initials/svg?seed=FV2&backgroundColor=0a0a0a&fontColor=ffffff", text: "Me llegó en 24h y era exactamente lo que quería, 10/10.", stars: 5 },
  { name: "Sergio M.", role: "Lista de Productos Ganadores", image: "https://api.dicebear.com/7.x/initials/svg?seed=SM&backgroundColor=e31c1c&fontColor=ffffff", text: "Me ha ayudado a elegir productos que destacan más en Vinted.", stars: 5 },
  { name: "Javier L.", role: "Pack Tienda Completa", image: "https://api.dicebear.com/7.x/initials/svg?seed=JL&backgroundColor=0a0a0a&fontColor=ffffff", text: "Me gustó porque te obliga a ejecutar.", stars: 5 },
  { name: "Sergio S.", role: "Pack Proveedores", image: "https://api.dicebear.com/7.x/initials/svg?seed=SS&backgroundColor=e31c1c&fontColor=ffffff", text: "Se nota que es proveedor serio, todo bien empaquetado y calidad top.", stars: 4 },
];

const col1 = testimonials.slice(0, 14);
const col2 = testimonials.slice(14, 27);
const col3 = testimonials.slice(27, 40);

const Testimonials = () => {
  return (
    <section className="px-4 sm:px-6 py-20 max-w-6xl mx-auto bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0a0a0a]">
          Lo que dicen los que ya están dentro
        </h2>
        <p className="mt-3 text-[#6b7280]">Resultados reales. Sin editar.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-h-[700px] overflow-hidden">
        <TestimonialsColumn testimonials={col1} duration={25} />
        <TestimonialsColumn testimonials={col2} duration={20} className="hidden md:block" />
        <TestimonialsColumn testimonials={col3} duration={30} className="hidden lg:block" />
      </div>
    </section>
  );
};

export default Testimonials;
