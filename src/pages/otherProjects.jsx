import React, { useState, useEffect } from "react";
import { Github } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Components
import { Navbar } from "../components/Navbar";
import { ThemeBackground } from "@/components/ThemeBackground";
import { Footer } from "../components/Footer";
import { ImageLightbox } from "../components/ImageLightbox";
import ProjectCard from "../components/OtherProjects/ProjectCard";
import ProjectControls from "../components/OtherProjects/ProjectControls";
import ComingSoonSection from "../components/OtherProjects/ComingSoonSection";

// Data & Hooks
import { projects } from "../data/projects";
import { useInView } from "@/hooks/useInView";

const Projects = () => {
  const [ref, inView] = useInView();
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTech, setSelectedTech] = useState("");
  const [sortBy, setSortBy] = useState("featured"); // featured, title
  const [sortOrder, setSortOrder] = useState("desc"); // asc, desc
  const [viewMode, setViewMode] = useState("grid"); // grid, list
  const [lightboxImage, setLightboxImage] = useState(null);

  // Get all unique technologies
  const allTechnologies = [...new Set(projects.flatMap(project => project.tech))].sort();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter and sort projects
  useEffect(() => {
    let filtered = projects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesTech = selectedTech === "" || project.tech.includes(selectedTech);
      return matchesSearch && matchesTech;
    });

    // Sort projects
    filtered.sort((a, b) => {
      let comparison = 0;
      switch (sortBy) {
        case "featured":
          const aFeatured = a.featured ? 1 : 0;
          const bFeatured = b.featured ? 1 : 0;
          comparison = bFeatured - aFeatured || parseInt(a.id) - parseInt(b.id);
          break;
        case "title":
          comparison = a.title.localeCompare(b.title);
          break;
        default:
          comparison = 0;
      }
      return sortOrder === "asc" ? comparison : -comparison;
    });

    setFilteredProjects(filtered);
  }, [searchTerm, selectedTech, sortBy, sortOrder]);

  const openLightbox = (project) => {
    const imageUrl = project.thumbnail || project.images?.[0] || project.sections?.[0]?.images?.[0];
    setLightboxImage({
      src: imageUrl,
      alt: `Screenshot of ${project.title}`,
      title: project.title
    });
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden flex flex-col">
      <ThemeBackground />
      <Navbar />

      <main className="flex-grow pt-24 md:pt-20">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="text-primary">Projects</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A collection of my work showcasing various technologies and problem-solving approaches.
              Each project represents a unique challenge and learning experience.
            </p>
          </motion.div>

          <ProjectControls
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            viewMode={viewMode}
            setViewMode={setViewMode}
            selectedTech={selectedTech}
            setSelectedTech={setSelectedTech}
            allTechnologies={allTechnologies}
            sortBy={sortBy}
            setSortBy={setSortBy}
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
          />

          {/* Project Count */}
          <motion.div
            className="mb-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <p className="text-muted-foreground">
              Showing {filteredProjects.length} of {projects.length} projects
            </p>
          </motion.div>

          {/* Projects Grid/List */}
          <motion.div
            className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" : "space-y-6"}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            ref={ref}
          >
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={`project-card-${project.id}-${viewMode}`}
                  project={project}
                  viewMode={viewMode}
                  openLightbox={openLightbox}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <div className="text-6xl mb-4 text-center">🔍</div>
              <h3 className="text-xl font-semibold mb-2">No projects found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search terms or filters.
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedTech("");
                  setSortBy("featured");
                }}
                className="cosmic-button mx-auto"
              >
                Reset Filters
              </button>
            </motion.div>
          )}

          {/* GitHub CTA */}
          {filteredProjects.length > 0 && (
            <motion.div
              className="text-center mt-16"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <motion.a
                className="cosmic-button w-fit flex items-center mx-auto gap-2"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/SimerdeepSingh4"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={20} />
                View All on GitHub
              </motion.a>
            </motion.div>
          )}

          <ComingSoonSection />
        </div>
      </main>

      <Footer />

      <ImageLightbox
        isOpen={!!lightboxImage}
        onClose={closeLightbox}
        src={lightboxImage?.src}
        alt={lightboxImage?.alt}
        title={lightboxImage?.title}
      />
    </div>
  );
};

export default Projects;
