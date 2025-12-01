import Hero from "../components/ui/Hero";
import AboutMe from "../components/ui/AboutMe";
import Process from "../components/ui/Process";
import Services from "../components/ui/Services";
import Portfolio from "../components/ui/Portfolio";
import ContactHome from "../components/ui/ContactHome";
import Footer from "../components/ui/Footer";

export default function Home() {
  return (
    <main className="relative bg-white">
      <Hero />
      <AboutMe />
      <Process />
      <Services />
      <Portfolio />
      <ContactHome />
      <Footer minimal={true} />
    </main>
  );
}
