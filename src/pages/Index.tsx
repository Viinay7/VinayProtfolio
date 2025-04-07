
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Education } from "@/components/Education";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Achievements } from "@/components/achievements";
import { OtherInterests } from "@/components/Otherintrests";

const Index = () => {
  return (
    <ThemeProvider defaultTheme="light">
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Certifications />
        <Achievements />
        <OtherInterests />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
