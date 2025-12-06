"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Mail, Plus, Minus } from "lucide-react";

const interests = ["Nuevo Proyecto", "Consultoría", "Mentoria", "Otro"];
const budgets = ["< $1k", "$1k - $5k", "$5k+"];

const faqs = [
  {
    question: "¿Cuál es tu disponibilidad actual?",
    answer: "Actualmente estoy aceptando nuevos proyectos para comenzar en las próximas 2-3 semanas. Siempre trato de reservar espacio para consultas rápidas."
  },
  {
    question: "¿Trabajas con agencias?",
    answer: "Sí, colaboro frecuentemente con agencias digitales y estudios de diseño como especialista externo en UX/UI o Frontend."
  },
  {
    question: "¿Formas de pago?",
    answer: "Acepto transferencias bancarias locales (Colombia), PayPal y transferencias internacionales (Wise/USDT). Generalmente trabajo con un anticipo del 50%."
  }
];

export default function ContactPage() {
  const [selectedInterest, setSelectedInterest] = useState<string | null>(null);
  const [selectedBudget, setSelectedBudget] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-white text-neutral-900 pt-32 pb-20 px-6 relative">
      {/* Navbar Scroll Mask */}
      <div className="fixed top-0 left-0 w-full h-32 bg-gradient-to-b from-white via-white/90 to-transparent z-40 pointer-events-none" />

      <div className="container mx-auto max-w-6xl">
        
        {/* Header */}
        <div className="mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-extrabold font-display tracking-tight mb-8"
          >
            Hablemos de negocios <br/>
            <span className="text-neutral-400">(y diseño)</span>.
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col md:flex-row gap-6 md:gap-12 text-lg font-medium text-neutral-600"
          >
            <a href="mailto:juandiego@projectleap.digital" className="flex items-center gap-2 hover:text-black transition-colors">
              <Mail size={20} />
              juandiego@projectleap.digital
            </a>
            <div className="flex items-center gap-2">
              <MapPin size={20} />
              Cali, CO
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Form Section (Left/Top) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-7"
          >
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-neutral-500">Nombre</label>
                  <input type="text" className="w-full border-b border-neutral-300 py-3 text-xl focus:outline-none focus:border-black transition-colors bg-transparent placeholder-neutral-300" placeholder="Tu nombre" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-neutral-500">Email</label>
                  <input type="email" className="w-full border-b border-neutral-300 py-3 text-xl focus:outline-none focus:border-black transition-colors bg-transparent placeholder-neutral-300" placeholder="tu@email.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-neutral-500">Empresa / Organización</label>
                <input type="text" className="w-full border-b border-neutral-300 py-3 text-xl focus:outline-none focus:border-black transition-colors bg-transparent placeholder-neutral-300" placeholder="Nombre de tu proyecto" />
              </div>

              {/* Interests */}
              <div className="space-y-4 pt-4">
                <label className="text-sm font-bold uppercase tracking-wider text-neutral-500">Estoy interesado en</label>
                <div className="flex flex-wrap gap-3">
                  {interests.map((interest) => (
                    <button
                      key={interest}
                      type="button"
                      onClick={() => setSelectedInterest(interest)}
                      className={`px-6 py-3 rounded-full text-sm font-medium transition-all border ${
                        selectedInterest === interest 
                          ? "bg-black text-white border-black" 
                          : "bg-white text-neutral-600 border-neutral-200 hover:border-neutral-400"
                      }`}
                    >
                      {interest}
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget */}
              <div className="space-y-4 pt-4">
                <label className="text-sm font-bold uppercase tracking-wider text-neutral-500">Rango de Presupuesto</label>
                <div className="grid grid-cols-3 gap-4">
                  {budgets.map((budget) => (
                    <button
                      key={budget}
                      type="button"
                      onClick={() => setSelectedBudget(budget)}
                      className={`py-4 rounded-xl text-sm font-bold transition-all border ${
                        selectedBudget === budget 
                          ? "bg-black text-white border-black" 
                          : "bg-neutral-50 text-neutral-600 border-transparent hover:bg-neutral-100"
                      }`}
                    >
                      {budget}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2 pt-4">
                <label className="text-sm font-bold uppercase tracking-wider text-neutral-500">Mensaje</label>
                <textarea 
                  rows={4} 
                  className="w-full border-b border-neutral-300 py-3 text-xl focus:outline-none focus:border-black transition-colors bg-transparent placeholder-neutral-300 resize-none" 
                  placeholder="Cuéntame sobre tu proyecto..." 
                />
              </div>

              <div className="pt-8">
                <button 
                  type="submit" 
                  className="w-full md:w-auto px-10 py-5 bg-black text-white text-lg font-bold rounded-full hover:bg-neutral-800 transition-all hover:scale-[1.02] flex items-center justify-center gap-3"
                >
                  Enviar Propuesta <ArrowRight size={20} />
                </button>
              </div>
            </form>
          </motion.div>

          {/* FAQ Section (Right/Sidebar) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="lg:col-span-5 space-y-12"
          >
            <div className="bg-neutral-50 p-8 rounded-3xl">
              <h3 className="text-xl font-bold font-display mb-8">Preguntas Frecuentes</h3>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-neutral-200 pb-6 last:border-0 last:pb-0">
                    <button 
                      onClick={() => toggleFaq(index)}
                      className="w-full flex justify-between items-start text-left group"
                    >
                      <span className="font-medium text-neutral-900 group-hover:text-neutral-600 transition-colors pr-4">
                        {faq.question}
                      </span>
                      <span className="text-neutral-400 mt-1">
                        {openFaq === index ? <Minus size={16} /> : <Plus size={16} />}
                      </span>
                    </button>
                    <motion.div 
                      initial={false}
                      animate={{ height: openFaq === index ? "auto" : 0, opacity: openFaq === index ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm text-neutral-500 mt-3 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 border border-neutral-100 rounded-3xl">
              <h4 className="font-bold mb-2">¿Prefieres una llamada?</h4>
              <p className="text-neutral-500 text-sm mb-6">
                Si tu proyecto es complejo o prefieres discutirlo cara a cara, podemos agendar una videollamada de 15 min.
              </p>
              <a href="#" className="text-sm font-bold underline decoration-2 underline-offset-4 hover:text-neutral-600 transition-colors">
                Agendar en Calendly
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </main>
  );
}
