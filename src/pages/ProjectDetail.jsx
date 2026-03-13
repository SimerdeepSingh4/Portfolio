
import { useParams, Link } from "react-router-dom";
import React, { useEffect, useState, lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Play,
  Star,
  Clock,
  Users,
  Target,
  Zap,
  Eye,
  ChevronLeft,
  ChevronRight,
  X,
  Calendar,
  Award,
  Code2
} from "lucide-react";
const Navbar = lazy(() => import("../components/Navbar").then(m => ({ default: m.Navbar })));
const ThemeBackground = lazy(() => import("@/components/ThemeBackground").then(m => ({ default: m.ThemeBackground })));
const Footer = lazy(() => import("../components/Footer").then(m => ({ default: m.Footer })));
const ImageLightbox = lazy(() => import("../components/ImageLightbox").then(m => ({ default: m.ImageLightbox })));
import { projects } from "../data/projects";
import NotFound from "./NotFound";

export const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [activeSection, setActiveSection] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        <Suspense fallback={<div className="text-center py-10">Loading background...</div>}>
          <ThemeBackground />
        </Suspense>
        <Suspense fallback={<div className="text-center py-10">Loading navbar...</div>}>
          <Navbar />
        </Suspense>
        <main className="flex-grow flex items-center justify-center">
          <motion.div
            className="text-center p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <main className="flex-grow flex flex-col items-center justify-center text-center px-4 pt-10 pb-0 relative">
              <div className="z-10 max-w-xl animate-fade-in">
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
                  className="cosmic-button text-base sm:text-lg py-3 px-8 rounded-full shadow-lg hover:scale-105 focus-visible:outline-2 focus-visible:outline-primary transition-all duration-300 inline-block"
                >
                  Back to Projects
                </Link>
              </div>
            </main>
          </motion.div>
        </main>
        <Suspense fallback={<div className="text-center py-10">Loading footer...</div>}>
          <Footer />
        </Suspense>
      </div>
    );
  }


  const isDemoAvailable = project.demoUrl && project.demoUrl !== "#";
  const isGithubAvailable = project.githubUrl && project.githubUrl !== "#";
  const isFeatured = !!project.featured;

  const tagIcons = {
    "Redis":"https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/redis-icon.png",
    "Context API": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "React-Rnd": "https://raw.githubusercontent.com/bokuweb/react-rnd/refs/heads/master/logo.png",
    "SCSS": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvzl7r0NVEDNeZmp-iWtn7HchjBcX01nzhkw&s",
    "Local Storage": "https://img.icons8.com/?size=96&id=13057&format=png",
    "Vanilla JS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
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
    "Google Gemini": "https://img.icons8.com/?size=512&id=rnK88i9FvAFO&format=png",
    "React Markdown": "https://www.svgrepo.com/show/446620/markdown.svg",
    "PrismJS": "https://prismjs.com/assets/logo.svg",
    "Cloudinary": "https://us.v-cdn.net/6036703/uploads/623ZP60L4HP4/cloudinary-cloud-glyph-blue-png.png",
    "Axios": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg",
    "Redux": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
    "Whisper API": "https://www.svgrepo.com/show/306500/openai.svg",
    "HTML": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    "CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    "EJS": "https://www.svgrepo.com/show/373574/ejs.svg",
    "Leaflet.js": "https://leafletjs.com/docs/images/logo.png",
    "Geolocation API": "https://uxwing.com/wp-content/themes/uxwing/download/location-travel-map/location-icon.png",
    "Chess.js": "https://images.chesscomfiles.com/uploads/v1/user/33.862d5ff1.160x160o.578dc76c0662@2x.png",
    "Socket.IO": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT4bSbljFkmXXm90uFGrz-vu8G6oP4yDT4hQ&s",
    "GSAP": "https://avatars.githubusercontent.com/u/2386673?v=4",
    "Model Context Protocol (MCP)": "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/light/mcp.png",
    "Framer Motion": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPznwv7OeqDgGjrlZfT28XyX4J9oJyZ9TYwg&s",
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty?.toLowerCase()) {
      case 'beginner':
        return 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900 dark:text-green-300';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900 dark:text-yellow-300';
      case 'advanced':
        return 'bg-red-100 text-red-800 border-red-200 dark:bg-red-900 dark:text-red-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-800 dark:text-gray-300';
    }
  };



  const openLightbox = (src, alt, title, imageIndex = null, imageArray = null) => {
    setLightboxImage({
      src,
      alt,
      title,
      imageIndex: imageIndex !== null ? imageIndex : null,
      imageArray: imageArray || null
    });
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const navigateLightbox = (direction) => {
    if (!lightboxImage?.imageArray || lightboxImage.imageIndex === null) return;

    const currentIndex = lightboxImage.imageIndex;
    const totalImages = lightboxImage.imageArray.length;
    let newIndex;

    if (direction === 'next') {
      newIndex = (currentIndex + 1) % totalImages;
    } else {
      newIndex = (currentIndex - 1 + totalImages) % totalImages;
    }

    setLightboxImage({
      ...lightboxImage,
      src: lightboxImage.imageArray[newIndex],
      imageIndex: newIndex
    });
  };

  const nextImage = () => {
    const currentSection = project.sections?.[activeSection];
    const totalImages = currentSection ? currentSection.images.length : (project.images?.length || 0);
    setCurrentImageIndex((prev) => (prev + 1) % totalImages);
  };

  const prevImage = () => {
    const currentSection = project.sections?.[activeSection];
    const totalImages = currentSection ? currentSection.images.length : (project.images?.length || 0);
    setCurrentImageIndex((prev) => (prev - 1 + totalImages) % totalImages);
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden flex flex-col">
      <Suspense fallback={<div className="text-center py-10">Loading background...</div>}>
        <ThemeBackground />
      </Suspense>
      <Suspense fallback={<div className="text-center py-10">Loading navbar...</div>}>
        <Navbar />
      </Suspense>

      <main className="flex-grow pt-24 md:pt-20 relative z-10">
        {/* Page-level readability overlay (light mode only) */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="w-full h-full bg-white/30 dark:bg-transparent" />
        </div>
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Back Button & Header */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 mb-6 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Projects
            </Link>
          </motion.div>

          {/* Hero Section */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-br from-white/95 to-gray-50/95 dark:from-card/50 dark:to-card/80 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-gray-200/50 dark:border-primary/10 shadow-2xl relative overflow-hidden">
              {/* Background decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-br from-secondary/15 to-primary/15 rounded-full blur-2xl"></div>

              <div className="relative z-10">
                {/* Project badges */}
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  {isFeatured && (
                    <motion.div
                      className="flex items-center gap-1 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-primary dark:to-secondary px-3 py-1 rounded-full text-xs font-medium text-white shadow-lg border border-white/20 dark:border-transparent"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <Star size={12} fill="currentColor" />
                      Featured Project
                    </motion.div>
                  )}
                  {isDemoAvailable && (
                    <span className="flex items-center gap-1 px-3 py-1 text-xs font-medium border rounded-full bg-green-100 dark:bg-green-900/30 text-green-500 dark:text-green-800 border-green-300 dark:border-green-700">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      Live
                    </span>
                  )}
                </div>

                <h1 className="text-4xl md:text-5xl gradient-text font-bold mb-6 dark:text-foreground relative z-20">
                  {project.title}
                </h1>

                <p className="text-lg leading-relaxed mb-8 max-w-4xl text-gray-700 dark:text-muted-foreground mx-auto text-center">
                  {project.description}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  {isDemoAvailable && (
                    <motion.a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cosmic-button flex items-center gap-2 group"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                      Live Demo
                    </motion.a>
                  )}
                  {isGithubAvailable && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-full border-2 border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 backdrop-blur-sm flex items-center gap-2 group"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={16} className="group-hover:rotate-12 transition-transform" />
                      View Code
                    </motion.a>
                  )}
                  {project.videoUrl && (
                    <motion.a
                      href={project.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-full bg-gradient-to-r from-red-500/10 to-red-600/10 border border-red-500/30 text-red-600 font-medium hover:bg-red-500/20 text- transition-all duration-300 flex items-center gap-2 group"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Play size={16} fill="currentColor" className="group-hover:scale-110 transition-transform" />
                      Watch Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sneak Peek Inline Preview (renders automatically for trusted small demos) */}
          {project.sneakPeek && isDemoAvailable && (
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold mb-2 gradient-text">Live Preview</h2>
                <p className="text-gray-600 dark:text-muted-foreground max-w-2xl mx-auto">Interactive sneak peek of the live demo — embedded directly below.</p>
              </div>
              <div className="relative bg-white/90 dark:bg-card/50 backdrop-blur-sm rounded-2xl p-4 border border-gray-200 dark:border-primary/10 shadow-xl">
                <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
                  <iframe
                    className="w-full h-full"
                    src={project.demoUrl}
                    title={`Preview: ${project.title}`}
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin"
                  />
                </div>
                <div className="mt-3 text-sm text-muted-foreground">
                  If the preview is blocked by the browser or server, <a href={project.demoUrl} target="_blank" rel="noreferrer" className="text-primary underline">open the demo in a new tab</a>.
                </div>
              </div>
            </motion.div>
          )}

          {/* Features & Challenges Grid */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Features */}
            {project.features && (
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-500/10 dark:to-emerald-500/10 border border-green-200 dark:border-green-500/30 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-green-500/10 rounded-xl">
                    <Target className="w-6 h-6 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-green-800 dark:text-green-400">Key Features</h2>
                </div>
                <ul className="space-y-3">
                  {project.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-3 feature-text"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + (i * 0.1) }}
                    >
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0 "></div>
                      <span >{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}

            {/* Challenges */}
            {project.challenges && (
              <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-500/10 dark:to-red-500/10 border border-orange-200 dark:border-orange-500/30 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-orange-500/10 rounded-xl">
                    <Zap className="w-6 h-6 text-orange-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-orange-800 dark:text-orange-400">Challenges Solved</h2>
                </div>
                <ul className="space-y-3">
                  {project.challenges.map((challenge, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-3 challenge-text"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + (i * 0.1) }}
                    >
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{challenge}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>

          {/* Video Demo Section */}
          {project.videoUrl && (
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-3 gradient-text">Project Demo</h2>
                <p className="text-gray-600 dark:text-muted-foreground max-w-2xl mx-auto">Watch the project in action and see how it works</p>
              </div>
              <div className="relative bg-white/90 dark:bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-primary/10 shadow-xl">
                <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
                  <iframe
                    className="w-full h-full"
                    src={project.videoUrl}
                    title={`${project.title} Demo Video`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* Project Sections or Gallery */}
          {project.sections?.length > 0 ? (
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-3 gradient-text">Project Showcase</h2>
                <p className="text-gray-600 dark:text-muted-foreground">Explore different aspects of this project</p>
              </div>

              {/* Section Navigation */}
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {project.sections.map((section, index) => (
                  <motion.button
                    key={index}
                    onClick={() => {
                      setActiveSection(index);
                      setCurrentImageIndex(0);
                    }}
                    className={`px-6 py-3 rounded-full transition-all duration-300 ${activeSection === index
                        ? 'bg-primary text-primary-foreground shadow-lg'
                        : 'bg-white/90 dark:bg-card hover:bg-gray-100 dark:hover:bg-card/80  dark:text-muted-foreground hover:text-gray-900 dark:hover:text-foreground border border-gray-200 dark:border-border'
                      }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {section.title}
                  </motion.button>
                ))}
              </div>

              {/* Active Section Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSection}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white/80 dark:bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-primary/10"
                >
                  <h3 className="text-2xl font-bold mb-4">{project.sections[activeSection].title}</h3>
                  <p className="text-gray-700 dark:text-muted-foreground mb-8 leading-relaxed">
                    {project.sections[activeSection].content}
                  </p>

                  {/* Image Gallery with Navigation */}
                  {project.sections[activeSection].images.length > 0 && (
                    <div className="relative">
                      <div className="relative overflow-hidden rounded-xl">
                        <motion.img
                          key={currentImageIndex}
                          src={project.sections[activeSection].images[currentImageIndex]}
                          alt={`${project.title} - ${project.sections[activeSection].title} (${currentImageIndex + 1})`}
                          loading="lazy"
                          className="w-full h-auto max-h-[600px] object-cover cursor-pointer shadow-2xl"
                          onClick={() => openLightbox(
                            project.sections[activeSection].images[currentImageIndex],
                            `${project.title} - ${project.sections[activeSection].title}`,
                            project.sections[activeSection].title,
                            currentImageIndex,
                            project.sections[activeSection].images
                          )}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5 }}
                          whileHover={{ scale: 1.02 }}
                        />

                        {/* Image Navigation */}
                        {project.sections[activeSection].images.length > 1 && (
                          <>
                            <button
                              onClick={prevImage}
                              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 hover:scale-110"
                            >
                              <ChevronLeft size={20} />
                            </button>
                            <button
                              onClick={nextImage}
                              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 hover:scale-110"
                            >
                              <ChevronRight size={20} />
                            </button>
                          </>
                        )}

                        {/* Image Counter */}
                        {project.sections[activeSection].images.length > 1 && (
                          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                            {currentImageIndex + 1} / {project.sections[activeSection].images.length}
                          </div>
                        )}

                        {/* Zoom hint */}
                        <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-xs flex items-center gap-1 opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-105 cursor-pointer backdrop-blur-sm"
                          onClick={() => openLightbox(
                            project.sections[activeSection].images[currentImageIndex],
                            `${project.title} - ${project.sections[activeSection].title}`,
                            project.sections[activeSection].title,
                            currentImageIndex,
                            project.sections[activeSection].images
                          )}>
                          <Eye size={12} />
                          Click to zoom
                        </div>
                      </div>

                      {/* Thumbnail Navigation */}
                      {project.sections[activeSection].images.length > 1 && (
                        <div className="flex justify-center gap-2 mt-4 overflow-x-auto pb-2">
                          {project.sections[activeSection].images.map((img, idx) => (
                            <motion.button
                              key={idx}
                              onClick={() => setCurrentImageIndex(idx)}
                              className={`relative overflow-hidden rounded-lg border-2 transition-all duration-300 ${currentImageIndex === idx ? 'border-primary' : 'border-transparent'
                                }`}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <img
                                src={img}
                                alt={`Thumbnail ${idx + 1}`}
                                className="w-16 h-12 object-cover"
                              />
                              {currentImageIndex === idx && (
                                <div className="absolute inset-0 bg-primary/20"></div>
                              )}
                            </motion.button>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          ) : (
            // Fallback for simple projects with just images
            project.images?.length > 0 && (
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-3 gradient-text">Project Gallery</h2>
                  <p className="text-gray-600 dark:text-muted-foreground">Screenshots and previews of the project</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.images.map((img, idx) => (
                    <motion.div
                      key={idx}
                      className="relative group overflow-hidden rounded-xl shadow-lg"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.1 }}
                      whileHover={{ y: -5 }}
                    >
                      <img
                        src={img}
                        alt={`Screenshot of ${project.title} (${idx + 1})`}
                        loading="lazy"
                        className="w-full h-auto max-h-[400px] object-cover cursor-pointer transition-transform duration-500 group-hover:scale-105"
                        onClick={() => openLightbox(img, `${project.title} Screenshot`, project.title, idx, project.images)}
                      />
                      <div
                        className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer"
                        onClick={() => openLightbox(img, `${project.title} Screenshot`, project.title, idx, project.images)}
                      >
                        <div className="bg-white/20 rounded-full p-3 backdrop-blur-sm hover:bg-white/30 transition-colors duration-200">
                          <Eye className="h-6 w-6 text-white" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          )}

          {/* Tech Stack */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="bg-gradient-to-br from-white/90 to-gray-50/80 dark:from-card/80 dark:to-card/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-primary/10 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Code2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold gradient-text">Technologies Used</h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {project.tech.map((tag, i) => (
                  <motion.div
                    key={i}
                    className="group relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50 dark:from-secondary/50 dark:to-secondary/30 hover:from-gray-200 hover:to-gray-100 dark:hover:from-secondary/70 dark:hover:to-secondary/50 border border-gray-200 dark:border-border/50 hover:border-gray-300 dark:hover:border-primary/30 rounded-xl p-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="flex flex-col justify-center items-center gap-3">
                      {tagIcons[tag] && (
                        <motion.img
                          src={tagIcons[tag]}
                          alt={tag}
                          className={`
    object-contain 
    ${tag === "Leaflet.js", "React-Rnd" ? "w-25 h-8 object-contain" : "w-8 h-8"} 
    ${tag === "PrismJS" ? "bg-black" : "bg-none"}
    group-hover:scale-110 transition-transform duration-300
  `}
                          whileHover={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 5, -5, 0]
                          }}
                          transition={{ duration: 0.5 }}
                        />
                      )}
                      <span className="text-sm font-medium text-center text-gray-700  group-hover:text-primary dark:group-hover:text-primary transition-colors duration-300">
                        {tag}
                      </span>
                    </div>

                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Special Note for project 3 */}
        {project.id === "4" && (
          <motion.div
            className="container mx-auto px-4 max-w-4xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/20 dark:to-orange-900/20 border-2 border-amber-400 dark:border-amber-700 rounded-xl p-6 shadow-lg backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-amber-300 to-orange-300 dark:from-amber-800 dark:to-orange-800 rounded-xl flex-shrink-0 shadow-md">
                  <Clock className="w-6 h-6 text-amber-900 dark:text-amber-200" />
                </div>
                <div>
                  <h4 className="font-bold text-black dark:text-black mb-2 text-lg">⚡ Performance Note</h4>
                  <p className="text-black dark:text-grey-400 text-sm leading-relaxed font-semibold">
                    This project's backend is hosted on Render's free tier. The first request may take 30-60 seconds due to server cold start, but subsequent requests will be much faster.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </main>

      <Suspense fallback={<div className="text-center py-10">Loading footer...</div>}>
        <Footer />
      </Suspense>
      {/* Image Lightbox */}
      <Suspense fallback={null}>
        <ImageLightbox
          isOpen={!!lightboxImage}
          onClose={closeLightbox}
          src={lightboxImage?.src}
          alt={lightboxImage?.alt}
          title={lightboxImage?.title}
          onPrevious={() => navigateLightbox('previous')}
          onNext={() => navigateLightbox('next')}
          hasPrevious={lightboxImage?.imageArray && lightboxImage?.imageIndex > 0}
          hasNext={lightboxImage?.imageArray && lightboxImage?.imageIndex < lightboxImage.imageArray.length - 1}
        />
      </Suspense>
    </div>
  );
};

export default ProjectDetail;