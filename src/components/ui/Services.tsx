"use client";

import { useRef, useState, useEffect } from "react";
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

function ServiceCtaCard({ service, index, isMobile = false, isNestHub = false }: { service: any, index?: number, isMobile?: boolean, isNestHub?: boolean }) {
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
        <div className={`absolute inset-[3px] group-hover:inset-[6px] transition-all duration-300 bg-neutral-900 rounded-[21px] flex flex-col justify-center items-center text-center overflow-hidden ${isMobile ? "p-8" : isNestHub ? "p-6" : "p-12"}`}>
          
          {/* Mouse Tracking Background */}
          <motion.div
            className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
            style={{ background }}
          />

          <h3 className={`relative z-10 font-bold text-white mb-6 font-display leading-tight ${isMobile ? "text-3xl md:text-4xl" : isNestHub ? "text-3xl mb-4" : "text-5xl mb-8"}`}>
            {service.title}
          </h3>
          <p className={`relative z-10 text-gray-400 leading-relaxed ${isMobile ? "text-lg mb-8" : isNestHub ? "text-base mb-6" : "text-xl mb-12"}`}>
            {service.description}
          </p>
          
          <Link
            href="/services"
            className={`relative z-10 group/btn inline-flex items-center justify-center gap-3 rounded-full overflow-hidden transition-transform hover:scale-105 ${isMobile ? "px-8 py-4 text-lg" : isNestHub ? "px-6 py-3 text-lg" : "px-10 py-5 text-xl"}`}
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
  const [isSmallHeight, setIsSmallHeight] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isNestHub, setIsNestHub] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkLayout = () => {
      setIsSmallHeight(window.innerHeight < 750);
      setIsTablet(window.innerWidth < 1280);
      setIsNestHub(window.innerWidth === 1024 && window.innerHeight === 600);
      setIsMobile(window.innerWidth < 768);
    };
    
    checkLayout();
    window.addEventListener('resize', checkLayout);
    return () => window.removeEventListener('resize', checkLayout);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const { scrollYProgress: exitProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });
  const gradientY = useTransform(exitProgress, [0, 1], ["0vh", "100vh"]);

  // Desktop Horizontal Scroll
  const x = useTransform(scrollYProgress, [0, 1], ["1%", isTablet ? "-75%" : "-55%"]);

  // Mobile Stacked Animation
  // We map scroll progress to card indices. 
  // 0.0 - 0.2: Title visible
  // 0.2 - 1.0: Cards stacking
  const card1Y = useTransform(scrollYProgress, [0.0, 0.15], ["100vh", "0vh"]);
  const card2Y = useTransform(scrollYProgress, [0.15, 0.3], ["100vh", "0vh"]);
  const card3Y = useTransform(scrollYProgress, [0.3, 0.45], ["100vh", "0vh"]);
  const card4Y = useTransform(scrollYProgress, [0.45, 0.6], ["100vh", "0vh"]);
  const card5Y = useTransform(scrollYProgress, [0.6, 0.75], ["100vh", "0vh"]);

  const card1Rotate = useTransform(scrollYProgress, [0.15, 0.3], [0, -3]);
  const card2Rotate = useTransform(scrollYProgress, [0.3, 0.45], [0, 4]);
  const card3Rotate = useTransform(scrollYProgress, [0.45, 0.6], [0, -2]);
  const card4Rotate = useTransform(scrollYProgress, [0.6, 0.75], [0, 5]);

  const card1Scale = useTransform(scrollYProgress, [0.15, 0.3], [1, 0.95]);
  const card2Scale = useTransform(scrollYProgress, [0.3, 0.45], [1, 0.95]);
  const card3Scale = useTransform(scrollYProgress, [0.45, 0.6], [1, 0.95]);
  const card4Scale = useTransform(scrollYProgress, [0.6, 0.75], [1, 0.95]);

  return (
    <section
      ref={targetRef}
      id="services"
      className="relative h-[400vh] md:h-[300vh]"
    >
      {/* --- MOBILE VIEW (Stacked Scroll Animation) --- */}
      <div className="sticky top-0 h-screen block md:hidden overflow-hidden bg-noise">
        <motion.div style={{ y: gradientY }} className={`absolute top-0 left-0 w-full ${isMobile ? "h-32" : "h-64"} bg-gradient-to-b from-black via-black/90 to-transparent z-[60] pointer-events-none`} />
        <div className="relative w-full h-full flex flex-col items-center justify-center px-6">
          
          {/* Title (Always visible initially, gets covered) */}
          <div className={`absolute ${isSmallHeight ? "top-16" : "top-24"} left-6 right-6 z-0`}>
            <h2 className="text-4xl font-bold text-white mb-4 leading-tight font-display">
              Mis Áreas de <br />{" "}
              <span className="text-gray-400">Experiencia</span>
            </h2>
            <p className="text-gray-400 text-lg">Desliza para descubrir &darr;</p>
          </div>

          {/* Card 1 */}
          <motion.div 
            style={{ y: card1Y, rotate: card1Rotate, scale: card1Scale, zIndex: 10 }} 
            className={`absolute ${isSmallHeight ? "top-44" : "top-64"} w-full max-w-sm`}
          >
             <div className={`w-full h-[450px] rounded-3xl p-8 flex flex-col justify-between ${services[0].color} ${services[0].textColor} shadow-2xl`}>
                <div className="flex justify-between items-start">
                  <div className="text-xl font-medium opacity-80">01</div>
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-4 leading-tight tracking-tight font-display">{services[0].title}</h3>
                  <p className="text-lg font-medium opacity-90 leading-relaxed mb-6">{services[0].description}</p>
                  <div className="flex flex-wrap gap-2">
                    {services[0].tags.map(tag => (
                      <span key={tag} className={`px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm ${services[0].textColor === "text-white" ? "bg-white/20 text-white" : "bg-black/10 text-black"}`}>{tag}</span>
                    ))}
                  </div>
                </div>
             </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            style={{ y: card2Y, rotate: card2Rotate, scale: card2Scale, zIndex: 20 }} 
            className={`absolute ${isSmallHeight ? "top-44" : "top-64"} w-full max-w-sm`}
          >
             <div className={`w-full h-[450px] rounded-3xl p-8 flex flex-col justify-between ${services[1].color} ${services[1].textColor} shadow-2xl`}>
                <div className="flex justify-between items-start">
                  <div className="text-xl font-medium opacity-80">02</div>
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-4 leading-tight tracking-tight font-display">{services[1].title}</h3>
                  <p className="text-lg font-medium opacity-90 leading-relaxed mb-6">{services[1].description}</p>
                  <div className="flex flex-wrap gap-2">
                    {services[1].tags.map(tag => (
                      <span key={tag} className={`px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm ${services[1].textColor === "text-white" ? "bg-white/20 text-white" : "bg-black/10 text-black"}`}>{tag}</span>
                    ))}
                  </div>
                </div>
             </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            style={{ y: card3Y, rotate: card3Rotate, scale: card3Scale, zIndex: 30 }} 
            className={`absolute ${isSmallHeight ? "top-44" : "top-64"} w-full max-w-sm`}
          >
             <div className={`w-full h-[450px] rounded-3xl p-8 flex flex-col justify-between ${services[2].color} ${services[2].textColor} shadow-2xl`}>
                <div className="flex justify-between items-start">
                  <div className="text-xl font-medium opacity-80">03</div>
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-4 leading-tight tracking-tight font-display">{services[2].title}</h3>
                  <p className="text-lg font-medium opacity-90 leading-relaxed mb-6">{services[2].description}</p>
                  <div className="flex flex-wrap gap-2">
                    {services[2].tags.map(tag => (
                      <span key={tag} className={`px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm ${services[2].textColor === "text-white" ? "bg-white/20 text-white" : "bg-black/10 text-black"}`}>{tag}</span>
                    ))}
                  </div>
                </div>
             </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div 
            style={{ y: card4Y, rotate: card4Rotate, scale: card4Scale, zIndex: 40 }} 
            className={`absolute ${isSmallHeight ? "top-44" : "top-64"} w-full max-w-sm`}
          >
             <div className={`w-full h-[450px] rounded-3xl p-8 flex flex-col justify-between ${services[3].color} ${services[3].textColor} shadow-2xl`}>
                <div className="flex justify-between items-start">
                  <div className="text-xl font-medium opacity-80">04</div>
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-4 leading-tight tracking-tight font-display">{services[3].title}</h3>
                  <p className="text-lg font-medium opacity-90 leading-relaxed mb-6">{services[3].description}</p>
                  <div className="flex flex-wrap gap-2">
                    {services[3].tags.map(tag => (
                      <span key={tag} className={`px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm ${services[3].textColor === "text-white" ? "bg-white/20 text-white" : "bg-black/10 text-black"}`}>{tag}</span>
                    ))}
                  </div>
                </div>
             </div>
          </motion.div>

          {/* Card 5 (CTA) */}
          <motion.div 
            style={{ y: card5Y, zIndex: 50 }} 
            className={`absolute ${isSmallHeight ? "top-44" : "top-64"} w-full max-w-sm`}
          >
             <ServiceCtaCard service={services[4]} isMobile={true} />
          </motion.div>

        </div>
      </div>

      {/* --- DESKTOP VIEW (Horizontal Scroll Sticky) --- */}
      <div className="hidden md:block sticky top-0 h-screen overflow-hidden bg-noise">
        <motion.div style={{ y: gradientY }} className={`absolute top-0 left-0 w-full ${isMobile ? "h-32" : "h-64"} bg-gradient-to-b from-black via-black/90 to-transparent z-[60] pointer-events-none`} />
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
                return <ServiceCtaCard key={service.id} service={service} index={index} isNestHub={isNestHub} />;
              }

              return (
                <div
                  key={service.id}
                  className={`relative flex-shrink-0 w-[450px] h-[60vh] rounded-3xl ${isNestHub ? "p-8" : "p-12"} flex flex-col justify-between ${
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
                    <h3 className={`${isNestHub ? "text-3xl mb-4" : "text-5xl mb-6"} font-bold leading-tight tracking-tight font-display`}>
                      {service.title}
                    </h3>
                    <p className={`${isNestHub ? "text-base mb-4" : "text-xl mb-8"} font-medium opacity-90 leading-relaxed`}>
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
