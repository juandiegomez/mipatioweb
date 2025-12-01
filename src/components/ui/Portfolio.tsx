"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Alianza Bioversity & CIAT",
    category: "Capacitación Corporativa",
    link: "/work/bioversity-ciat-alliance",
    image: "/images/bioversity-cover.jpg"
  },
  {
    id: 2,
    title: "Aulas Virtuales ENDEPORTE",
    category: "Transformación Digital",
    link: "/work/endeporte-aulas-virtuales",
    image: "/images/endeporte-cover.jpg"
  },
  {
    id: 3,
    title: "IMBERA Cooling",
    category: "E-Learning Corporativo",
    link: "/work/imbera",
    image: "/images/imbera-cover.jpg"
  }
];

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isNestHub, setIsNestHub] = useState(false);

  useEffect(() => {
    const checkLayout = () => {
      setIsMobile(window.innerWidth < 768);
      setIsNestHub(window.innerWidth === 1024 && window.innerHeight === 600);
    };
    checkLayout();
    window.addEventListener("resize", checkLayout);
    return () => window.removeEventListener("resize", checkLayout);
  }, []);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const { scrollYProgress: exitProgress } = useScroll({
    target: containerRef,
    offset: ["end end", "end start"]
  });
  const gradientY = useTransform(exitProgress, [0, 1], ["0vh", "100vh"]);

  // Animations for the cards
  const yStart = isMobile ? 20 : 50;
  const y1 = useTransform(scrollYProgress, [0, 0.2], [yStart, 0]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  const y2 = useTransform(scrollYProgress, [0.2, 0.4], [yStart, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);

  const y3 = useTransform(scrollYProgress, [0.4, 0.6], [yStart, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  
  // CTA Animation
  const ctaOpacity = useTransform(scrollYProgress, [0.7, 0.8], [0, 1]);
  const ctaY = useTransform(scrollYProgress, [0.7, 0.8], [20, 0]);

  return (
    <section ref={containerRef} id="portfolio" className="h-[250vh] relative bg-white">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div style={{ y: gradientY }} className={`absolute top-0 left-0 w-full ${isMobile ? "h-32" : "h-64"} bg-gradient-to-b from-white via-white/90 to-transparent z-[60] pointer-events-none`} />
        <div className={`max-w-7xl mx-auto px-6 h-full flex flex-col justify-start md:justify-center ${isNestHub ? "pt-6" : "pt-28 md:pt-0"}`}>
          
          {/* Header */}
          <div className={`shrink-0 ${isNestHub ? "mb-6" : "mb-4 md:mb-20"}`}>
            <h2 className={`${isNestHub ? "text-4xl mb-3" : "text-4xl md:text-6xl mb-2 md:mb-6"} font-bold text-black tracking-tight font-display`}>
              Proyectos
            </h2>
            <div className="h-1 w-20 bg-black"></div>
          </div>

          {/* Cards Container */}
          <div className={`grid grid-cols-1 grid-rows-3 md:grid-cols-3 md:grid-rows-1 w-full flex-1 md:flex-none min-h-0 ${isNestHub ? "gap-4" : "gap-4 md:gap-8"}`}>
            
            {/* Card 1 */}
            <motion.div style={{ y: y1, opacity: opacity1 }} className="h-full min-h-0">
               <ProjectCard project={projects[0]} isMobile={isMobile} isNestHub={isNestHub} />
            </motion.div>

            {/* Card 2 */}
            <motion.div style={{ y: y2, opacity: opacity2 }} className="h-full min-h-0">
               <ProjectCard project={projects[1]} isMobile={isMobile} isNestHub={isNestHub} />
            </motion.div>

            {/* Card 3 */}
            <motion.div style={{ y: y3, opacity: opacity3 }} className="h-full min-h-0">
               <ProjectCard project={projects[2]} isMobile={isMobile} isNestHub={isNestHub} />
            </motion.div>

          </div>

          {/* CTA */}
          <motion.div 
            style={{ opacity: ctaOpacity, y: ctaY }}
            className={`flex justify-center shrink-0 ${isNestHub ? "mt-6 pb-4" : "mt-6 md:mt-16 pb-8 md:pb-0"}`}
          >
            <Link 
              href="/portfolio"
              className={`group inline-flex items-center gap-3 bg-black text-white rounded-full font-bold hover:scale-105 transition-transform ${isNestHub ? "px-6 py-3 text-base" : "px-6 py-3 md:px-8 md:py-4 text-base md:text-lg"}`}
            >
              Ver todos los proyectos <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, isMobile, isNestHub }: { project: any, isMobile: boolean, isNestHub?: boolean }) {
  return (
    <Link href={project.link} className="group h-full md:h-auto flex flex-col md:block">
      <div className={`relative overflow-hidden rounded-2xl flex-1 md:flex-none w-full ${isNestHub ? "md:aspect-[4/3] mb-2" : "md:aspect-[3/4] mb-2 md:mb-4"}`}>
        <div className="absolute inset-0 bg-neutral-200 group-hover:scale-105 transition-transform duration-700 ease-out">
          <img 
            src={project.image} 
            alt={project.title}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
        
        {/* Mobile Overlay */}
        {isMobile && (
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-5">
            <h3 className="text-white text-xl font-bold font-display leading-tight mb-1">
              {project.title}
            </h3>
            <p className="text-gray-300 text-xs font-medium">
              {project.category}
            </p>
          </div>
        )}

        {!isMobile && (
          <div className="absolute top-4 right-4 bg-white rounded-full p-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg hidden md:block">
            <ArrowUpRight className="w-5 h-5 text-black" />
          </div>
        )}
      </div>
      
      {/* Desktop Text */}
      {!isMobile && (
        <div className="shrink-0">
          <h3 className={`${isNestHub ? "text-lg" : "text-lg md:text-2xl"} font-bold text-black mb-1 font-display group-hover:underline decoration-2 underline-offset-4 truncate`}>
            {project.title}
          </h3>
          <p className={`${isNestHub ? "text-sm" : "text-neutral-500 text-xs md:text-base"} truncate`}>
            {project.category}
          </p>
        </div>
      )}
    </Link>
  )
}
