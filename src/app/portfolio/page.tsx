"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";

// --- Data ---

const projects = [
  {
    id: 1,
    title: "Alianza Bioversity & CIAT",
    category: "E-Learning",
    description: "Capacitación Corporativa y Cumplimiento",
    link: "/work/bioversity-ciat-alliance",
    image: "/images/bioversity-cover.jpg",
    year: "2023"
  },
  {
    id: 2,
    title: "Aulas Virtuales ENDEPORTE",
    category: "E-Learning",
    description: "Transformación Digital / LMS",
    link: "/work/endeporte-aulas-virtuales",
    image: "/images/endeporte-cover.jpg",
    year: "2023"
  },
  {
    id: 3,
    title: "IMBERA Cooling",
    category: "E-Learning",
    description: "E-Learning Corporativo & Ética",
    link: "/work/imbera",
    image: "/images/imbera-cover.jpg",
    year: "2022"
  },
  {
    id: 4,
    title: "Colegio El Pinar",
    category: "Web",
    description: "Diseño Web & Rebranding Institucional",
    link: "/work/colegio-el-pinar",
    image: "/images/pinar-cover.jpg",
    year: "2022"
  },
  {
    id: 5,
    title: "ePortafolio USB Cali",
    category: "Web",
    description: "Diseño de Producto & CMS",
    link: "/work/eportafolio",
    image: "/images/eportafolio-cover.jpg",
    year: "2021"
  },
  {
    id: 6,
    title: "eCampus & MiCampus",
    category: "E-Learning",
    description: "Desarrollo LMS Moodle",
    link: "/work/ecampus",
    image: "/images/ecampus-cover.jpg",
    year: "2021"
  },
  {
    id: 7,
    title: "Centro de Educación Virtual",
    category: "Web",
    description: "Diseño Web & Estrategia Digital",
    link: "/work/centro-educacion-virtual",
    image: "/images/cev-cover.jpg",
    year: "2020"
  }
];

const filters = ["Todos", "E-Learning", "Web", "Branding"];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("Todos");

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "Todos") return true;
    return project.category === activeFilter;
  });

  return (
    <main className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      
      {/* --- Hero Section --- */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-9xl font-bold tracking-tighter mb-8 font-display"
          >
            Trabajos <br className="hidden md:block" />
            Seleccionados
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-3xl font-light text-neutral-600 max-w-3xl"
          >
            Una colección de proyectos digitales, educativos y de marca.
            Explorando la intersección entre funcionalidad y estética.
          </motion.p>
        </div>
      </section>

      {/* --- Gallery Section --- */}
      <section className="px-6 pb-32">
        <div className="max-w-7xl mx-auto">
          
          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-16">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                  activeFilter === filter
                    ? "bg-black text-white border-black"
                    : "bg-transparent text-neutral-500 border-neutral-200 hover:border-black hover:text-black"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={project.id}
                  className="group cursor-pointer"
                >
                  <Link href={project.link} className="block">
                    {/* Image Container */}
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-100 mb-6">
                      {/* Placeholder for actual image */}
                      <div className="absolute inset-0 bg-neutral-200 group-hover:scale-105 transition-transform duration-700 ease-out" />
                      
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                      
                      {/* View Project Button */}
                      <div className="absolute top-6 right-6 bg-white rounded-full p-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-lg">
                        <ArrowUpRight className="w-6 h-6 text-black" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-2 font-display group-hover:underline decoration-2 underline-offset-4">
                          {project.title}
                        </h3>
                        <p className="text-neutral-500 text-lg">
                          {project.description}
                        </p>
                      </div>
                      <span className="text-neutral-400 font-mono text-sm pt-2">
                        {project.year}
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* --- CTA Section --- */}
      <section className="bg-black text-white py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 font-display tracking-tight">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="text-xl md:text-2xl text-neutral-400 mb-12 max-w-2xl mx-auto">
            Hablemos sobre cómo podemos colaborar para crear algo excepcional.
          </p>
          <Link
            href="/#contacto"
            className="inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-full font-bold text-xl hover:scale-105 transition-transform"
          >
            Hablemos <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>

    </main>
  );
}
