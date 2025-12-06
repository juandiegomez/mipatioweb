"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Simulated Database
const projectsData: Record<string, any> = {
  "bioversity-ciat-alliance": {
    title: "Alianza Bioversity & CIAT",
    category: "Capacitación Corporativa",
    client: "Bioversity & CIAT / USB Cali",
    year: "2023",
    role: "Lead Developer",
    description:
      "En el mundo corporativo, entender el marco administrativo de las tarjetas de crédito corporativas es crucial. Lideré la creación de una estrategia de capacitación internacional en dos fases (creación de curso y actualización de políticas). Diseñado en formato virtual con escenarios didácticos inmersivos, este proyecto reforzó la capacidad del CEV para ofrecer formación de talla mundial.",
    coverImage: "/images/bioversity-cover.jpg",
    gallery: ["/images/bioversity-1.jpg", "/images/bioversity-2.jpg"],
    link: "https://empresas.usbcali.edu.co/portfolio/curso-de-politica-de-privacidad-de-las-tarjetas-de-credito-corporativas/",
  },
  "endeporte-aulas-virtuales": {
    title: "Aulas Virtuales ENDEPORTE",
    category: "LMS & Transformación Digital",
    client: "Escuela Nacional del Deporte",
    year: "2023",
    role: "Digital Transformation Lead",
    description:
      "Lideré la transformación digital creando 'Aulas Virtuales' para permitir la oferta académica remota. Desarrollé contenido para 5 cursos de 'Pedagogía en el Deporte' en plataforma NEO LMS, incluyendo branding y estandarización de instrumentos para la virtualización de 37 cursos adicionales del programa de Tecnología Deportiva.",
    coverImage: "/images/endeporte-cover.jpg",
    gallery: [],
    link: "https://projectleap.digital/portfolio-archive/endeporte-aulas-virtuales/",
  },
  imbera: {
    title: "IMBERA Cooling",
    category: "E-Learning Corporativo",
    client: "IMBERA / Friomix",
    year: "2023",
    role: "Lead Designer",
    description:
      "Como diseñador líder en la alianza IMBERA-USB Cali, creé todo el material gráfico y multimedia para cursos sobre Ética Empresarial, Protección de Datos y Prevención de Lavado de Activos. El formato online permitió a los colaboradores acceder desde cualquier dispositivo, fomentando una experiencia de aprendizaje dinámica y flexible.",
    coverImage: "/images/imbera-cover.jpg",
    gallery: [],
    link: "https://empresas.usbcali.edu.co/portfolio/potenciando-el-talento-de-imbera-a-traves-de-la-capacitacion/",
  },
  "colegio-el-pinar": {
    title: "Colegio El Pinar",
    category: "Diseño Web & Branding",
    client: "Colegio El Pinar",
    year: "2023",
    role: "Web Designer & Brand Strategist",
    description:
      "Lideré la renovación total del sitio web y la identidad visual del colegio. El nuevo portal integra servicios digitales como aulas virtuales y pagos en una interfaz moderna que refleja el compromiso con la educación personalizada. El proyecto incluyó el rediseño a largo plazo de logos y emblemas institucionales.",
    coverImage: "/images/pinar-cover.jpg",
    gallery: [],
    link: "https://www.elpinar.edu.co/",
  },
  eportafolio: {
    title: "ePortafolio USB Cali",
    category: "Diseño de Producto",
    client: "Universidad de San Buenaventura",
    year: "2023",
    role: "Product Designer & Developer",
    description:
      "Diseñé y desarrollé 'ePortafolio', una vitrina dinámica de servicios de capacitación corporativa. Desde el UX Writing y la identidad visual hasta el desarrollo en WordPress, creé una experiencia fluida que ya ha servido para cerrar negocios con nuevos clientes corporativos clave.",
    coverImage: "/images/eportafolio-cover.jpg",
    gallery: [],
    link: "https://empresas.usbcali.edu.co/",
  },
  ecampus: {
    title: "eCampus & MiCampus",
    category: "Desarrollo LMS Moodle",
    client: "USB Cali",
    year: "2022",
    role: "LMS Developer",
    description:
      "Ante la necesidad de un espacio exclusivo para estudiantes virtuales, desarrollé 'eCampus' (Moodle) y rediseñé 'MiCampus' (presencial). Creé la landing page 'Aulas Virtuales' para segregar y dirigir el tráfico eficientemente, modernizando la infraestructura educativa digital de la universidad.",
    coverImage: "/images/ecampus-cover.jpg",
    gallery: [],
    link: "https://ecampus.usbcali.edu.co/",
  },
  "centro-educacion-virtual": {
    title: "Centro de Educación Virtual",
    category: "Estrategia Web",
    client: "USB Cali",
    year: "2022",
    role: "Web Strategist",
    description:
      "Transformé la presencia digital del CEV, renovando un sitio intacto desde 2018. El nuevo portal exhibe cursos, diplomados, podcasts y noticias de forma moderna. Lanzado en un evento oficial, este proyecto marcó un hito en la visibilidad y calidad percibida de la educación virtual de la universidad.",
    coverImage: "/images/cev-cover.jpg",
    gallery: [],
    link: "https://cev.usbcali.edu.co/",
  },
};

