import Hero from "../components/ui/Hero";
import AboutMe from "../components/ui/AboutMe";
import Process from "../components/ui/Process";
import Services from "../components/ui/Services";
import Portfolio from "../components/ui/Portfolio";
import Footer from "../components/ui/Footer";

export default function Home() {
  return (
    <main className="relative">
      {/* Contenedor principal con fondo blanco y z-index superior */}
      <div className="relative z-10 bg-white mb-[80vh] shadow-2xl">
        <Hero />
        <AboutMe />
        <Process />
        <Services />
        <Portfolio />
      </div>
      
      {/* Footer fijo detrás del contenido */}
      <Footer />
    </main>
  );
}
