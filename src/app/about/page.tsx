"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Bike, Dog, Music, Sparkles, ArrowRight, Gamepad2, Coffee, BookOpen, Maximize2 } from "lucide-react";
import Link from "next/link";

// --- Data ---
const clients = [
  "Universidad de San Buenaventura Cali", "Escuela Nacional del Deporte", "Imbera Cooling", "Colegio El Pinar",
  "Bioversity & CIAT Alliance", "Clínica de Occidente", "Cámara de Comercio de Cali", "Vectorial Agencia",
  "Banco W", "Fundación WWB", "Colombina", "Flor Suprema", "Atomic Studio SAS", "Rebujia S.A", "Bunglon Publicidad", "Jardín Plaza",
];

const skills = [
  { name: "UI Design", level: "90%" },
  { name: "Frontend", level: "75%" },
  { name: "Strategy", level: "85%" },
];

const funFacts = [
  { icon: <Bike size={48} strokeWidth={1.5} />, text: "Amante de la Bici" },
  { icon: <Dog size={48} strokeWidth={1.5} />, text: "Amante de los Animales" },
  { icon: <Music size={48} strokeWidth={1.5} />, text: "Bailarín de Techno" },
  { icon: <Sparkles size={48} strokeWidth={1.5} />, text: "Creyente del Karma" },
];

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // --- Transforms for Card 1 (Bio) ---
  // 0-0.2: Visible. 0.8-1.0: Moves to Top-Left Grid
  const c1Scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 0.95, 0.95, 1]);
  const c1Top = useTransform(scrollYProgress, [0.8, 1], ["0%", "15%"]);
  const c1Left = useTransform(scrollYProgress, [0.8, 1], ["0%", "2%"]);
  const c1Width = useTransform(scrollYProgress, [0.8, 1], ["100%", "47%"]);
  const c1Height = useTransform(scrollYProgress, [0.8, 1], ["100%", "40%"]);
  const c1Radius = useTransform(scrollYProgress, [0.8, 1], ["0px", "24px"]);

  // --- Transforms for Card 2 (Skills) ---
  // Enters at 0.2. 0.8-1.0: Moves to Top-Right Grid
  const c2Y = useTransform(scrollYProgress, [0.2, 0.3], ["100vh", "0vh"]);
  const c2Scale = useTransform(scrollYProgress, [0.3, 0.4, 0.8, 1], [1, 0.95, 0.95, 1]);
  const c2Top = useTransform(scrollYProgress, [0.8, 1], ["0%", "15%"]);
  const c2Left = useTransform(scrollYProgress, [0.8, 1], ["0%", "51%"]);
  const c2Width = useTransform(scrollYProgress, [0.8, 1], ["100%", "47%"]);
  const c2Height = useTransform(scrollYProgress, [0.8, 1], ["100%", "40%"]);
  const c2Radius = useTransform(scrollYProgress, [0.8, 1], ["0px", "24px"]);

  // --- Transforms for Card 3 (Experience) ---
  // Enters at 0.4. 0.8-1.0: Moves to Bottom-Left Grid
  const c3Y = useTransform(scrollYProgress, [0.4, 0.5], ["100vh", "0vh"]);
  const c3Scale = useTransform(scrollYProgress, [0.5, 0.6, 0.8, 1], [1, 0.95, 0.95, 1]);
  const c3Top = useTransform(scrollYProgress, [0.8, 1], ["0%", "57%"]);
  const c3Left = useTransform(scrollYProgress, [0.8, 1], ["0%", "2%"]);
  const c3Width = useTransform(scrollYProgress, [0.8, 1], ["100%", "47%"]);
  const c3Height = useTransform(scrollYProgress, [0.8, 1], ["100%", "40%"]);
  const c3Radius = useTransform(scrollYProgress, [0.8, 1], ["0px", "24px"]);

  // --- Transforms for Card 4 (Fun Facts) ---
  // Enters at 0.6. 0.8-1.0: Moves to Bottom-Right Grid
  const c4Y = useTransform(scrollYProgress, [0.6, 0.7], ["100vh", "0vh"]);
  const c4Top = useTransform(scrollYProgress, [0.8, 1], ["0%", "57%"]);
  const c4Left = useTransform(scrollYProgress, [0.8, 1], ["0%", "51%"]);
  const c4Width = useTransform(scrollYProgress, [0.8, 1], ["100%", "47%"]);
  const c4Height = useTransform(scrollYProgress, [0.8, 1], ["100%", "40%"]);
  const c4Radius = useTransform(scrollYProgress, [0.8, 1], ["0px", "24px"]);

  // --- Content Transforms (Dashboard Optimization) ---
  // 0.8-1.0: Transition to Dashboard
  const contentScale = useTransform(scrollYProgress, [0.8, 1], [1, 0.7]);
  const contentOpacity = useTransform(scrollYProgress, [0.8, 0.9], [1, 0]); // Hide non-essential elements
  const btnOpacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]); // Show expand buttons only at the end
  const titleOrigin = "left center";

  const scrollToSection = (progress: number) => {
    if (containerRef.current) {
      const totalHeight = containerRef.current.scrollHeight - window.innerHeight;
      window.scrollTo({ top: totalHeight * progress, behavior: "smooth" });
    }
  };

  return (
    <main ref={containerRef} className="relative h-[400vh] bg-neutral-950">
      
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-neutral-900 flex items-center justify-center">
        
        {/* --- Card 1: Bio --- */}
        <motion.div 
          style={{ 
            top: c1Top, left: c1Left, width: c1Width, height: c1Height, borderRadius: c1Radius, scale: c1Scale,
            zIndex: 10
          }}
          className="absolute bg-white overflow-hidden shadow-2xl group"
        >
          {/* Expand Button */}
          <motion.button
            style={{ opacity: btnOpacity }}
            onClick={() => scrollToSection(0.1)}
            className="absolute top-4 right-4 p-2 bg-neutral-100 rounded-full hover:bg-neutral-200 transition-colors z-50 pointer-events-auto"
          >
            <Maximize2 size={20} className="text-neutral-600" />
          </motion.button>

          <div className="w-full h-full flex flex-col md:flex-row">
            {/* Left: Text */}
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <motion.h2 
                style={{ scale: contentScale, transformOrigin: titleOrigin }}
                className="text-6xl md:text-8xl font-extrabold mb-6 text-neutral-900 font-display tracking-tighter leading-none"
              >
                JUAN<br/>DIEGO
              </motion.h2>
              <div className="space-y-4 text-lg text-neutral-600 font-sans leading-relaxed">
                <p>
                  Diseñador UX y Estratega Digital.
                </p>
                <motion.p style={{ opacity: contentOpacity }}>
                  Construyo ecosistemas digitales que funcionan, enseñan y conectan.
                </motion.p>
              </div>
            </div>
            {/* Right: Image Placeholder */}
            <div className="w-full md:w-1/2 p-8 md:p-12 flex items-center justify-center bg-neutral-50">
               <div className="w-full h-full bg-neutral-200 rounded-2xl border border-neutral-300 relative overflow-hidden">
                  {/* Placeholder for Image */}
                  <div className="absolute inset-0 flex items-center justify-center text-neutral-400 font-display text-xl">
                    /images/me.png
                  </div>
               </div>
            </div>
          </div>
        </motion.div>

        {/* --- Card 2: Skills --- */}
        <motion.div 
          style={{ 
            y: c2Y, top: c2Top, left: c2Left, width: c2Width, height: c2Height, borderRadius: c2Radius, scale: c2Scale,
            zIndex: 20
          }}
          className="absolute bg-neutral-50 overflow-hidden shadow-2xl group"
        >
          {/* Expand Button */}
          <motion.button
            style={{ opacity: btnOpacity }}
            onClick={() => scrollToSection(0.35)}
            className="absolute top-4 right-4 p-2 bg-white rounded-full hover:bg-neutral-100 transition-colors z-50 pointer-events-auto"
          >
            <Maximize2 size={20} className="text-neutral-600" />
          </motion.button>

          <div className="w-full h-full p-8 md:p-12 flex flex-col justify-center">
            <motion.h2 
              style={{ scale: contentScale, transformOrigin: titleOrigin }}
              className="text-4xl md:text-5xl font-bold mb-12 text-neutral-900 font-display"
            >
              Arsenal Creativo
            </motion.h2>
            <div className="space-y-8 max-w-xl w-full">
              {skills.map((skill, i) => (
                <div key={i} className="w-full">
                  <div className="flex justify-between mb-2 font-sans font-medium text-neutral-700">
                    <span>{skill.name}</span>
                    <span>{skill.level}</span>
                  </div>
                  <div className="h-4 w-full bg-neutral-200 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: skill.level }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full bg-neutral-900 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* --- Card 3: Experience --- */}
        <motion.div 
          style={{ 
            y: c3Y, top: c3Top, left: c3Left, width: c3Width, height: c3Height, borderRadius: c3Radius, scale: c3Scale,
            zIndex: 30
          }}
          className="absolute bg-white overflow-hidden shadow-2xl group"
        >
          {/* Expand Button */}
          <motion.button
            style={{ opacity: btnOpacity }}
            onClick={() => scrollToSection(0.55)}
            className="absolute top-4 right-4 p-2 bg-neutral-100 rounded-full hover:bg-neutral-200 transition-colors z-50 pointer-events-auto"
          >
            <Maximize2 size={20} className="text-neutral-600" />
          </motion.button>

          <div className="w-full h-full p-8 md:p-12 flex flex-col justify-center">
            <motion.h2 
              style={{ scale: contentScale, transformOrigin: titleOrigin }}
              className="text-4xl md:text-5xl font-bold mb-12 text-neutral-900 font-display"
            >
              Partners & Clientes
            </motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full h-full max-h-[60%] overflow-y-auto">
              {clients.slice(0, 8).map((client, i) => (
                <div 
                  key={i} 
                  className="border border-neutral-200 p-4 flex items-center justify-center text-center rounded-lg hover:bg-neutral-50 hover:border-neutral-400 transition-all duration-300 cursor-default"
                >
                  <span className="text-sm md:text-base font-bold text-neutral-800 font-display leading-tight">
                    {client}
                  </span>
                </div>
              ))}
              {/* Hidden items indicator for dashboard view */}
              <motion.div 
                 style={{ opacity: contentOpacity }}
                 className="col-span-2 md:col-span-3 text-center text-neutral-400 text-sm italic mt-2"
              >
                 + {clients.length - 8} más...
              </motion.div>
              
              {/* Full list visible only when not in dashboard (controlled by overflow-y-auto above, but we can limit rendering if needed) */}
              {/* Actually, let's just render all but hide overflow. The user wants to see them all in full view. */}
              {/* The slice(0,8) above limits it permanently. Let's fix this logic. */}
              {/* We need to show ALL clients, but in dashboard view the container height shrinks, causing overflow. */}
              {/* The user asked to "stack some". Let's render the rest but they will be hidden by overflow in dashboard. */}
              {clients.slice(8).map((client, i) => (
                <div 
                  key={i + 8} 
                  className="border border-neutral-200 p-4 flex items-center justify-center text-center rounded-lg hover:bg-neutral-50 hover:border-neutral-400 transition-all duration-300 cursor-default"
                >
                  <span className="text-sm md:text-base font-bold text-neutral-800 font-display leading-tight">
                    {client}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* --- Card 4: Fun Facts --- */}
        <motion.div 
          style={{ 
            y: c4Y, top: c4Top, left: c4Left, width: c4Width, height: c4Height, borderRadius: c4Radius,
            zIndex: 40
          }}
          className="absolute bg-neutral-100 overflow-hidden shadow-2xl group"
        >
          {/* Expand Button */}
          <motion.button
            style={{ opacity: btnOpacity }}
            onClick={() => scrollToSection(0.75)}
            className="absolute top-4 right-4 p-2 bg-white rounded-full hover:bg-neutral-200 transition-colors z-50 pointer-events-auto"
          >
            <Maximize2 size={20} className="text-neutral-600" />
          </motion.button>

          <div className="w-full h-full p-8 md:p-12 flex flex-col justify-center items-center text-center">
            <motion.h2 
              style={{ scale: contentScale, transformOrigin: "center" }}
              className="text-4xl md:text-5xl font-bold mb-16 text-neutral-900 font-display"
            >
              Más allá del trabajo
            </motion.h2>
            
            <motion.div 
              style={{ scale: contentScale }}
              className="flex flex-wrap gap-8 md:gap-12 items-center justify-center w-full"
            >
              {funFacts.map((fact, i) => (
                <div key={i} className="flex flex-col items-center gap-4 group/icon">
                  <div className="p-6 bg-white rounded-full shadow-sm group-hover/icon:scale-110 transition-transform duration-300 text-neutral-800">
                    {fact.icon}
                  </div>
                  <span className="font-sans font-medium text-neutral-600">{fact.text}</span>
                </div>
              ))}
            </motion.div>
            
            <motion.div style={{ opacity: contentOpacity }} className="mt-16">
              <Link 
                href="mailto:juandiegomez@example.com" 
                className="inline-flex items-center gap-2 bg-neutral-900 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-black transition-all hover:scale-105 font-sans"
              >
                Contáctame <ArrowRight size={20} />
              </Link>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </main>
  );
}
