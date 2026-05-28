import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import comingSoonAnimation from "../../../public/coming soon.json";

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
          className="flex justify-center mb-2"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
        >
          <Lottie
            animationData={comingSoonAnimation}
            loop={true}
            className="w-64 h-64 md:w-80 md:h-80"
          />
        </motion.div>

        <motion.h3
          className="text-2xl md:text-3xl font-bold mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Next in the <span className="text-primary">Pipeline</span>
        </motion.h3>

        <motion.p
          className="text-muted-foreground text-base md:text-lg mb-6 max-w-xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          I am currently developing full-stack web applications, integrating AI API endpoints, and setting up automated CI/CD pipelines to streamline deployment workflows.
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
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground bg-card px-4 py-2 rounded-full border border-border/50 shadow-sm select-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <span>Currently in Development</span>
        </motion.div>
      </div>
    </motion.div>
  );
});

export default ComingSoonSection;
