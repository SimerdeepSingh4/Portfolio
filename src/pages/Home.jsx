import { Navbar } from "../components/Navbar";
import { ThemeBackground } from "@/components/ThemeBackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import GitHubSection from "../components/GitHubSection";
import ContactSection from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Background Effects */}
      <ThemeBackground />

      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
          <ProjectsSection />


          <GitHubSection />


          <ContactSection />

      </main>

      {/* Footer */}
      <Footer />
      
      {/* Floating Action Button */}

    </div>
  );
};

export default Home;
