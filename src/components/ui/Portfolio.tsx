"use client";

import { useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Alianza Bioversity & CIAT",
    category: "Capacitación Corporativa y Cumplimiento",
    link: "/work/bioversity-ciat-alliance",
    image: "/images/bioversity-cover.jpg"
  },
  {
    id: 2,
    title: "Aulas Virtuales ENDEPORTE",
    category: "Transformación Digital / LMS",
    link: "/work/endeporte-aulas-virtuales",
    image: "/images/endeporte-cover.jpg"
  },
  {
    id: 3,
    title: "IMBERA Cooling",
    category: "E-Learning Corporativo & Ética",
    link: "/work/imbera",
    image: "/images/imbera-cover.jpg"
  },
  {
    id: 4,
    title: "Colegio El Pinar",
    category: "Diseño Web & Rebranding Institucional",
    link: "/work/colegio-el-pinar",
    image: "/images/pinar-cover.jpg"
  },
  {
    id: 5,
    title: "ePortafolio USB Cali",
    category: "Diseño de Producto & CMS",
    link: "/work/eportafolio",
    image: "/images/eportafolio-cover.jpg"
  },
  {
    id: 6,
    title: "eCampus & MiCampus",
    category: "Desarrollo LMS Moodle",
    link: "/work/ecampus",
    image: "/images/ecampus-cover.jpg"
  },
  {
    id: 7,
    title: "Centro de Educación Virtual",
    category: "Diseño Web & Estrategia Digital",
    link: "/work/centro-educacion-virtual",
    image: "/images/cev-cover.jpg"
  }
];

export default function Portfolio() {
  const [activeImg, setActiveImg] = useState<string | null>(null);
  
  // Mouse tracking for the floating image
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth spring animation for the cursor follower
  const springConfig = { damping: 20, stiffness: 300 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    mouseX.set(clientX);
    mouseY.set(clientY);
  };

  return (
    <section 
      id="portafolio" 
      className="bg-white py-24 relative cursor-default" 
      onMouseMove={handleMouseMove}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-black mb-6 tracking-tight font-display">Trabajos Seleccionados</h2>
          <div className="h-1 w-20 bg-black"></div>
        </div>

        {/* Project List */}
        <div className="flex flex-col">
          {projects.map((project) => (
            <Link 
              href={project.link} 
              key={project.id}
              className="group relative border-b border-gray-200 py-12 md:py-16 flex flex-col md:flex-row md:items-center justify-between transition-colors hover:bg-gray-50 md:hover:bg-transparent"
              onMouseEnter={() => setActiveImg(project.image)}
              onMouseLeave={() => setActiveImg(null)}
            >
              <div className="z-10 flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12">
                <h3 className="text-3xl md:text-5xl font-bold text-gray-400 group-hover:text-black transition-colors duration-300 font-display">
                  {project.title}
                </h3>
                <span className="text-lg text-gray-500 font-medium">
                  {project.category}
                </span>
              </div>
              
              <div className="mt-4 md:mt-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowUpRight className="w-8 h-8 text-black" />
              </div>

              {/* Mobile Image (Visible only on mobile) */}
              <div className="mt-6 md:hidden rounded-xl overflow-hidden w-full h-64 relative">
                 <img 
                   src={project.image} 
                   alt={project.title}
                   className="object-cover w-full h-full"
                 />
              </div>
            </Link>
          ))}
        </div>

        {/* View All Projects Link */}
        <div className="mt-16 flex justify-center md:justify-start">
          <Link 
            href="/portfolio"
            className="group inline-flex items-center gap-2 text-xl font-bold text-black border-b-2 border-black pb-1 hover:opacity-70 transition-opacity"
          >
            Ver todos los proyectos <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Floating Image (Desktop Only) */}
      <motion.div
        style={{ 
          x, 
          y,
          translateX: "-50%",
          translateY: "-50%"
        }}
        className="pointer-events-none fixed top-0 left-0 z-50 hidden md:block w-[200px] h-[100px] rounded-2xl overflow-hidden shadow-2xl"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ 
          opacity: activeImg ? 1 : 0, 
          scale: activeImg ? 1 : 0.5 
        }}
        transition={{ duration: 0.2 }}
      >
        {activeImg && (
          <img
            src={activeImg}
            alt="Project Preview"
            className="object-cover w-full h-full"
          />
        )}
      </motion.div>
    </section>
  );
}
