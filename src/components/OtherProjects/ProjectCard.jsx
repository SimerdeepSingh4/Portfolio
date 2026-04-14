import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, Eye, ExternalLink, Github } from "lucide-react";
import Tilt from "react-parallax-tilt";
import { tagIcons } from "../../data/tagIcons";

const ProjectCard = React.memo(({ project, viewMode, openLightbox }) => {
  const tech = project.tech || [];
  const [showAll, setShowAll] = useState(false);
  const visibleTags = showAll ? tech : tech.slice(0, 4);
  const hiddenCount = tech.length - 4;
  const imageUrl = project.thumbnail || project.images?.[0] || project.sections?.[0]?.images?.[0];
  const isFeatured = !!project.featured;

  const isLiveProject = (project) => project.demoUrl && project.demoUrl !== "#";
  const isGithubAvailable = (project) => project.githubUrl && project.githubUrl !== "#";

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
                className="absolute top-3 left-3 bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 shadow-md"
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
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {visibleTags.map((tag) => (
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
                {tech.length > 4 && (
                  <button
                    onClick={(e) => { e.stopPropagation(); setShowAll(prev => !prev); }}
                    className="px-2 py-1 text-xs font-medium border rounded-full bg-muted text-muted-foreground hover:bg-muted/70 transition cursor-pointer"
                  >
                    {showAll ? "Show less" : `+${hiddenCount}`}
                  </button>
                )}
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex space-x-3 items-center">
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
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>
                )}
                {isLiveProject(project) && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-2 py-1 text-xs font-medium border rounded-full bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800"
                  >
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    Live
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
    <motion.div variants={cardVariants}>
      <Tilt
        tiltMaxAngleX={5}
        tiltMaxAngleY={5}
        perspective={1000}
        scale={1.02}
        transitionSpeed={450}
        className="group h-full"
      >
        <div className="bg-card rounded-lg overflow-hidden shadow-sm border border-border card-hover relative h-full flex flex-col">
          {isFeatured && (
            <motion.div
              className="absolute top-3 left-3 z-10 bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 shadow-md"
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
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
              <motion.div className="bg-white/20 rounded-full p-2 backdrop-blur-sm">
                <Eye className="h-6 w-6 text-white" />
              </motion.div>
            </div>
          </div>

          <div className="p-6 flex-grow flex flex-col">
            <div className="flex flex-wrap gap-2 mb-4">
              {visibleTags.map((tag, tagIndex) => (
                <motion.span
                  key={tag}
                  className="flex items-center gap-1 px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  {tagIcons[tag] && (
                    <img src={tagIcons[tag]} alt={tag} className="w-3 h-3 object-contain" />
                  )}
                  {tag}
                </motion.span>
              ))}
              {tech.length > 4 && (
                <motion.button
                  onClick={(e) => { e.stopPropagation(); setShowAll(prev => !prev); }}
                  className="px-2 py-1 text-xs font-medium border rounded-full bg-muted text-muted-foreground hover:bg-muted/70 transition cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {showAll ? "Show less" : `+${hiddenCount}`}
                </motion.button>
              )}
            </div>

            <div className="flex-grow">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{project.description}</p>
            </div>

            <div className="flex justify-between items-center mt-auto pt-4">
              <div className="flex space-x-3 items-center">
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
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github size={20} />
                    </a>
                  </motion.div>
                )}
                {isLiveProject(project) && (
                  <motion.div whileHover={{ scale: 1.02 }}>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-2 py-1 text-xs font-medium border rounded-full bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800"
                    >
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      Live
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
});

export default ProjectCard;
