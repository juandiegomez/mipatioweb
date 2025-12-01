"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter, Mail, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="fixed bottom-0 left-0 w-full h-[80vh] bg-noise text-white z-0 flex flex-col justify-between p-8 md:p-20"
      id="contacto"
    >
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter mb-4 font-display">
            Hablemos
          </h2>
          <p className="text-gray-400 text-xl max-w-md">
            ¿Tienes una idea en mente? Construyamos algo increíble juntos.
          </p>
        </div>
        
        <a
          href="mailto:hola@juandiego.com"
          className="group flex items-center gap-4 text-2xl md:text-4xl font-light hover:text-gray-300 transition-colors"
        >
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
            <Mail className="w-6 h-6 md:w-8 md:h-8" />
          </div>
          hola@juandiego.com
        </a>
      </div>

      {/* Middle Section - Navigation */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 my-12">
        <div className="flex flex-col gap-4">
          <h3 className="text-gray-500 uppercase text-sm tracking-wider">Social</h3>
          <div className="flex gap-4">
            <a 
              href="https://www.linkedin.com/in/juandiegomez/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://github.com/juandiegomez/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://x.com/juandiegomezp" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
              aria-label="X (Twitter)"
            >
              {/* X Icon (Custom SVG as Lucide might not have the new X logo yet or we use a simple path) */}
              <svg 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="w-6 h-6"
              >
                <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
              </svg>
            </a>
            <a 
              href="https://t.me/juandiegomez" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
              aria-label="Telegram"
            >
              <Send size={24} />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-gray-500 uppercase text-sm tracking-wider">Menu</h3>
          <Link href="/services" className="hover:text-gray-300 transition-colors">Servicios</Link>
          <Link href="/process" className="hover:text-gray-300 transition-colors">Proceso</Link>
          <Link href="/portfolio" className="hover:text-gray-300 transition-colors">Portafolio</Link>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800 gap-4">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Juan Diego. Todos los derechos reservados.
        </p>
        <div className="flex gap-6">
          <Link href="#" className="text-gray-500 hover:text-white transition-colors text-sm">
            Política de Privacidad
          </Link>
          <Link href="#" className="text-gray-500 hover:text-white transition-colors text-sm">
            Términos y Condiciones
          </Link>
        </div>
      </div>
    </footer>
  );
}
