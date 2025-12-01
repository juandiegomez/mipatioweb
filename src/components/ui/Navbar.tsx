"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Sobre mí", href: "/about" },
  { name: "Proceso", href: "/process" },
  { name: "Servicios", href: "/services" },
  { name: "Portafolio", href: "/portfolio" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
      },
    },
    open: {
      opacity: 1,
      y: "0%",
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 flex justify-between items-center mix-blend-difference text-white">
        <Link href="/" className="text-xl font-bold tracking-tighter">
          Mi Patio
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium hover:opacity-70 transition-opacity"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="px-5 py-2 rounded-full border border-white text-sm font-medium hover:bg-white hover:text-black transition-colors"
          >
            Hablemos
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden z-50 relative">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 bg-black text-white z-40 flex flex-col justify-center items-center gap-8 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={toggleMenu}
                className="text-3xl font-light tracking-tight hover:opacity-70 transition-opacity"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={toggleMenu}
              className="mt-4 px-8 py-3 rounded-full border border-white text-lg font-medium hover:bg-white hover:text-black transition-colors"
            >
              Hablemos
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
