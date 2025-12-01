"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Code2, Palette, GraduationCap, Layout, Smartphone, Lightbulb } from "lucide-react";

const skills = [
  { name: "Figma", icon: <Palette size={16} /> },
  { name: "Next.js", icon: <Code2 size={16} /> },
  { name: "Moodle", icon: <GraduationCap size={16} /> },
  { name: "UX Strategy", icon: <Lightbulb size={16} /> },
  { name: "Tailwind CSS", icon: <Layout size={16} /> },
  { name: "Responsive Design", icon: <Smartphone size={16} /> },
];

export default function AboutMe() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // --- Animations ---
  
  // Phase 1 -> 2: Image moves left and shrinks
  // 0.0 - 0.2: Static center
  // 0.2 - 0.5: Move to left, scale down
  const imageScale = useTransform(scrollYProgress, [0, 0.2, 0.5], [1, 1, 0.8]);
  const imageLeft = useTransform(scrollYProgress, [0, 0.2, 0.5], ["50%", "50%", "25%"]);
  
  // Title Fades out as we move to bio
  const titleOpacity = useTransform(scrollYProgress, [0.1, 0.3], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0.1, 0.3], [0, -20]);

  // Bio Content Appears
  const contentOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  const contentX = useTransform(scrollYProgress, [0.4, 0.6], [50, 0]);
  
  // Chips Appear
  const chipsOpacity = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);
  const chipsY = useTransform(scrollYProgress, [0.6, 0.8], [20, 0]);

  return (
    <section 
      ref={containerRef} 
      className="relative h-[300vh] bg-neutral-50"
    >
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
        
        {/* --- Image Section --- */}
        <motion.div 
          style={{ 
            left: imageLeft,
            scale: imageScale,
            x: "-50%", // Always center the element on its anchor point
            y: "-50%",
            top: "50%"
          }}
          className="absolute z-10 flex flex-col items-center justify-center w-[300px] md:w-[400px]"
        >
          {/* Image Container */}
          <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl bg-white">
             {/* Placeholder / Real Image */}
             <div className="absolute inset-0 bg-neutral-200" />
             {/* 
                Replace this div with <Image /> when you have the file.
                Example:
                <Image src="/images/me.png" alt="Juan Diego" fill className="object-cover" />
             */}
             <div className="absolute inset-0 flex items-center justify-center text-neutral-400">
                <span className="text-lg font-medium">/images/me.png</span>
             </div>
             
             {/* Overlay Gradient for depth */}
             <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {/* Initial Title (Fades out) */}
          <motion.div 
            style={{ opacity: titleOpacity, y: titleY }}
            className="absolute -bottom-20 text-center w-full"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight">
              Juan Diego Gómez
            </h2>
            <p className="text-neutral-500 mt-2 text-lg">Diseñador & Estratega</p>
          </motion.div>
        </motion.div>


        {/* --- Content Section (Right Side) --- */}
        <motion.div 
          style={{ 
            opacity: contentOpacity, 
            x: contentX,
            left: "55%", // Starts from slightly right of center
            top: "50%",
            y: "-50%"
          }}
          className="absolute w-[90%] md:w-[40%] max-w-xl z-0"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6 leading-tight">
            Digital Wizard & <br/>
            <span className="text-blue-600">UX Strategist</span>
          </h3>
          
          <p className="text-lg text-neutral-600 leading-relaxed mb-8">
            Me especializo en transformar problemas complejos en interfaces simples y elegantes. 
            Con una combinación única de diseño visual y pensamiento estratégico, ayudo a marcas 
            y educadores a conectar con su audiencia de manera significativa.
          </p>
          
          <p className="text-lg text-neutral-600 leading-relaxed mb-8">
            Mi enfoque se centra en la experiencia del usuario, asegurando que cada interacción 
            sea intuitiva, accesible y memorable.
          </p>

          {/* Skills Chips */}
          <motion.div 
            style={{ opacity: chipsOpacity, y: chipsY }}
            className="flex flex-wrap gap-3"
          >
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-neutral-200 rounded-full shadow-sm text-neutral-700 text-sm font-medium hover:border-blue-200 hover:text-blue-600 transition-colors"
              >
                {skill.icon}
                {skill.name}
              </div>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
