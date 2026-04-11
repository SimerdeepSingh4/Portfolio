import React from "react";
import { motion } from "framer-motion";

const ComingSoonSection = React.memo(() => {
  return (
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
          <div className="text-6xl mb-4 text-center">🚀</div>
        </motion.div>

        <motion.h3
          className="text-2xl md:text-3xl font-bold mb-4"
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
          I'm currently working on several exciting frontend and full-stack projects using MERN, Next.js, and other modern frameworks. Stay tuned for innovative solutions that blend creativity with technology.
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
          className="inline-flex items-center gap-2 text-sm text-muted-foreground bg-card px-4 py-2 rounded-full border border-border/50 shadow-sm"
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
  );
});

export default ComingSoonSection;
