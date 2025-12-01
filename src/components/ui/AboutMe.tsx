"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Code2, Palette, GraduationCap, Layout, Smartphone, Lightbulb, ArrowRight } from "lucide-react";

const skills = [
  { name: "Estrategia de Producto", icon: <Lightbulb size={16} /> },
  { name: "Diseño UI/UX", icon: <Palette size={16} /> },
  { name: "Desarrollo Creativo", icon: <Code2 size={16} /> },
  { name: "Tecnología Educativa", icon: <GraduationCap size={16} /> },
  { name: "Sistemas de Diseño", icon: <Layout size={16} /> },
  { name: "Experiencias Interactivas", icon: <Smartphone size={16} /> },
];

export default function AboutMe() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isSmallHeight, setIsSmallHeight] = useState(false);
  const [isNestHub, setIsNestHub] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
      setIsSmallHeight(height < 700);
      setIsNestHub(width >= 1024 && height <= 600);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const { scrollYProgress: exitProgress } = useScroll({
    target: containerRef,
    offset: ["end end", "end start"],
  });

  const gradientY = useTransform(exitProgress, [0, 1], ["0vh", "100vh"]);

  // --- Animations ---
  
  // 1. Image Movement
  // Desktop: Moves Left | Mobile: Moves Up | Tablet: Moves Up (Centered)
  const imageLeft = useTransform(scrollYProgress, [0, 0.2, 0.5], 
    isMobile ? ["50%", "50%", "50%"] : 
    isTablet ? ["50%", "50%", "50%"] : 
    isNestHub ? ["50%", "50%", "22%"] :
    ["50%", "50%", "20%"]
  ); 
  
  const imageTop = useTransform(scrollYProgress, [0, 0.2, 0.5], 
    isMobile ? ["50%", "50%", isSmallHeight ? "15%" : "18%"] : 
    isTablet ? ["50%", "50%", "22%"] : 
    ["50%", "50%", "50%"]
  );

  const imageScale = useTransform(scrollYProgress, [0, 0.2, 0.5], 
    isMobile ? [0.6, 0.6, isSmallHeight ? 0.35 : 0.42] : 
    isTablet ? [0.8, 0.8, 0.55] : 
    isNestHub ? [0.7, 0.7, 0.55] :
    [1, 1, 0.8]
  );
  
  const imageRotate = useTransform(scrollYProgress, [0.2, 0.5], [0, -3]);

  // 2. Initial Name Fade Out
  const nameOpacity = useTransform(scrollYProgress, [0.1, 0.25], [1, 0]);
  const nameScale = useTransform(scrollYProgress, [0.1, 0.25], [1, 0.8]);

  // 3. Content Entry Staggering
  // Title "Artesano Digital"
  const title1Opacity = useTransform(scrollYProgress, isMobile ? [0.2, 0.3] : [0.3, 0.4], [0, 1]);
  const title1X = useTransform(scrollYProgress, isMobile ? [0.2, 0.3] : [0.3, 0.4], [50, 0]);

  // Title "Multidisciplinario" (Gradient)
  const title2Opacity = useTransform(scrollYProgress, isMobile ? [0.3, 0.4] : [0.4, 0.5], [0, 1]);
  const title2Scale = useTransform(scrollYProgress, isMobile ? [0.3, 0.4] : [0.4, 0.5], [0.8, 1]);
  const underlineScaleX = useTransform(scrollYProgress, isMobile ? [0.35, 0.5] : [0.45, 0.6], [0, 1]);
  
  // Paragraph 1
  const p1Opacity = useTransform(scrollYProgress, isMobile ? [0.4, 0.5] : [0.5, 0.6], [0, 1]);
  const p1Y = useTransform(scrollYProgress, isMobile ? [0.4, 0.5] : [0.5, 0.6], [20, 0]);

  // Paragraph 2
  const p2Opacity = useTransform(scrollYProgress, isMobile ? [0.5, 0.6] : [0.6, 0.7], [0, 1]);
  const p2Y = useTransform(scrollYProgress, isMobile ? [0.5, 0.6] : [0.6, 0.7], [20, 0]);

  // Skills & CTA
  const extrasOpacity = useTransform(scrollYProgress, isMobile ? [0.6, 0.7] : [0.7, 0.82], [0, 1]);
  const extrasY = useTransform(scrollYProgress, isMobile ? [0.6, 0.7] : [0.7, 0.82], [30, 0]);

  return (
    <section 
      id="about"
      ref={containerRef} 
      className="relative h-[280vh] md:h-[350vh] bg-neutral-50"
    >
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
        
        {/* --- Image Section --- */}
        <motion.div 
          style={{ 
            left: imageLeft,
            top: imageTop,
            scale: imageScale,
            rotate: imageRotate,
            x: "-50%", 
            y: "-50%",
          }}
          className="absolute z-10 flex flex-col items-center justify-center w-[300px] md:w-[300px] lg:w-[450px]"
        >
           {/* Image Card */}
           <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl bg-white border-4 border-white">
             <div className="absolute inset-0 bg-neutral-200" />
             <div className="absolute inset-0 flex items-center justify-center text-neutral-400">
                <span className="text-lg font-medium">/images/me.png</span>
             </div>
             <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {/* Initial Name Label */}
          <motion.div 
            style={{ opacity: nameOpacity, scale: nameScale }}
            className="absolute -bottom-24 text-center w-full"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-neutral-900 tracking-tight font-display">
              Juan Diego
            </h2>
            <p className="text-neutral-500 mt-2 text-xl font-light">Diseñador & Estratega</p>
          </motion.div>
        </motion.div>


        {/* --- Content Section (Right Side) --- */}
        <div className={`absolute left-0 md:left-0 ${isNestHub ? 'lg:left-[38%]' : 'lg:left-[45%]'} top-[29%] md:top-0 h-[71%] md:h-full w-full md:w-full ${isNestHub ? 'lg:w-[60%]' : 'lg:w-[50%]'} flex flex-col justify-start md:justify-start lg:justify-center px-6 md:px-12 ${isNestHub ? 'lg:px-8' : 'lg:pl-24 lg:pr-6'} pt-0 md:pt-[38vh] lg:pt-0 ${isSmallHeight && isMobile ? 'top-[25%]' : ''} z-20`}>
            
            {/* Title Block */}
            <div className={`mb-4 md:mb-8 lg:mb-8 text-center md:text-center lg:text-left md:pl-0 lg:pl-0 ${isSmallHeight && isMobile ? 'mb-2' : ''} ${isNestHub ? 'lg:mb-4' : ''}`}>
                <motion.h3 
                    style={{ opacity: title1Opacity, x: title1X }}
                    className={`${isSmallHeight && isMobile ? 'text-2xl' : 'text-3xl'} md:text-5xl lg:text-6xl ${isNestHub ? 'lg:text-4xl' : ''} font-bold text-neutral-900 leading-tight font-display`}
                >
                    Artesano Digital
                </motion.h3>
                <motion.h3 
                    style={{ opacity: title2Opacity, scale: title2Scale, transformOrigin: (isMobile || isTablet) ? "center" : "left center" }}
                    className={`${isSmallHeight && isMobile ? 'text-2xl' : 'text-3xl'} md:text-5xl lg:text-6xl ${isNestHub ? 'lg:text-4xl' : ''} font-bold leading-tight font-display text-neutral-900 relative inline-block`}
                >
                    <span className="relative z-10">Multidisciplinario</span>
                    <motion.span 
                        style={{ scaleX: underlineScaleX, transformOrigin: "left" }}
                        className="absolute bottom-1 md:bottom-2 left-0 w-full h-[8px] md:h-[12px] -z-10 bg-gradient-to-r from-purple-600 via-lime-500 via-orange-500 to-blue-600" 
                    />
                </motion.h3>
            </div>
          
            {/* Paragraphs */}
            <motion.p 
                style={{ opacity: p1Opacity, y: p1Y }}
                className={`${isSmallHeight && isMobile ? 'text-sm mb-2' : 'text-base mb-3'} md:text-lg lg:text-xl ${isNestHub ? 'lg:text-base lg:mb-3' : ''} text-neutral-600 leading-relaxed md:mb-6 max-w-lg mx-auto md:mx-auto lg:mx-0 text-center md:text-center lg:text-left md:max-w-2xl`}
            >
                Me especializo en transformar problemas complejos en interfaces simples y elegantes. 
                Con una combinación única de diseño visual y pensamiento estratégico.
            </motion.p>
            
            <motion.p 
                style={{ opacity: p2Opacity, y: p2Y }}
                className={`${isSmallHeight && isMobile ? 'text-sm mb-4' : 'text-base mb-6'} md:text-lg lg:text-xl ${isNestHub ? 'lg:text-base lg:mb-6' : ''} text-neutral-600 leading-relaxed md:mb-10 max-w-lg mx-auto md:mx-auto lg:mx-0 text-center md:text-center lg:text-left md:max-w-2xl`}
            >
                Ayudo a marcas y educadores a conectar con su audiencia de manera significativa, 
                asegurando que cada interacción sea intuitiva, accesible y memorable.
            </motion.p>

            {/* Skills & CTA */}
            <motion.div style={{ opacity: extrasOpacity, y: extrasY }} className="flex flex-col items-center md:items-center lg:items-start">
                <div className={`flex flex-wrap justify-center md:justify-center lg:justify-start gap-2 md:gap-3 ${isSmallHeight && isMobile ? 'mb-4' : 'mb-6'} md:mb-10 ${isNestHub ? 'lg:mb-6' : ''} max-w-lg`}>
                    {skills.map((skill, index) => (
                    <div 
                        key={index}
                        className={`flex items-center gap-2 px-3 py-1.5 md:px-3 md:py-1.5 lg:px-4 lg:py-2 bg-white border border-neutral-200 rounded-full shadow-sm text-neutral-700 ${isSmallHeight && isMobile ? 'text-[10px]' : 'text-xs'} md:text-sm ${isNestHub ? 'lg:text-xs lg:px-3 lg:py-1.5' : ''} font-medium hover:border-blue-200 hover:text-blue-600 transition-colors`}
                    >
                        {skill.icon}
                        {skill.name}
                    </div>
                    ))}
                </div>

                <Link 
                    href="/about"
                    className="group relative inline-flex items-center gap-2 text-neutral-900 font-semibold text-base md:text-lg pb-1"
                >
                    <span className="relative inline-flex items-center gap-2">
                        Un poco más sobre mí <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-purple-500 via-lime-400 via-orange-500 to-blue-600 transition-all duration-300 group-hover:w-full" />
                </Link>
            </motion.div>
        </div>

        {/* Gradient Overlay - Placed last to ensure it's on top */}
        <motion.div style={{ y: gradientY }} className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-neutral-50 via-neutral-50/90 to-transparent z-50 pointer-events-none" />

      </div>
    </section>
  );
}
