"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useMotionTemplate, useMotionValue } from "framer-motion";
import { ArrowRight } from "lucide-react";

const services = [
  {
    id: 1,
    title: "E-Learning & EdTech",
    description:
      "Liderando la educación virtual y entrenando educadores en nuevas tecnologías.",
    color: "bg-purple-500",
    textColor: "text-white",
    rotate: "-3deg",
    tags: ["Moodle", "Instructional Design", "Training"],
  },
  {
    id: 2,
    title: "Web & Digital Magic",
    description:
      "Creando experiencias web cautivadoras y promociones de juegos impactantes.",
    color: "bg-lime-400",
    textColor: "text-black",
    rotate: "4deg",
    tags: ["React", "Next.js", "Tailwind", "GSAP"],
  },
  {
    id: 3,
    title: "Branding y Dirección de Arte",
    description:
      "Desarrollo de identidades visuales sólidas y dirección creativa para elevar el valor de tu marca.",
    color: "bg-orange-500",
    textColor: "text-white",
    rotate: "-2deg",
    tags: ["Art Direction", "Brand Identity", "Strategy"],
  },
  {
    id: 4,
    title: "Diseño Interactivo",
    description: "Diseño Interactivo profesional y producción multimedia.",
    color: "bg-blue-600",
    textColor: "text-white",
    rotate: "5deg",
    tags: ["Interactive", "Multimedia", "UX/UI"],
  },
  {
    id: 5,
    title: "Ver Todos los Servicios",
    description: "¿Listo para escalar tu proyecto? Descubre todo lo que podemos lograr juntos.",
    color: "bg-neutral-900",
    textColor: "text-white",
    rotate: "-4deg",
    tags: [],
    isCta: true,
  },
];

