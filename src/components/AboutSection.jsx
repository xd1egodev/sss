import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Sobre <span className="text-primary"> Mi</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
             Asesora Inmobiliaria & Creadora de Oportunidades
            </h3>

            <p className="text-muted-foreground">
             Con más de 5 años de experiencia en el sector inmobiliario, me especializo en conectar a las personas con las propiedades de sus sueños, 
             asegurando transacciones fluidas y exitosas.
              Soy una apasionada por encontrar las soluciones perfectas para cada cliente,
               manteniéndome al tanto de las últimas tendencias del mercado y técnicas de negociación para asegurar los mejores resultados.
            </p>

            <p className="text-muted-foreground">
              

            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
               Contactar
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Descargar CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Asesoría en Bienes Raíces</h4>
                  <p className="text-muted-foreground">
                    Guía experta en compra, venta y arrendamiento de propiedades residenciales y comerciales.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Valoración y Comercialización</h4>
                  <p className="text-muted-foreground">
                    Determinación precisa del valor de mercado y estrategias de marketing efectivas para cada inmueble.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Gestión de Proyectos Inmobiliarios</h4>
                  <p className="text-muted-foreground">
                    Coordinación integral de proyectos desde la conceptualización hasta la entrega final,
                     optimizando procesos y resultados.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
