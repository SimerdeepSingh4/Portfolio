import { ArrowRight, ExternalLink, Github, Star, Clock, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { useInView } from "@/hooks/useInView";
import { useState } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { ImageLightbox } from "./ImageLightbox";

const projects = [
  {
    id: 1,
    title: "Mentora LMS",
    description: "A full-featured Learning Management System built using MERN stack with role-based dashboards for students, teachers, and admins.",
    image: "/projects/Project1B.png",
    tags: ["React", "Vite", "Node.js", "Express", "Redux", "JWT", "MongoDB", "Shadcn UI", "Cloudinary", "Stripe"],
    difficulty: "Advanced",
    duration: "3 months",
    featured: true,
    demoUrl: "#",
    githubUrl: "https://github.com/SimerdeepSingh4/Mentora-LMS-",
    videoUrl: "https://youtu.be/TTx7Y3a7EmA?si=E7N5qydJKF1I7O0T" 
  },
  {
    id: 2,
    title: "V.O.L.T (Voice-to-Output Language Transcription)",
    description: "An intelligent multilingual speech-to-text app that provides real-time transcription along with emotion detection and tone transformation.",
    image: "/projects/project2C.png",
    tags: ["React", "Node.js", "Firebase", "Google Cloud Speech API"],
    difficulty: "Intermediate",
    duration: "2 months",
    featured: true,
    demoUrl: "#",
    githubUrl: "https://github.com/SimerdeepSingh4/V.O.L.T",
    videoUrl: "https://youtu.be/TTx7Y3a7EmA?si=E7N5qydJKF1I7O0T"
  },
  {
    id: 3,
    title: "AI-Powered Code Review Platform",
    description: "An intelligent code review app that uses Google's Gemini AI to provide real-time feedback on prewritten code with syntax highlighting and markdown-based insights.",
    image: "/projects/project3A.png",
    tags: ["React", "Vite", "Node.js", "PrismJS", "Express", "React Markdown", "Axios", "Google Generative AI (Gemini)"],
    difficulty: "Advanced",
    duration: "2.5 months",
    featured: false,
    demoUrl: "#",
    githubUrl: "https://github.com/SimerdeepSingh4/Code-Reviewer",
    videoUrl: "https://youtu.be/TTx7Y3a7EmA?si=E7N5qydJKF1I7O0T"
  },
];

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
    "Redux": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg"


  };

export default function ProjectsSection() {
  const [ref, inView] = useInView();
  const [expandedTags, setExpandedTags] = useState({});
  const [lightboxImage, setLightboxImage] = useState(null);

  const toggleTags = (id) => {
    setExpandedTags((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const openLightbox = (project) => {
    setLightboxImage({
      src: project.image,
      alt: `Screenshot of ${project.title}`,
      title: project.title
    });
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case 'beginner':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'advanced':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
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

  return (
    <section id="projects" ref={ref} className={`py-24 px-4 relative z-10 section-fade${inView ? " in-view" : ""}`}>
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-slate-900 dark:text-foreground">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-slate-700 dark:text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance, and user experience.
        </p>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {projects.map((project) => {
            const showAll = expandedTags[project.id];
            const visibleTags = showAll ? project.tags : project.tags.slice(0, 4);
            const hiddenCount = project.tags.length - 4;

            return (
              <motion.div key={project.id} variants={cardVariants}>
                <Tilt
                  tiltMaxAngleX={5}
                  tiltMaxAngleY={5}
                  perspective={1000}
                  scale={1.02}
                  transitionSpeed={450}
                  className="group"
                >
                  <div className="bg-white dark:bg-card rounded-lg overflow-hidden shadow-lg card-hover relative border border-gray-200/50 dark:border-gray-700/50">
                    {/* Featured Badge */}
                    {project.featured && (
                      <motion.div 
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
                        src={project.image}
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

                    <div className="p-6">
                      {/* Project Meta Information */}
                      <div className="flex items-center gap-2 mb-4">
                        <span className={`px-2 py-1 text-xs font-medium border rounded-full ${getDifficultyColor(project.difficulty)}`}>
                          {project.difficulty}
                        </span>
                        <span className="flex items-center gap-1 px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                          <Clock size={12} />
                          {project.duration}
                        </span>
                      </div>
                      
                      {/* Tech Stack Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {visibleTags.map((tag, index) => (
                          <motion.span
                            key={tag}
                            className="flex items-center gap-1 px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                          >
                            {tagIcons[tag] && (
                              <motion.img
                                src={tagIcons[tag]}
                                alt={tag}
                                title={tag}
                                className="w-4 h-4 object-contain"
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

                        {project.tags.length > 4 && (
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

                      <motion.h3 
                        className="text-xl font-semibold mb-2 text-slate-900 dark:text-foreground"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        {project.title}
                      </motion.h3>
                      
                      <motion.p 
                        className="text-sm mb-4 text-slate-700 dark:text-muted-foreground leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        {project.description}
                      </motion.p>

                      <div className="flex justify-between items-center">
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
                        </div>
                      </div>
                    </div>
                  </div>
                </Tilt>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div 
          className="text-center mt-12 space-y-4"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/projects"
                className="cosmic-button flex items-center gap-2 group"
              >
                <span>View All Projects</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            
            <motion.a
              className="px-6 py-3 rounded-full border-2 border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 backdrop-blur-sm flex items-center gap-2 group"
              target="_blank"
              href="https://github.com/SimerdeepSingh4"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Check My GitHub</span>
              <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Image Lightbox */}
      <ImageLightbox
        isOpen={!!lightboxImage}
        onClose={closeLightbox}
        src={lightboxImage?.src}
        alt={lightboxImage?.alt}
        title={lightboxImage?.title}
      />
    </section>
  );
};
