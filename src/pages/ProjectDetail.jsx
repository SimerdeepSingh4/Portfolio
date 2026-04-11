import { useParams, Link } from "react-router-dom";
import React, { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { projects } from "../data/projects";

// Extracted Components
import ProjectHero from "../components/ProjectDetail/ProjectHero";
import SneakPeek from "../components/ProjectDetail/SneakPeek";
import FeaturesChallenges from "../components/ProjectDetail/FeaturesChallenges";
import VideoDemo from "../components/ProjectDetail/VideoDemo";
import ShowcaseContent from "../components/ProjectDetail/ShowcaseContent";
import TechStack from "../components/ProjectDetail/TechStack";
import PerformanceNote from "../components/ProjectDetail/PerformanceNote";

// Global Components (Static imports to avoid Vite chunk warnings)
import { Navbar } from "../components/Navbar";
import { ThemeBackground } from "@/components/ThemeBackground";
import { Footer } from "../components/Footer";
import { ImageLightbox } from "../components/ImageLightbox";

export const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [activeSection, setActiveSection] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const openLightbox = useCallback((src, alt, title, imageIndex = null, imageArray = null) => {
    setLightboxImage({
      src,
      alt,
      title,
      imageIndex: imageIndex !== null ? imageIndex : null,
      imageArray: imageArray || null
    });
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxImage(null);
  }, []);

  const navigateLightbox = useCallback((direction) => {
    setLightboxImage((prev) => {
      if (!prev?.imageArray || prev.imageIndex === null) return prev;
      const currentIndex = prev.imageIndex;
      const totalImages = prev.imageArray.length;
      let newIndex;
      if (direction === 'next') {
        newIndex = (currentIndex + 1) % totalImages;
      } else {
        newIndex = (currentIndex - 1 + totalImages) % totalImages;
      }
      return {
        ...prev,
        src: prev.imageArray[newIndex],
        imageIndex: newIndex
      };
    });
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        <ThemeBackground />
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <motion.div
            className="text-center p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="z-10 max-w-xl">
              <h1 className="text-lg sm:text-xl md:text-2xl mb-2 text-yellow-400 font-semibold">
                Houston, we have a problem.
              </h1>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 leading-none">
                Project Not Found
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6">
                The project you're looking for doesn't exist.
              </p>
              <Link
                to="/projects"
                className="cosmic-button text-base sm:text-lg py-3 px-8 rounded-full shadow-lg hover:scale-105 transition-all duration-300 inline-block"
              >
                Back to Projects
              </Link>
            </div>
          </motion.div>
        </main>
        <Footer />
      </div>
    );
  }

  const isDemoAvailable = project.demoUrl && project.demoUrl !== "#";

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden flex flex-col">
      <ThemeBackground />
      <Navbar />

      {/* Nebula Backdrop Effect */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[10%] left-[10%] w-[80vw] h-[80vw] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[60vw] h-[60vw] rounded-full bg-secondary/5 blur-[100px]" />
      </div>

      <main className="flex-grow pt-24 md:pt-20 relative z-10">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: -0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300 mb-6 group"
            >
              <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              </div>
              <span className="font-medium tracking-wide text-sm">Back to Projects</span>
            </Link>
          </motion.div>

          {/* Page Sections with staggered fade-in */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <ProjectHero project={project} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <SneakPeek project={project} isDemoAvailable={isDemoAvailable} />
          </motion.div>

          <FeaturesChallenges project={project} />
          <VideoDemo project={project} />
          
          <ShowcaseContent
            project={project}
            activeSection={activeSection}
            currentImageIndex={currentImageIndex}
            setActiveSection={setActiveSection}
            setCurrentImageIndex={setCurrentImageIndex}
            openLightbox={openLightbox}
          />
          
          <TechStack tech={project.tech} />
          <PerformanceNote note={project.performanceNote} />
        </div>
      </main>

      <Footer />

      <ImageLightbox
        isOpen={!!lightboxImage}
        onClose={closeLightbox}
        src={lightboxImage?.src}
        alt={lightboxImage?.alt}
        title={lightboxImage?.title}
        onPrevious={() => navigateLightbox('previous')}
        onNext={() => navigateLightbox('next')}
        hasPrevious={lightboxImage?.imageArray && lightboxImage?.imageIndex > 0}
        hasNext={lightboxImage?.imageArray && lightboxImage?.imageIndex < (lightboxImage?.imageArray?.length - 1)}
      />
    </div>
  );
};

export default ProjectDetail;