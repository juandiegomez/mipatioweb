"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter, Mail, Send } from "lucide-react";

export default function Footer({ minimal = false }: { minimal?: boolean }) {
  return (
    <footer
      className="w-full bg-neutral-950 text-white flex flex-col justify-between p-8 md:p-20 relative z-10"
      id="contacto"
    >
      {/* Top Section */}
      {!minimal && (
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
      )}

      {/* Middle Section - Navigation & Social */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8 my-12 border-t border-neutral-800 pt-12">
        
        {/* Social Icons (Left) */}
        <div className="flex gap-6">
          <a 
            href="https://www.linkedin.com/in/juandiegomez/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href="https://github.com/juandiegomez/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a 
            href="https://x.com/juandiegomezp" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white transition-colors"
            aria-label="X (Twitter)"
          >
            <svg 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="w-5 h-5"
            >
              <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
              <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
            </svg>
          </a>
          <a 
            href="https://t.me/juandiegomez" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white transition-colors"
            aria-label="Telegram"
          >
            <Send size={20} />
          </a>
        </div>

        {/* Menu Links (Right) */}
        <nav className="flex flex-wrap justify-center md:justify-end gap-6 md:gap-8">
          <Link href="/#about" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">
            Sobre mí
          </Link>
          <Link href="/#process" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">
            Proceso
          </Link>
          <Link href="/#services" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">
            Servicios
          </Link>
          <Link href="/#portfolio" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">
            Portafolio
          </Link>
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800 gap-4">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Juan Diego. Todos los derechos reservados.
        </p>
        <div className="flex gap-6">
          <Link href="/privacy" className="text-gray-500 hover:text-white transition-colors text-sm">
            Política de Privacidad
          </Link>
          <Link href="/terms" className="text-gray-500 hover:text-white transition-colors text-sm">
            Términos y Condiciones
          </Link>
        </div>
      </div>
    </footer>
  );
}
