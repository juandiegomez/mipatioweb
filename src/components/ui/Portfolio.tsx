"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, X, Calendar, User, Tag, ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Alianza Bioversity & CIAT",
    category: "Capacitación Corporativa",
    role: "Lead Developer",
    year: "2023",
    description: "Estrategia de capacitación internacional y actualización de políticas corporativas.",
    link: "/work/bioversity-ciat-alliance",
    image: "/images/bioversity-cover.jpg"
  },
  {
    id: 2,
    title: "Aulas Virtuales ENDEPORTE",
    category: "LMS & Transformación Digital",
    role: "Digital Transformation Lead",
    year: "2023",
    description: "Transformación digital y creación de aulas virtuales para oferta académica remota.",
    link: "/work/endeporte-aulas-virtuales",
    image: "/images/endeporte-cover.jpg"
  },
  {
    id: 3,
    title: "IMBERA Cooling",
    category: "E-Learning Corporativo",
    role: "Lead Designer",
    year: "2023",
    description: "Material gráfico y multimedia para cursos de ética y cumplimiento corporativo.",
    link: "/work/imbera",
    image: "/images/imbera-cover.jpg"
  },
  {
    id: 4,
    title: "Colegio El Pinar",
    category: "Diseño Web & Branding",
    role: "Web Designer",
    year: "2023",
    description: "Renovación total del sitio web e identidad visual institucional.",
    link: "/work/colegio-el-pinar",
    image: "/images/pinar-cover.jpg"
  },
  {
    id: 5,
    title: "ePortafolio USB Cali",
    category: "Diseño de Producto",
    role: "Product Designer",
    year: "2023",
    description: "Vitrina dinámica de servicios de capacitación corporativa.",
    link: "/work/eportafolio",
    image: "/images/eportafolio-cover.jpg"
  },
  {
    id: 6,
    title: "eCampus & MiCampus",
    category: "Desarrollo LMS",
    role: "LMS Developer",
    year: "2022",
    description: "Desarrollo de plataformas educativas Moodle y portales de acceso.",
    link: "/work/ecampus",
    image: "/images/ecampus-cover.jpg"
  },
  {
    id: 7,
    title: "Centro de Educación Virtual",
    category: "Estrategia Web",
    role: "Web Strategist",
    year: "2022",
    description: "Transformación de la presencia digital y portal de cursos.",
    link: "/work/centro-educacion-virtual",
    image: "/images/cev-cover.jpg"
  }
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [visibleProjects, setVisibleProjects] = useState<typeof projects>([]);
  const [isSmallHeight, setIsSmallHeight] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isNestHub, setIsNestHub] = useState(false);
  
  const targetRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // Desktop Horizontal Scroll
  const x = useTransform(scrollYProgress, [0, 1], ["0%", isTablet ? "-85%" : "-65%"]);

  // Mobile Stacked Animation
  const card1Y = useTransform(scrollYProgress, [0.1, 0.3], ["100vh", "0vh"]);
  const card2Y = useTransform(scrollYProgress, [0.3, 0.5], ["100vh", "0vh"]);
  const card3Y = useTransform(scrollYProgress, [0.5, 0.7], ["100vh", "0vh"]);
  const ctaY   = useTransform(scrollYProgress, [0.7, 0.9], ["100vh", "0vh"]);

  const card1Rotate = useTransform(scrollYProgress, [0.3, 0.5], [0, -3]);
  const card2Rotate = useTransform(scrollYProgress, [0.5, 0.7], [0, 3]);
  const card3Rotate = useTransform(scrollYProgress, [0.7, 0.9], [0, -2]);

  const card1Scale = useTransform(scrollYProgress, [0.3, 0.5], [1, 0.95]);
  const card2Scale = useTransform(scrollYProgress, [0.5, 0.7], [1, 0.95]);
  const card3Scale = useTransform(scrollYProgress, [0.7, 0.9], [1, 0.95]);

  useEffect(() => {
    const shuffled = [...projects].sort(() => 0.5 - Math.random());
    setVisibleProjects(shuffled.slice(0, 3));

    const checkLayout = () => {
      setIsSmallHeight(window.innerHeight < 750);
      setIsTablet(window.innerWidth < 1280);
      setIsNestHub(window.innerWidth === 1024 && window.innerHeight === 600);
    };
    
    checkLayout();
    window.addEventListener('resize', checkLayout);
    return () => window.removeEventListener('resize', checkLayout);
  }, []);

  return (
    <section ref={targetRef} id="portfolio" className="bg-white relative h-[350vh] md:h-[250vh]">
      
      {/* --- MOBILE VIEW (Stacked Scroll Animation) --- */}
      <div className="md:hidden sticky top-0 h-screen overflow-hidden">
        <div className="relative w-full h-full flex flex-col items-center justify-center px-6">
          
          {/* Title Layer */}
          <div className={`absolute ${isSmallHeight ? "top-16" : "top-24"} left-6 right-6 z-0`}>
            <h2 className="text-4xl font-bold text-black mb-4 leading-tight font-display">
              Trabajos <br />
              <span className="text-neutral-400">Seleccionados</span>
            </h2>
            <p className="text-neutral-500 text-lg">Desliza para descubrir &darr;</p>
          </div>

          {/* Card 1 */}
          {visibleProjects[0] && (
            <motion.div 
              style={{ y: card1Y, rotate: card1Rotate, scale: card1Scale, zIndex: 10 }} 
              className={`absolute ${isSmallHeight ? "top-44" : "top-64"} w-full max-w-sm`}
              onClick={() => setSelectedProject(visibleProjects[0])}
            >
              <div className="relative w-full h-[450px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={visibleProjects[0].image}
                  alt={visibleProjects[0].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end items-end text-right">
                  <h3 className="text-3xl font-bold text-white font-display mb-2">{visibleProjects[0].title}</h3>
                  <p className="text-neutral-300 text-sm">Ver detalles</p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Card 2 */}
          {visibleProjects[1] && (
            <motion.div 
              style={{ y: card2Y, rotate: card2Rotate, scale: card2Scale, zIndex: 20 }} 
              className={`absolute ${isSmallHeight ? "top-44" : "top-64"} w-full max-w-sm`}
              onClick={() => setSelectedProject(visibleProjects[1])}
            >
              <div className="relative w-full h-[450px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={visibleProjects[1].image}
                  alt={visibleProjects[1].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end items-end text-right">
                  <h3 className="text-3xl font-bold text-white font-display mb-2">{visibleProjects[1].title}</h3>
                  <p className="text-neutral-300 text-sm">Ver detalles</p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Card 3 */}
          {visibleProjects[2] && (
            <motion.div 
              style={{ y: card3Y, rotate: card3Rotate, scale: card3Scale, zIndex: 30 }} 
              className={`absolute ${isSmallHeight ? "top-44" : "top-64"} w-full max-w-sm`}
              onClick={() => setSelectedProject(visibleProjects[2])}
            >
              <div className="relative w-full h-[450px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={visibleProjects[2].image}
                  alt={visibleProjects[2].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end items-end text-right">
                  <h3 className="text-3xl font-bold text-white font-display mb-2">{visibleProjects[2].title}</h3>
                  <p className="text-neutral-300 text-sm">Ver detalles</p>
                </div>
              </div>
            </motion.div>
          )}

          {/* CTA Card */}
          <motion.div 
            style={{ y: ctaY, zIndex: 40 }} 
            className={`absolute ${isSmallHeight ? "top-44" : "top-64"} w-full max-w-sm`}
          >
            <div className="w-full h-[450px] rounded-3xl bg-neutral-900 p-8 flex flex-col justify-center items-center text-center shadow-2xl">
              <h3 className="text-3xl font-bold text-white mb-6 font-display">¿Quieres ver más?</h3>
              <p className="text-neutral-400 text-lg mb-8">Explora el portafolio completo con todos nuestros proyectos.</p>
              <Link 
                href="/portfolio"
                className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-neutral-200 transition-colors"
              >
                Ver Todo <ArrowUpRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>

      {/* --- DESKTOP VIEW (Horizontal Scroll) --- */}
      <div className="hidden md:flex sticky top-0 h-screen items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="mb-12">
            <h2 className="text-4xl md:text-6xl font-bold text-black mb-6 tracking-tight font-display">
              Trabajos Seleccionados
            </h2>
            <div className="h-1 w-20 bg-black"></div>
          </div>

          {/* Horizontal Scroll Cards */}
          <motion.div style={{ x }} className="flex gap-8 md:gap-12 w-max">
            {visibleProjects.map((project) => (
              <motion.div
                key={project.id}
                layoutId={`card-container-${project.id}`}
                onClick={() => setSelectedProject(project)}
                className={`relative w-[85vw] ${isNestHub ? "md:w-[450px] md:h-[400px]" : "md:w-[600px] md:h-[500px]"} rounded-3xl overflow-hidden cursor-pointer shadow-xl group flex-shrink-0`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                
                <div className={`absolute bottom-0 left-0 w-full ${isNestHub ? "p-6" : "p-8"} flex flex-col justify-end items-end`}>
                  <div className="text-right">
                    <motion.h3 
                      layoutId={`title-${project.id}`}
                      className={`${isNestHub ? "text-2xl" : "text-2xl md:text-4xl"} font-bold text-white font-display mb-2`}
                    >
                      {project.title}
                    </motion.h3>
                    <p className="text-neutral-300 text-sm md:text-base font-light opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-300">
                      Click para ver detalles
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
            
            {/* View All Link as the last item in the scroll */}
            <div className={`flex items-center justify-center w-[300px] ${isNestHub ? "md:w-[300px] md:h-[400px]" : "md:w-[400px] md:h-[500px]"}`}>
               <Link 
                href="/portfolio"
                className="group flex flex-col items-center gap-4 text-2xl font-bold text-black hover:opacity-70 transition-opacity"
              >
                <div className="w-20 h-20 rounded-full border-2 border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-8 h-8" />
                </div>
                Ver todos los proyectos
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Expanded Modal */}

      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            
            <motion.div
              layoutId={`card-container-${selectedProject.id}`}
              className="bg-neutral-900 w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl relative z-10 flex flex-col md:flex-row overflow-hidden shadow-2xl"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 p-2 bg-black/50 rounded-full text-white hover:bg-white hover:text-black transition-colors"
              >
                <X size={24} />
              </button>

              {/* Image Section */}
              <div className="w-full md:w-1/2 h-[300px] md:h-auto relative">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent md:bg-gradient-to-r" />
              </div>

              {/* Content Section */}
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-neutral-900 text-white">
                <motion.h3 
                  layoutId={`title-${selectedProject.id}`}
                  className="text-3xl md:text-5xl font-bold font-display mb-6 leading-tight"
                >
                  {selectedProject.title}
                </motion.h3>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-neutral-400 text-sm uppercase tracking-wider">
                      <Tag size={14} /> Categoría
                    </div>
                    <p className="font-medium">{selectedProject.category}</p>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-neutral-400 text-sm uppercase tracking-wider">
                      <User size={14} /> Rol
                    </div>
                    <p className="font-medium">{selectedProject.role}</p>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-neutral-400 text-sm uppercase tracking-wider">
                      <Calendar size={14} /> Año
                    </div>
                    <p className="font-medium">{selectedProject.year}</p>
                  </div>
                </div>

                <p className="text-neutral-300 text-lg leading-relaxed mb-10">
                  {selectedProject.description}
                </p>

                <Link 
                  href={selectedProject.link}
                  className="inline-flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-neutral-200 transition-colors w-full md:w-auto"
                >
                  Ver Proyecto Completo <ArrowRight size={20} />
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
