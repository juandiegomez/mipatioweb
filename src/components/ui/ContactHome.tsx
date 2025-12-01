"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";

export default function ContactHome() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState("");

  // Scroll Progress: 0 to 1 over the 250vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth out the scroll progress for physics feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001
  });

  // --- ANIMATION TRAJECTORIES ---

  // "SALTO" Movement
  // X: Starts left (-50vw), centers at 50% and stays
  const x = useTransform(smoothProgress, [0, 0.5, 1], ["-50vw", "0vw", "0vw"]);
  
  // Y: Starts low (100vh), goes high (-15vh) at peak, lands at 0
  const y = useTransform(smoothProgress, [0, 0.5, 1], ["100vh", "-15vh", "0vh"]);
  
  // Rotation: Slight tilt at the peak
  const rotate = useTransform(smoothProgress, [0, 0.4, 0.6, 1], [0, -6, 6, 0]);
  
  // Scale: Starts smaller, grows to peak, settles
  const scale = useTransform(smoothProgress, [0, 0.5, 1], [0.5, 1.2, 1]);

  // Opacity for "SALTO"
  const opacity = useTransform(smoothProgress, [0, 0.1], [0, 1]);

  // Intro Text Opacity/Position
  const textY = useTransform(smoothProgress, [0, 1], ["-20vh", "0vh"]);
  const textOpacity = useTransform(smoothProgress, [0, 0.2], [0, 1]);

  // Form Reveal (The Landing)
  const formOpacity = useTransform(smoothProgress, [0.85, 1], [0, 1]);
  const formScale = useTransform(smoothProgress, [0.85, 1], [0.8, 1]);
  const formY = useTransform(smoothProgress, [0.85, 1], [50, 0]);

  // Background Speed Lines (Parallax)
  // Move opposite to the jump (Jump goes UP, lines go DOWN)
  const bgY1 = useTransform(smoothProgress, [0, 1], ["-100%", "100%"]);
  const bgY2 = useTransform(smoothProgress, [0, 1], ["-50%", "150%"]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    alert("¡Gracias! Te contactaré pronto.");
    setEmail("");
  };

  return (
    <div ref={containerRef} className="relative h-[250vh] bg-neutral-950">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">
        
        {/* --- DYNAMIC BACKGROUND --- */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
           {/* Speed Lines */}
           <motion.div style={{ y: bgY1 }} className="absolute left-[10%] top-0 w-[1px] h-[50vh] bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
           <motion.div style={{ y: bgY2 }} className="absolute right-[20%] -top-[20%] w-[2px] h-[70vh] bg-gradient-to-b from-transparent via-purple-500 to-transparent" />
           <motion.div style={{ y: bgY1 }} className="absolute left-[30%] -top-[40%] w-[1px] h-[30vh] bg-gradient-to-b from-transparent via-white to-transparent opacity-50" />
        </div>

        {/* Noise Texture */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
        </div>

        {/* --- MAIN CONTENT --- */}
        <div className="relative z-10 container mx-auto px-6 flex flex-col items-center justify-center text-center">
          
          {/* Static Phrase Part */}
          <motion.h2 
            style={{ y: textY, opacity: textOpacity }}
            className="text-3xl md:text-5xl font-bold text-neutral-400 mb-4 md:mb-8"
          >
            ¿Listo para el siguiente
          </motion.h2>

          {/* THE JUMPING WORD */}
          <motion.div
            style={{ x, y, rotate, scale, opacity }}
            className="relative mb-8 md:mb-12"
          >
            <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-400 font-display italic tracking-tighter leading-none filter drop-shadow-2xl pr-16 pb-4">
              SALTO?
            </h1>
            {/* Motion Blur Effect (Pseudo-element) */}
            <motion.div 
               style={{ opacity: useTransform(smoothProgress, [0.2, 0.5, 0.8], [0, 0.5, 0]) }}
               className="absolute inset-0 text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] font-extrabold text-blue-500 blur-sm -z-10 font-display italic tracking-tighter leading-none pr-16 pb-4"
            >
              SALTO?
            </motion.div>
          </motion.div>

          {/* --- THE LANDING (FORM) --- */}
          <motion.div
            style={{ opacity: formOpacity, scale: formScale, y: formY }}
            className="w-full max-w-md flex flex-col items-center gap-6"
          >
            <form onSubmit={handleSubmit} className="relative group w-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative flex items-center bg-neutral-900 rounded-full p-2 border border-neutral-800 shadow-2xl">
                <input
                  type="email"
                  placeholder="tu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-transparent text-white px-6 py-3 focus:outline-none placeholder:text-neutral-600"
                  required
                />
                <button
                  type="submit"
                  className="bg-white text-black rounded-full p-3 hover:bg-blue-50 transition-colors duration-300 flex items-center justify-center group/btn"
                >
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>

            <Link 
              href="/contact" 
              className="group relative inline-flex items-center gap-2 text-neutral-500 hover:text-white transition-colors text-sm md:text-base font-medium pb-1"
            >
              <span className="relative inline-flex items-center gap-2">
                Prefiero llenar el formulario completo <ArrowRight size={14} />
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-purple-500 via-lime-400 via-orange-500 to-blue-600 transition-all duration-300 group-hover:w-full" />
            </Link>
          </motion.div>

        </div>
      </div>
    </div>
  );
}