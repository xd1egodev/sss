import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Apartamento en el Centro",
    description: "Hermoso apartamento de dos habitaciones, con acceso a todas las comodidades.",
    image: "/projects/casa.1.jpg",
    tags: ["Centro", "2 habitaciones", "Cercano a transporte público"],
    price: 120000,
    detailsUrl: "#", // Enlace a más detalles del inmueble
  },
  {
    id: 2,
    title: "Casa Familiar en Suburbios",
    description: "Amplia casa familiar de cuatro habitaciones con jardín y cochera.",
    image: "/projects/OIP.webp",
    tags: ["Suburbios", "4 habitaciones", "Jardín"],
    price: 250000,
    detailsUrl: "#", // Enlace a más detalles del inmueble
  },
  {
    id: 3,
    title: "Estudio Moderno en Playa",
    description: "Estudio moderno y acogedor a solo minutos de la playa, ideal para vacaciones.",
    image: "/projects/DGP.webp",
    tags: ["Playa", "1 habitación", "Ideal para vacaciones"],
    price: 80000,
    detailsUrl: "#", // Enlace a más detalles del inmueble
  },
];


export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Inmuebles <span className="text-primary"> Disponibles </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
      

        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          
          
        </div>
      </div>
    </section>
  );
};