export default function ProjectPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = projectsData[slug];

  // Calculate next project for navigation
  const projectKeys = Object.keys(projectsData);
  const currentIndex = projectKeys.indexOf(slug);
  const nextSlug =
    currentIndex !== -1
      ? projectKeys[(currentIndex + 1) % projectKeys.length]
      : null;
  const nextProject = nextSlug ? projectsData[nextSlug] : null;

  if (!project) {
    return (
      <div className="h-screen flex items-center justify-center bg-white text-black">
        <h1 className="text-2xl font-display">Proyecto no encontrado</h1>
      </div>
    );
  }

  return (
    <article className="bg-white min-h-screen pb-20">
      {/* Hero Section */}
      <div className="relative h-[80vh] md:h-screen w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-20 z-20">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-8xl font-bold text-white font-display max-w-5xl"
          >
            {project.title}
          </motion.h1>
        </div>
      </div>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Left Column: Meta Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-sm text-gray-400 uppercase tracking-wider mb-2">
                Cliente
              </h3>
              <p className="text-xl font-medium">{project.client}</p>
            </div>
            <div>
              <h3 className="text-sm text-gray-400 uppercase tracking-wider mb-2">
                Servicios
              </h3>
              <p className="text-xl font-medium">{project.category}</p>
            </div>
            <div>
              <h3 className="text-sm text-gray-400 uppercase tracking-wider mb-2">
                Año
              </h3>
              <p className="text-xl font-medium">{project.year}</p>
            </div>
            {project.role && (
              <div>
                <h3 className="text-sm text-gray-400 uppercase tracking-wider mb-2">
                  Rol
                </h3>
                <p className="text-xl font-medium">{project.role}</p>
              </div>
            )}
          </div>

          {/* Right Column: Description */}
          <div className="md:col-span-2 space-y-8">
            <h3 className="text-2xl md:text-3xl font-light leading-relaxed text-gray-800">
              {project.description}
            </h3>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-lg font-medium text-black hover:opacity-70 transition-opacity border-b border-black pb-1"
              >
                Visitar Proyecto <ArrowRight className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Visuals Gallery */}
      {project.gallery && project.gallery.length > 0 && (
        <div className="max-w-7xl mx-auto px-6 space-y-12 md:space-y-24 mb-24">
          {project.gallery.map((img: string, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full h-[50vh] md:h-[80vh] rounded-2xl overflow-hidden"
            >
              <Image
                src={img}
                alt={`${project.title} gallery ${index + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>
      )}

      {/* Next Project Navigation */}
      {nextProject && (
        <div className="max-w-7xl mx-auto px-6 py-24 border-t border-gray-100">
          <Link href={`/work/${nextSlug}`} className="group block">
            <span className="text-sm text-gray-400 uppercase tracking-wider mb-4 block">
              Siguiente Proyecto
            </span>
            <div className="flex items-center justify-between">
              <h2 className="text-4xl md:text-7xl font-bold font-display group-hover:text-gray-600 transition-colors">
                {nextProject.title}
              </h2>
              <ArrowRight className="w-12 h-12 md:w-24 md:h-24 transform group-hover:translate-x-4 transition-transform duration-300" />
            </div>
          </Link>
        </div>
      )}
    </article>
  );
}
