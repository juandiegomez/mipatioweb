"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Search, 
  Map, 
  Palette, 
  Code2, 
  ArrowLeft, 
  CheckCircle2,
  Layers,
  Figma,
  Cpu,
  Zap
} from "lucide-react";

const phases = [
  {
    id: 1,
    title: "Descubrimiento",
    description: "Iniciamos con una inmersión profunda en tu negocio. Entendemos tus objetivos, tu audiencia y los desafíos únicos que enfrentas para definir el norte del proyecto.",
    icon: Search,
    deliverables: ["Brief de Proyecto", "Investigación de Mercado", "Definición de KPIs"],
  },
  {
    id: 2,
    title: "Estrategia & UX",
    description: "Traducimos los hallazgos en una estructura lógica. Diseñamos la experiencia de usuario (UX) para asegurar que cada interacción sea intuitiva y cumpla un propósito.",
    icon: Map,
    deliverables: ["Sitemap", "User Journeys", "Wireframes de Baja Fidelidad"],
  },
  {
    id: 3,
    title: "Diseño Visual",
    description: "Damos vida a la estructura con una identidad visual impactante. Creamos interfaces atractivas que reflejan la esencia de tu marca y cautivan a tus usuarios.",
    icon: Palette,
    deliverables: ["Mockups de Alta Fidelidad", "Sistema de Diseño", "Prototipo Interactivo"],
  },
  {
    id: 4,
    title: "Desarrollo & Lanzamiento",
    description: "Convertimos el diseño en código limpio y performante. Construimos la solución final utilizando las últimas tecnologías y aseguramos un lanzamiento sin fricciones.",
    icon: Code2,
    deliverables: ["Código Optimizado", "Integración CMS", "Despliegue en Producción"],
  },
];

const tools = [
  { name: "Adobe Creative Cloud", icon: Layers },
  { name: "Figma", icon: Figma },
  { name: "VS Code", icon: Code2 },
  { name: "React", icon: Cpu },
  { name: "Next.js", icon: Zap },
  { name: "Tailwind CSS", icon: Palette },
  { name: "Framer Motion", icon: Zap },
];

export default function ProcessPage() {
  return (
    <main className="min-h-screen bg-noise text-white selection:bg-white/20">
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto space-y-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold font-display tracking-tight">
            Metodología & Proceso
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
            Cómo transformamos ideas abstractas en productos digitales tangibles, paso a paso.
          </p>
        </motion.div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-5xl mx-auto relative">
          {/* Central Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gray-800 transform md:-translate-x-1/2" />

          <div className="space-y-24">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 md:gap-16 ${
                  index % 2 === 0 ? "md:text-right" : "md:flex-row-reverse md:text-left"
                }`}
              >
                {/* Content Column */}
                <div className="flex-1 md:pt-4">
                  <h3 className="text-3xl font-bold font-display mb-4 text-white">
                    {phase.title}
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed mb-6">
                    {phase.description}
                  </p>
                  
                  {/* Deliverables List */}
                  <ul className={`flex flex-col gap-2 ${
                    index % 2 === 0 ? "md:items-end" : "md:items-start"
                  }`}>
                    {phase.deliverables.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm font-medium text-gray-500">
                        {index % 2 !== 0 && <CheckCircle2 className="w-4 h-4 text-green-500" />}
                        {item}
                        {index % 2 === 0 && <CheckCircle2 className="w-4 h-4 text-green-500" />}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Icon/Marker Column */}
                <div className="relative flex items-start justify-center md:w-12 shrink-0">
                  <div className="sticky top-32 z-10 bg-black border border-gray-800 p-4 rounded-2xl shadow-xl">
                    <phase.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Empty Column for Balance */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-32 px-6 border-t border-white/10 bg-black/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold font-display mb-4">Arsenal Digital</h2>
            <p className="text-gray-400">Las herramientas que potencian mi creatividad.</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white/5 border border-white/10 p-6 rounded-xl flex flex-col items-center justify-center gap-4 hover:bg-white/10 transition-colors group"
              >
                <tool.icon className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors" />
                <span className="font-medium text-sm text-gray-300">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 text-center">
        <Link 
          href="/#contacto"
          className="inline-block bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform"
        >
          Iniciar un Proyecto
        </Link>
      </section>
    </main>
  );
}
