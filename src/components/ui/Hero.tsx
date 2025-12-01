"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

export default function Hero() {
  const contentRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ["start 120px", "start 40px"]
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="min-h-screen bg-white flex flex-col justify-center items-center px-6 relative">
      <motion.div 
        style={{ opacity }}
        className="sticky top-0 w-full h-48 bg-gradient-to-b from-white via-white/90 to-transparent z-40 pointer-events-none -mb-48 shrink-0" 
      />
      <div ref={contentRef} className="max-w-5xl mx-auto text-center space-y-8 pt-20 relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 border border-gray-200 text-sm font-medium text-gray-800 mx-auto"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Disponible para nuevos proyectos
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-black leading-[1.1] font-display"
        >
          Transformo ideas en <br className="hidden md:block" />
          experiencias digitales
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
        >
          Diseñador y desarrollador web enfocado en crear interfaces limpias,
          funcionales y memorables que ayudan a las marcas a destacar.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <Link
            href="#portafolio"
            className="px-8 py-4 rounded-full bg-black text-white font-medium text-lg hover:bg-gray-800 transition-colors w-full sm:w-auto flex items-center justify-center gap-2 group"
          >
            Ver Proyectos
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="#contacto"
            className="px-8 py-4 rounded-full border border-gray-200 text-black font-medium text-lg hover:bg-gray-50 transition-colors w-full sm:w-auto flex items-center justify-center"
          >
            Contáctame
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
