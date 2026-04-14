import React from "react";
import { motion } from "framer-motion";
import { Star, ExternalLink, Github, Play, Terminal } from "lucide-react";

const ProjectHero = React.memo(({ project }) => {
  const isDemoAvailable = project.demoUrl && project.demoUrl !== "#";
  const isGithubAvailable = project.githubUrl && project.githubUrl !== "#";
  const isFeatured = !!project.featured;

  // Generate a pseudo-random hash for the "technical readout" feel
  const projectRef = `PRJ-${String(project.id || "").toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`;

  return (
    <motion.div
      className="mb-10"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="bg-gradient-to-br from-white/95 to-gray-50/95 dark:from-card/30 dark:to-card/60 backdrop-blur-xl rounded-[2rem] p-6 md:p-10 border-0 shadow-[0_24px_48px_-16px_rgba(0,0,0,0.08)] dark:shadow-[0_24px_48px_-16px_rgba(0,0,0,0.4)] relative overflow-hidden group">
        
        {/* Animated Background Accents - Scaled down */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[80px] -mr-32 -mt-32 animate-pulse-slow" />
        <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-secondary/10 rounded-full blur-[60px] -ml-32 -mb-32" />

        <div className="relative z-10">
          {/* Header Metadata - More compact */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            <div className="flex items-center gap-1.5 px-2.5 py-1 bg-primary/10 dark:bg-primary/5 rounded-md border border-primary/20 dark:border-primary/10">
              <Terminal size={10} className="text-primary" />
              <span className="text-[9px] font-mono tracking-[0.15em] text-primary/80 uppercase">{projectRef}</span>
            </div>
            
            {isFeatured && (
              <motion.div
                className="flex items-center gap-1 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-primary dark:to-secondary px-3 py-1 rounded-full text-[10px] font-bold text-white shadow-md shadow-primary/10"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              >
                <Star size={10} fill="currentColor" />
                FEATURED
              </motion.div>
            )}
            
            {isDemoAvailable && (
              <span className="flex items-center gap-1 px-3 py-1 text-[10px] font-semibold tracking-tight uppercase border border-green-500/20 rounded-full bg-green-500/5 text-green-500">
                <div className="w-1 h-1 rounded-full bg-green-500 animate-pulse" />
                Live
              </span>
            )}
          </div>

          <h1 className="text-3xl md:text-5xl font-bold mb-5 tracking-tight leading-tight text-foreground">
            <span className="opacity-90">{project.title ? project.title.split(' ')[0] : ''} </span>
            <span className="gradient-text">{project.title ? project.title.split(' ').slice(1).join(' ') : ''}</span>
          </h1>

          <p className="text-base md:text-lg leading-relaxed mb-8 max-w-2xl text-muted-foreground mx-auto font-light tracking-wide italic decoration-primary/20">
            {project.description}
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {isDemoAvailable && (
              <motion.a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-full text-sm font-bold flex items-center gap-2 group shadow-[0_12px_24px_-8px_rgba(var(--primary),0.3)] hover:shadow-[0_16px_32px_-8px_rgba(var(--primary),0.5)] transition-all duration-500"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Launch Live Demo"
              >
                <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                Launch Demo
              </motion.a>
            )}
            
            {isGithubAvailable && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full border border-border bg-background/50 backdrop-blur-sm text-foreground hover:bg-muted text-sm font-bold transition-all duration-300 flex items-center gap-2 group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="View Source Code"
              >
                <Github size={16} className="group-hover:rotate-12 transition-transform duration-500" />
                Repository
              </motion.a>
            )}

            {project.videoUrl && (
              <motion.a
                href={project.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-red-500/5 border border-red-500/20 text-red-500 text-sm font-bold hover:bg-red-500/10 transition-all duration-300 flex items-center gap-2 group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Watch Video Demonstration"
              >
                <Play size={16} fill="currentColor" className="group-hover:scale-110 transition-transform" />
                Play Demo
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
});

export default ProjectHero;
