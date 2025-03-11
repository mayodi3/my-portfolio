import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";

const HomePage = () => {
  return (
    <div className="animate-fade-in">
      <Hero />
      <CTA />
      <About />
      <Projects />
      <Testimonials />
    </div>
  );
};

export default HomePage;
