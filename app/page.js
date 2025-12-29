import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Hackathons from "@/components/Hackathons";
import LeetCode from "@/components/LeetCode";
import ExtraCurricular from "@/components/ExtraCurricular";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen ">
      <Navbar />
      <div className="container mx-auto">
        <Hero />
        <About />
        <Education />
        <Skills />
       
        <Projects />
        <Certifications />
        <Hackathons />
        <ExtraCurricular/ >
        <Contact/>
      </div>
      <Footer />
    </main>
  );
}