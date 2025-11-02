import { Navbar } from "../components/Navbar";
import { ThemeBackground } from "@/components/ThemeBackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { FloatingActionButton } from "../components/FloatingActionButton";
import React, { lazy, Suspense } from "react";

// Lazy load heavier sections
const ProjectsSection = lazy(() => import("../components/ProjectsSection"));
const GitHubSection = lazy(() => import("../components/GitHubSection"));
const ContactSection = lazy(() => import("../components/ContactSection"));

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
         {/* Lazy-loaded sections with fallback */}
        <Suspense fallback={<div className="text-center py-10">Loading projects...</div>}>
          <ProjectsSection />
        </Suspense>
        <Suspense fallback={<div className="text-center py-10">Loading GitHub stats...</div>}>
          <GitHubSection />
        </Suspense>
        <Suspense fallback={<div className="text-center py-10">Loading contact form...</div>}>
          <ContactSection />
        </Suspense>
      </main>

      {/* Footer */}
      <Footer />
      
      {/* Floating Action Button */}
      <FloatingActionButton />
    </div>
  );
};

export default Home;
