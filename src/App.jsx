import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";

export default function App() {
  return (
    <>
      <Nav />

      <main>
        <Hero />

        <Section id="about" title="About" subtitle="Who I am & how I work" clipOverflow={false} crossfade scrub={2}>
          <About />
        </Section>

        
        <Section id="projects" title="Projects" subtitle="Selected work" clipOverflow={false} crossfade scrub={2}>
          <Projects />
        </Section>

        {/* SKILLS — badges/grids; don't clip */}
        <Section id="Skills" title="Skills" subtitle="Tech I use day-to-day" clipOverflow={false} crossfade scrub={2}>
          <Skills />
        </Section>

        {/* CONTACT — typically safe either way; keep visible to avoid clipping any flourish */}
        <Section id="contact" title="Get In Touch" subtitle="Open to internships, collabs & freelance" clipOverflow={false} crossfade scrub={2}>       
          <Contact />
        </Section>
        <div className="h-24 md:h-48" />
      </main>

      <Footer />
    </>
  );
}
