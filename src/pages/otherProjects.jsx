import React, { useState, useEffect, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ExternalLink, 
  Github, 
  Star, 
  Clock, 
  Eye, 
  Filter, 
  Search,
  Grid3X3,
  List,
  SortAsc,
  SortDesc,
  Calendar,
  TrendingUp
} from "lucide-react";
import { Navbar } from "../components/Navbar";
import { ThemeBackground } from "@/components/ThemeBackground";
import { Footer } from "../components/Footer";
import Tilt from "react-parallax-tilt";
import { projects } from "../data/projects";
import { ImageLightbox } from "../components/ImageLightbox";
import { useInView } from "@/hooks/useInView";

const Projects = () => {
  const [ref, inView] = useInView();
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTech, setSelectedTech] = useState("");
  const [sortBy, setSortBy] = useState("featured"); // featured, title, duration
  const [sortOrder, setSortOrder] = useState("desc"); // asc, desc
  const [viewMode, setViewMode] = useState("grid"); // grid, list
  const [lightboxImage, setLightboxImage] = useState(null);
  const [expandedTags, setExpandedTags] = useState({});

  // Get all unique technologies
  const allTechnologies = [...new Set(projects.flatMap(project => project.tech))].sort();

  const tagIcons = {
    "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    "Express": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    "Firebase": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    "Vite": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
    "Shadcn UI": "https://ui.shadcn.com/apple-touch-icon.png",
    "Stripe": "https://img.icons8.com/?size=512&id=21246&format=png",
    "JWT": "https://img.icons8.com/?size=512&id=rHpveptSuwDz&format=png",
    "Google Cloud Speech API": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg",
    "Google Generative AI (Gemini)": "https://img.icons8.com/?size=512&id=rnK88i9FvAFO&format=png",
    "React Markdown": "https://www.svgrepo.com/show/446620/markdown.svg",
    "PrismJS": "https://prismjs.com/assets/logo.svg",
    "Cloudinary": "https://us.v-cdn.net/6036703/uploads/623ZP60L4HP4/cloudinary-cloud-glyph-blue-png.png",
    "Axios": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg",
    "Redux": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
    "Whisper API": "https://www.svgrepo.com/show/306500/openai.svg"
  };

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
          // Get featured projects first, then by ID
          const aFeatured = (a.id === '1' || a.id === '2') ? 1 : 0;
          const bFeatured = (b.id === '1' || b.id === '2') ? 1 : 0;
          comparison = bFeatured - aFeatured || parseInt(a.id) - parseInt(b.id);
          break;
        case "title":
          comparison = a.title.localeCompare(b.title);
          break;
        case "duration":
          const getDurationValue = (id) => {
            if (id === '1') return 3;
            if (id === '2') return 2;
            if (id === '3') return 2.5;
            return 0;
          };
          comparison = getDurationValue(b.id) - getDurationValue(a.id);
          break;
        default:
          comparison = 0;
      }
      
      return sortOrder === "asc" ? comparison : -comparison;
    });

    setFilteredProjects(filtered);
  }, [searchTerm, selectedTech, sortBy, sortOrder]);

  const getDifficultyColor = (difficulty) => {
    switch (difficulty?.toLowerCase()) {
      case 'beginner':
        return 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900 dark:text-green-300 dark:border-green-800';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900 dark:text-yellow-300 dark:border-yellow-800';
      case 'advanced':
        return 'bg-red-100 text-red-800 border-red-200 dark:bg-red-900 dark:text-red-300 dark:border-red-800';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700';
    }
  };

  const toggleTags = (id) => {
    setExpandedTags((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const openLightbox = (project) => {
    const imageUrl = project.sections?.[0]?.images?.[0] || project.images?.[0] || (project.id === '1' ? '/projects/Project1B.png' : project.id === '2' ? '/projects/project2C.png' : '/projects/project3A.png');
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const isLiveProject = (project) => {
    return project.demoUrl && project.demoUrl !== "#";
  };

  const isGithubAvailable = (project) => {
    return project.githubUrl && project.githubUrl !== "#";
  };

  const ProjectCard = ({ project, index }) => {
    const showAll = expandedTags[project.id];
    const visibleTags = showAll ? project.tech : project.tech.slice(0, 4);
    const hiddenCount = project.tech.length - 4;
    const imageUrl = project.sections?.[0]?.images?.[0] || project.images?.[0] || (project.id === '1' ? '/projects/Project1B.png' : project.id === '2' ? '/projects/project2C.png' : '/projects/project3A.png');
    const isFeatured = project.id === '1' || project.id === '2';

    if (viewMode === "list") {
      return (
        <motion.div
          key={`list-card-${project.id}`}
          variants={cardVariants}
          className="bg-card rounded-lg overflow-hidden shadow-sm border border-border hover:shadow-lg transition-all duration-300"
        >
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 h-48 md:h-auto relative overflow-hidden">
              <motion.img
                src={imageUrl}
                alt={`Screenshot of ${project.title}`}
                loading="lazy"
                className="w-full h-full object-cover cursor-pointer transition-transform duration-300 hover:scale-110"
                onClick={() => openLightbox(project)}
                whileHover={{ scale: 1.05 }}
              />
              {isFeatured && (
                <motion.div 
                  key={`featured-list-${project.id}`}
                  className="absolute top-3 left-3 bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <Star size={12} fill="currentColor" />
                  Featured
                </motion.div>
              )}
            </div>
            <div className="md:w-2/3 p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className={`px-2 py-1 text-xs font-medium border rounded-full ${getDifficultyColor('Advanced')}`}>
                    Advanced
                  </span>
                  <span className="flex items-center gap-1 px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                    <Clock size={12} />
                    {project.id === '1' ? '3 months' : project.id === '2' ? '2 months' : '2.5 months'}
                  </span>
                  {isLiveProject(project) && (
                    <span className="flex items-center gap-1 px-2 py-1 text-xs font-medium border rounded-full bg-green-100 text-green-800 border-green-200">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      Live
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {visibleTags.map((tag, tagIndex) => (
                    <span
                      key={tag}
                      className="flex items-center gap-1 px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tagIcons[tag] && (
                        <img src={tagIcons[tag]} alt={tag} className="w-3 h-3 object-contain" />
                      )}
                      {tag}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <button
                      onClick={() => toggleTags(project.id)}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-muted text-muted-foreground hover:bg-muted/70 transition cursor-pointer"
                    >
                      {showAll ? "Show less" : `+${hiddenCount}`}
                    </button>
                  )}
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex space-x-3">
                  <Link
                    to={`/project/${project.id}`}
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                  </Link>
                  {isGithubAvailable(project) && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      );
    }

    // Grid view
    return (
      <motion.div key={`grid-card-${project.id}`} variants={cardVariants}>
        <Tilt
          tiltMaxAngleX={5}
          tiltMaxAngleY={5}
          perspective={1000}
          scale={1.02}
          transitionSpeed={450}
          className="group"
        >
          <div className="bg-card rounded-lg overflow-hidden shadow-sm border border-border card-hover relative h-full flex flex-col">
            {isFeatured && (
              <motion.div 
                key={`featured-grid-${project.id}`}
                className="absolute top-3 left-3 z-10 bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                <Star size={12} fill="currentColor" />
                Featured
              </motion.div>
            )}
            
            <div className="h-48 overflow-hidden relative">
              <motion.img
                src={imageUrl}
                alt={`Screenshot of ${project.title}`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 cursor-pointer"
                onClick={() => openLightbox(project)}
                whileHover={{ scale: 1.05 }}
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  className="bg-white/20 rounded-full p-2 backdrop-blur-sm"
                >
                  <Eye className="h-6 w-6 text-white" />
                </motion.div>
              </div>
            </div>

            <div className="p-6 flex-grow flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <span className={`px-2 py-1 text-xs font-medium border rounded-full ${getDifficultyColor('Advanced')}`}>
                  Advanced
                </span>
                <span className="flex items-center gap-1 px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                  <Clock size={12} />
                  {project.id === '1' ? '3 months' : project.id === '2' ? '2 months' : '2.5 months'}
                </span>
                {isLiveProject(project) && (
                  <span className="flex items-center gap-1 px-2 py-1 text-xs font-medium border rounded-full bg-green-100 text-green-800 border-green-200">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    Live
                  </span>
                )}
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {visibleTags.map((tag, tagIndex) => (
                  <motion.span
                    key={tag}
                    className="flex items-center gap-1 px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: tagIndex * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    {tagIcons[tag] && (
                      <motion.img
                        src={tagIcons[tag]}
                        alt={tag}
                        title={tag}
                        className="w-3 h-3 object-contain"
                        whileHover={{ 
                          scale: [1, 1.3, 1],
                          filter: ["brightness(1)", "brightness(1.3) drop-shadow(0 0 8px currentColor)", "brightness(1)"]
                        }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                      />
                    )}
                    {tag}
                  </motion.span>
                ))}

                {project.tech.length > 4 && (
                  <motion.button
                    onClick={() => toggleTags(project.id)}
                    className="px-2 py-1 text-xs font-medium border rounded-full bg-muted text-muted-foreground hover:bg-muted/70 transition cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {showAll ? "Show less" : `+${hiddenCount}`}
                  </motion.button>
                )}
              </div>

              <div className="flex-grow">
                <motion.h3 
                  className="text-xl font-semibold mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {project.title}
                </motion.h3>
                
                <motion.p 
                  className="text-muted-foreground text-sm mb-4 line-clamp-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {project.description}
                </motion.p>
              </div>

              <div className="flex justify-between items-center mt-auto">
                <div className="flex space-x-3">
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Link
                      to={`/project/${project.id}`}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      aria-label={`View details for ${project.title}`}
                    >
                      <ExternalLink size={20} />
                    </Link>
                  </motion.div>
                  {isGithubAvailable(project) && (
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <Github size={20} />
                      </a>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Tilt>
      </motion.div>
    );
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

          {/* Controls */}
          <motion.div 
            className="mb-8 space-y-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative flex-grow max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                />
              </div>

              {/* View Toggle */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === "grid" 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-background hover:bg-muted border border-border"
                  }`}
                >
                  <Grid3X3 size={18} />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === "list" 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-background hover:bg-muted border border-border"
                  }`}
                >
                  <List size={18} />
                </button>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              {/* Technology Filter */}
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <select
                  value={selectedTech}
                  onChange={(e) => setSelectedTech(e.target.value)}
                  className="pl-5   sm:pl-10 pr-8 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors appearance-none cursor-pointer"
                >
                  <option value="">All Technologies</option>
                  {allTechnologies.map((tech) => (
                    <option key={tech} value={tech}>
                      {tech}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort Controls */}
              <div className="flex gap-2 ">
                <div className="relative ">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="pl-3 pr-8 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors appearance-none cursor-pointer"
                  >
                    <option value="featured">Featured First</option>
                    <option value="title">Title</option>
                    <option value="duration">Duration</option>
                  </select>
                </div>
                <button
                  onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
                  className="p-2 bg-background hover:bg-muted border border-border rounded-lg transition-colors"
                >
                  {sortOrder === "asc" ? <SortAsc size={18} /> : <SortDesc size={18} />}
                </button>
              </div>
            </div>
          </motion.div>

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
                <ProjectCard key={`project-card-${project.id}-${viewMode}`} project={project} index={index} />
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
              <div className="text-6xl mb-4">🔍</div>
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
                className="cosmic-button"
              >
                Reset Filters
              </button>
            </motion.div>
          )}

          {/* Call to Action */}
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
                href="https://github.com/SimerdeepSingh4"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={20} />
                View All on GitHub
              </motion.a>
            </motion.div>
          )}
          
          {/* Coming Soon Section */}
          <motion.div 
            className="text-center mt-20 mb-8 z-50"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="max-w-2xl mx-auto z-50">
              <motion.div
                className="mb-6"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
              >
                <div className="text-6xl mb-4">🚀</div>
              </motion.div>
              
              <motion.h3 
                className="text-2xl md:text-3xl font-bold mb-4 "
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                More Amazing Projects <span className="text-primary">Coming Soon</span>
              </motion.h3>
              
              <motion.p 
                className="text-muted-foreground text-lg mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                I'm currently working on several exciting frontend and full-stack projects using MERN, Next.js, and other modern frameworks. Stay tuned for innovative solutions that blend creativity with technology powered by Next.js, MERN, AI/ML, Mobile Apps, and DevOps.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap justify-center gap-3 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                {['Next.js', 'MERN', 'AI/ML', 'Mobile Apps', 'DevOps'].map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="px-3 py-1 text-sm font-medium border rounded-full bg-primary/5 text-primary border-primary/20"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + (index * 0.1), type: "spring" }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
              
              <motion.div 
                className="inline-flex items-center gap-2 text-sm text-muted-foreground bg-card px-4 py-2 rounded-full border border-border/50"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <motion.div 
                  className="w-2 h-2 rounded-full bg-primary"
                  animate={{ 
                    opacity: [0.3, 1, 0.3],
                    scale: [0.8, 1.2, 0.8]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                />
                <span>Currently in development</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />

      {/* Image Lightbox */}
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