function ServiceCtaCard({ service, index, isMobile = false }: { service: any, index?: number, isMobile?: boolean }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const background = useMotionTemplate`radial-gradient(
    650px circle at ${mouseX}px ${mouseY}px,
    rgba(255, 255, 255, 0.15),
    transparent 80%
  )`;

  const wrapperClass = isMobile 
    ? "relative w-full h-[500px]" 
    : `relative flex-shrink-0 w-[450px] h-[60vh] ${index && index > 0 ? "-ml-[-10px]" : ""}`;
  
  const wrapperStyle = isMobile ? {} : {
    transform: `rotate(${service.rotate})`,
    zIndex: index ? index + 1 : 1,
  };

  return (
    <div className={wrapperClass} style={wrapperStyle}>
      <div 
        className="relative w-full h-full rounded-3xl shadow-2xl overflow-hidden group transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_20px_80px_-10px_rgba(168,85,247,0.4)]"
        onMouseMove={handleMouseMove}
      >
        {/* Static Gradient Background (The Border) */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-[conic-gradient(from_0deg,#a855f7_0%,#a3e635_25%,#f97316_50%,#2563eb_75%,#a855f7_100%)]" />

        {/* Inner Content Layer */}
        <div className={`absolute inset-[3px] group-hover:inset-[6px] transition-all duration-300 bg-neutral-900 rounded-[21px] flex flex-col justify-center items-center text-center overflow-hidden ${isMobile ? "p-8" : "p-12"}`}>
          
          {/* Mouse Tracking Background */}
          <motion.div
            className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
            style={{ background }}
          />

          <h3 className={`relative z-10 font-bold text-white mb-6 font-display leading-tight ${isMobile ? "text-3xl md:text-4xl" : "text-5xl mb-8"}`}>
            {service.title}
          </h3>
          <p className={`relative z-10 text-gray-400 leading-relaxed ${isMobile ? "text-lg mb-8" : "text-xl mb-12"}`}>
            {service.description}
          </p>
          
          <Link
            href="/services"
            className={`relative z-10 group/btn inline-flex items-center justify-center gap-3 rounded-full overflow-hidden transition-transform hover:scale-105 ${isMobile ? "px-8 py-4 text-lg" : "px-10 py-5 text-xl"}`}
          >
              {/* Button Gradient Border Layer */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-[conic-gradient(from_0deg,#a855f7_0%,#a3e635_25%,#f97316_50%,#2563eb_75%,#a855f7_100%)]" />
              
              {/* Button Inner */}
              <div className="absolute inset-[2px] bg-neutral-900 rounded-full" />
              
              {/* Text */}
              <span className="relative z-10 text-white font-bold flex items-center gap-3">
                  Explorar Todo <ArrowRight className="w-6 h-6 group-hover/btn:translate-x-1 transition-transform" />
              </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // Ajustamos el rango del transform para desktop
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-55%"]);
  
  return (
    <section
      ref={targetRef}
      id="servicios"
      className="relative md:h-[300vh]"
    >
      {/* --- MOBILE VIEW (Vertical, No Scroll Logic) --- */}
      <div className="relative block md:hidden px-6 py-20 bg-noise">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white mb-4 leading-tight font-display">
            Mis Áreas de <br />{" "}
            <span className="text-gray-400">Experiencia</span>
          </h2>
          <p className="text-gray-400 text-lg">Explora mis servicios &darr;</p>
        </div>

        <div className="flex flex-col gap-8">
          {services.map((service) => {
            if (service.isCta) {
              return <ServiceCtaCard key={service.id} service={service} isMobile={true} />;
            }

            return (
              <div
                key={service.id}
                className={`relative w-full h-[500px] rounded-3xl p-8 flex flex-col justify-between ${service.color} ${service.textColor} shadow-2xl`}
              >
                <div className="flex justify-between items-start">
                  <div className="text-xl font-medium opacity-80">
                    0{service.id}
                  </div>
                </div>

                <div>
                  <h3 className="text-3xl md:text-5xl font-bold mb-6 leading-tight tracking-tight font-display">
                    {service.title}
                  </h3>
                  <p className="text-lg md:text-xl font-medium opacity-90 leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-4 py-2 rounded-full text-sm font-bold backdrop-blur-sm ${
                          service.textColor === "text-white"
                            ? "bg-white/20 text-white"
                            : "bg-black/10 text-black"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* --- DESKTOP VIEW (Horizontal Scroll Sticky) --- */}
      <div className="hidden md:block sticky top-0 h-screen overflow-hidden bg-noise">
        <div className="flex h-full items-center">
          <motion.div style={{ x }} className="flex items-center px-12">
            {/* Title Section */}
            <div className="flex flex-col justify-center min-w-[400px] px-8 z-0 mr-16">
              <h2 className="text-6xl font-bold text-white mb-6 leading-tight font-display">
                Mis Áreas de <br />{" "}
                <span className="text-gray-400">Experiencia</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Desliza para explorar &rarr;
              </p>
            </div>

            {/* Cards */}
            {services.map((service, index) => {
              if (service.isCta) {
                return <ServiceCtaCard key={service.id} service={service} index={index} />;
              }

              return (
                <div
                  key={service.id}
                  className={`relative flex-shrink-0 w-[450px] h-[60vh] rounded-3xl p-12 flex flex-col justify-between ${
                    service.color
                  } ${service.textColor} ${
                    index > 0 ? "-ml-[-10px]" : ""
                  } shadow-2xl`}
                  style={{
                    transform: `rotate(${service.rotate})`,
                    zIndex: index + 1,
                  }}
                >
                  <div className="flex justify-between items-start">
                    <div className="text-xl font-medium opacity-80">
                      0{service.id}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-5xl font-bold mb-6 leading-tight tracking-tight font-display">
                      {service.title}
                    </h3>
                    <p className="text-xl font-medium opacity-90 leading-relaxed mb-8">
                      {service.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-4 py-2 rounded-full text-sm font-bold backdrop-blur-sm ${
                            service.textColor === "text-white"
                              ? "bg-white/20 text-white"
                              : "bg-black/10 text-black"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
