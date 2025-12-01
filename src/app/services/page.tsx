"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

// --- Data ---

const services = [
  {
    id: "01",
    title: "E-Learning",
    description:
      "Transformamos el conocimiento en experiencias digitales atractivas. Diseñamos y desarrollamos ecosistemas de aprendizaje que no solo educan, sino que retienen y motivan a la audiencia mediante interactividad y diseño centrado en el usuario.",
    items: [
      "Desarrollo y Personalización Moodle",
      "Diseño Instruccional Interactivo",
      "Paquetes SCORM / xAPI",
      "Gamificación Educativa",
    ],
  },
  {
    id: "02",
    title: "Web Development",
    description:
      "Sitios web ultrarrápidos, seguros y escalables. Utilizamos arquitectura moderna para construir plataformas que posicionan tu marca y convierten visitantes en clientes. Código limpio, rendimiento optimizado y mejores prácticas de SEO.",
    items: [
      "Desarrollo con Next.js & React",
      "Integración de CMS Headless (Sanity, Strapi)",
      "E-commerce a medida",
      "Optimización de Performance (Core Web Vitals)",
    ],
  },
  {
    id: "03",
    title: "Branding",
    description:
      "Más que un logo, construimos sistemas visuales coherentes. Definimos la personalidad de tu marca para que comunique sus valores con claridad y fuerza en todos los puntos de contacto digitales.",
    items: [
      "Estrategia de Marca",
      "Identidad Visual & Logotipos",
      "Sistemas de Diseño (Design Systems)",
      "Dirección de Arte Digital",
    ],
  },
  {
    id: "04",
    title: "Interactivo",
    description:
      "Experiencias web inmersivas que rompen la barrera de lo convencional. Llevamos la web al siguiente nivel con animaciones fluidas, entornos 3D y narrativas visuales que generan un impacto memorable.",
    items: [
      "Experiencias WebGL & Three.js",
      "Creative Coding",
      "Micro-interacciones avanzadas",
      "Visualización de Datos",
    ],
  },
];

const faqs = [
  {
    question: "¿Trabajas por proyecto o por horas?",
    answer:
      "Principalmente trabajo por proyecto con un precio cerrado basado en el alcance y los entregables definidos. Esto ofrece claridad y seguridad para ambas partes. Sin embargo, para consultorías técnicas o mantenimiento, ofrezco bolsas de horas.",
  },
  {
    question: "¿Qué incluye el mantenimiento?",
    answer:
      "Mis planes de mantenimiento aseguran que tu sitio siga funcionando perfectamente. Incluyen actualizaciones de seguridad, monitoreo de uptime, copias de seguridad regulares y pequeños ajustes de contenido o diseño mes a mes.",
  },
  {
    question: "¿Haces diseño sin desarrollo?",
    answer:
      "Sí. Si ya cuentas con un equipo de desarrollo de confianza, puedo encargarme exclusivamente de la fase de Dirección de Arte y Diseño UI/UX, entregando archivos de Figma listos para implementación.",
  },
  {
    question: "¿Cuál es el tiempo promedio de entrega?",
    answer:
      "Depende de la complejidad. Una Landing Page puede estar lista en 2 semanas, mientras que un sitio corporativo completo o una plataforma E-Learning puede tomar de 4 a 8 semanas. Definiremos un cronograma detallado al inicio.",
  },
];

// --- Components ---

const AccordionItem = ({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <div className="border-b border-neutral-800">
      <button
        onClick={onClick}
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
      >
        <span className="text-xl md:text-2xl font-light group-hover:text-neutral-400 transition-colors">
          {question}
        </span>
        <span className="ml-4 text-neutral-500 group-hover:text-white transition-colors">
          {isOpen ? <Minus size={24} /> : <Plus size={24} />}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-8 text-neutral-400 text-lg leading-relaxed max-w-3xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function ServicesPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-neutral-950 bg-noise text-white selection:bg-white selection:text-black">
      
      {/* --- Hero Section --- */}
      <section className="pt-40 pb-20 md:pt-60 md:pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-9xl font-bold tracking-tighter mb-8 font-display"
          >
            Servicios de <br className="hidden md:block" />
            Alto Impacto
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-3xl font-light text-neutral-400 max-w-3xl"
          >
            Especialización técnica y creativa para marcas ambiciosas. 
            Donde el diseño se encuentra con la ingeniería.
          </motion.p>
        </div>
      </section>

      {/* --- Services List --- */}
      <section className="px-6 pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="border-t border-neutral-800" />
          
          {services.map((service) => (
            <div key={service.id} className="group border-b border-neutral-800 py-20 md:py-32">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
                
                {/* Title Column */}
                <div className="md:col-span-5">
                  <h2 className="text-4xl md:text-6xl font-bold tracking-tight font-display group-hover:text-neutral-400 transition-colors duration-500">
                    <span className="text-neutral-600 text-2xl md:text-3xl mr-4 font-mono align-top">
                      {service.id}.
                    </span>
                    {service.title}
                  </h2>
                </div>

                {/* Content Column */}
                <div className="md:col-span-7 md:pl-12">
                  <p className="text-xl md:text-2xl font-light leading-relaxed text-neutral-300 mb-12">
                    {service.description}
                  </p>
                  
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-start text-neutral-400">
                        <span className="mr-3 text-white">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- FAQ Section --- */}
      <section className="px-6 pb-40">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-16 font-display"
          >
            Preguntas Frecuentes
          </motion.h2>

          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFaqIndex === index}
                onClick={() => toggleFaq(index)}
              />
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
