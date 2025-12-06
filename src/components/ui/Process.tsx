"use client";

import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Process() {
  const targetRef = useRef<HTMLDivElement>(null);
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
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const { scrollYProgress: exitProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const gradientY = useTransform(exitProgress, [0, 1], ["0vh", "100vh"]);

  // --- Animations ---

  // Progress Bar
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // Text Opacity (Highlighting steps sequentially)
  // Step 1: Active early
  const opacity1 = useTransform(scrollYProgress, [0, 0.3], [0.3, 1]);
  const color1 = useTransform(scrollYProgress, [0, 0.3], ["#6b7280", "#ffffff"]); // gray-500 to white

  // Step 2: Active middle
  const opacity2 = useTransform(scrollYProgress, [0.3, 0.6], [0.3, 1]);
  const color2 = useTransform(scrollYProgress, [0.3, 0.6], ["#6b7280", "#ffffff"]);

  // Step 3: Active end
  const opacity3 = useTransform(scrollYProgress, [0.6, 0.9], [0.3, 1]);
  const color3 = useTransform(scrollYProgress, [0.6, 0.9], ["#6b7280", "#ffffff"]);

  // CTA Animation (Appears at the very end inside the circle)
  const ctaOpacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);
  const ctaScale = useTransform(scrollYProgress, [0.9, 1], [0.5, 1]);
  const ctaPointerEvents = useTransform(scrollYProgress, (v) => (v > 0.95 ? "auto" : "none"));

  // Visual Object Transformations
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const borderRadius = useTransform(scrollYProgress, [0.6, 0.9], ["0%", "50%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1]);
  
  // Background color transition for the object
  // 0-0.3: Wireframe (handled via border/bg classes)
  // 0.3-0.6: Filling up
  // 0.6-1.0: Glowing Sphere
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.4, 1],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.1)", "rgba(255, 255, 255, 1)"]
  );
  
  const borderColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["rgba(255, 255, 255, 0.5)", "rgba(255, 255, 255, 0)"]
  );

  const boxShadow = useTransform(
    scrollYProgress,
    [0.8, 1],
    ["0px 0px 0px rgba(255,255,255,0)", "0px 0px 50px rgba(255,255,255,0.8)"]
  );

  return (
    <section
      id="process"
      ref={targetRef}
      className="relative h-[300vh] text-white"
    >
      <div className={`sticky top-0 h-screen flex items-center overflow-hidden bg-noise ${isMobile ? 'items-start pt-24' : isNestHub ? 'items-start pt-32' : ''}`}>
        <div className="w-full h-full flex items-center">
          <div className={`${isNestHub ? 'max-w-4xl' : 'max-w-7xl'} mx-auto w-full px-6 grid grid-cols-1 md:grid-cols-2 ${isSmallHeight ? 'gap-2' : 'gap-6'} md:gap-12 items-center`}>
            
            {/* --- Left Column: Steps --- */}
            <div className="relative pl-12">
              {/* Vertical Progress Bar Track */}
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gray-800 rounded-full" />
              
              {/* Active Progress Bar */}
              <motion.div
                style={{ scaleY, transformOrigin: "top" }}
                className="absolute left-0 top-0 bottom-0 w-[2px] bg-white rounded-full"
              />

              <div className={`space-y-8 ${isNestHub ? 'md:space-y-10 py-4' : 'md:space-y-24 py-4 md:py-12'}`}>
                {/* Step 1 */}
                <motion.div style={{ opacity: opacity1, color: color1 }} className="transition-colors">
                  <h3 className={`text-3xl ${isNestHub ? 'md:text-4xl' : 'md:text-6xl'} font-bold font-display mb-2 md:mb-4`}>
                    01. Idea
                  </h3>
                  <p className={`text-lg ${isNestHub ? 'md:text-xl' : 'md:text-2xl'} font-light`}>
                    ¿Tienes una idea? Hablemos.
                  </p>
                </motion.div>

                {/* Step 2 */}
                <motion.div style={{ opacity: opacity2, color: color2 }} className="transition-colors">
                  <h3 className={`text-3xl ${isNestHub ? 'md:text-4xl' : 'md:text-6xl'} font-bold font-display mb-2 md:mb-4`}>
                    02. Diseño
                  </h3>
                  <p className={`text-lg ${isNestHub ? 'md:text-xl' : 'md:text-2xl'} font-light`}>
                    Definir alcances y diseño.
                  </p>
                </motion.div>

                {/* Step 3 */}
                <motion.div style={{ opacity: opacity3, color: color3 }} className="transition-colors">
                  <h3 className={`text-3xl ${isNestHub ? 'md:text-4xl' : 'md:text-6xl'} font-bold font-display mb-2 md:mb-4`}>
                    03. Entrega
                  </h3>
                  <p className={`text-lg ${isNestHub ? 'md:text-xl' : 'md:text-2xl'} font-light`}>
                    Entrega de producto final.
                  </p>
                </motion.div>
              </div>
            </div>

            {/* --- Right Column: Visual Object --- */}
            <div className="flex items-center justify-center h-full">
              <div className={`relative flex items-center justify-center ${
                isMobile ? 'w-[300px] h-[300px]' : 
                isTablet ? 'w-[340px] h-[340px]' : 
                isNestHub ? 'w-[280px] h-[280px]' :
                'w-[400px] h-[400px]'
              }`}>
                {/* The Morphing Object */}
                <motion.div
                  style={{
                    rotate,
                    borderRadius,
                    scale,
                    backgroundColor,
                    borderColor,
                    boxShadow
                  }}
                  className={`border-2 backdrop-blur-sm flex items-center justify-center overflow-hidden ${
                    isMobile ? 'w-48 h-48' : 
                    isTablet ? 'w-56 h-56' : 
                    isNestHub ? 'w-44 h-44' :
                    'w-64 h-64'
                  }`}
                >
                  {/* CTA inside the circle */}
                  <motion.div
                    style={{ 
                      opacity: ctaOpacity, 
                      scale: ctaScale,
                      pointerEvents: ctaPointerEvents
                    }}
                    className="text-center"
                  >
                    <Link 
                      href="/process"
                      className="group flex flex-col items-center gap-2 text-black font-bold"
                    >
                      <span className="text-lg md:text-xl tracking-tight">Ver Proceso</span>
                      <div className="bg-black text-white rounded-full p-2 group-hover:scale-110 transition-transform">
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </Link>
                  </motion.div>
                </motion.div>
                
                {/* Optional: Background glow or elements to enhance depth */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-purple-900/20 to-blue-900/20 blur-3xl rounded-full opacity-50" />
              </div>
            </div>

          </div>
        </div>
        <motion.div style={{ y: gradientY }} className={`absolute top-0 left-0 w-full ${isMobile ? "h-32" : "h-64"} bg-gradient-to-b from-black via-black/90 to-transparent z-50 pointer-events-none`} />
      </div>
    </section>
  );
}