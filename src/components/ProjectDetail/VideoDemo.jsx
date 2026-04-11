import React from "react";
import { motion } from "framer-motion";

const VideoDemo = React.memo(({ project }) => {
  if (!project.videoUrl) return null;
  return (
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
  );
});

export default VideoDemo;
