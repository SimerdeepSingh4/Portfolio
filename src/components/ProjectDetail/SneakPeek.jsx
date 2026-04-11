import React from "react";
import { motion } from "framer-motion";

const SneakPeek = React.memo(({ project, isDemoAvailable }) => {
  if (!project.sneakPeek || !isDemoAvailable) return null;
  return (
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
        <div className="mt-3 text-sm text-muted-foreground text-center">
          If the preview is blocked by the browser or server, <a href={project.demoUrl} target="_blank" rel="noreferrer" className="text-primary underline font-medium">open the demo in a new tab</a>.
        </div>
      </div>
    </motion.div>
  );
});

export default SneakPeek;
