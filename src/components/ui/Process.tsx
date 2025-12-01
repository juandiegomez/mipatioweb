"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Process() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

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
      ref={targetRef}
      className="relative h-[300vh] text-white"
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden bg-noise">
        <div className="w-full h-full flex items-center">
          <div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* --- Left Column: Steps --- */}
            <div className="relative pl-12">
              {/* Vertical Progress Bar Track */}
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gray-800 rounded-full" />
              
              {/* Active Progress Bar */}
              <motion.div
                style={{ scaleY, transformOrigin: "top" }}
                className="absolute left-0 top-0 bottom-0 w-[2px] bg-white rounded-full"
              />

              <div className="space-y-24 py-12">
                {/* Step 1 */}
                <motion.div style={{ opacity: opacity1, color: color1 }} className="transition-colors">
                  <h3 className="text-4xl md:text-6xl font-bold font-display mb-4">
                    01. Idea
                  </h3>
                  <p className="text-xl md:text-2xl font-light">
                    ¿Tienes una idea? Hablemos.
                  </p>
                </motion.div>

                {/* Step 2 */}
                <motion.div style={{ opacity: opacity2, color: color2 }} className="transition-colors">
                  <h3 className="text-4xl md:text-6xl font-bold font-display mb-4">
                    02. Diseño
                  </h3>
                  <p className="text-xl md:text-2xl font-light">
                    Definir alcances y diseño.
                  </p>
                </motion.div>

                {/* Step 3 */}
                <motion.div style={{ opacity: opacity3, color: color3 }} className="transition-colors">
                  <h3 className="text-4xl md:text-6xl font-bold font-display mb-4">
                    03. Entrega
                  </h3>
                  <p className="text-xl md:text-2xl font-light">
                    Entrega de producto final.
                  </p>
                </motion.div>
              </div>
            </div>

            {/* --- Right Column: Visual Object --- */}
            <div className="flex items-center justify-center h-full">
              <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] flex items-center justify-center">
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
                  className="w-48 h-48 md:w-64 md:h-64 border-2 backdrop-blur-sm flex items-center justify-center overflow-hidden"
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
      </div>
    </section>
  );
}