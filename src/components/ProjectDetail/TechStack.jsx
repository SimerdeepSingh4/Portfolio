import React from "react";
import { motion } from "framer-motion";
import { tagIcons } from "../../data/tagIcons";

const TechStack = React.memo(({ tech }) => {
  if (!tech || tech.length === 0) return null;
  return (
    <div className="mb-16">
      <div className="flex flex-col items-center mb-10">
        <div className="h-[1px] w-12 bg-primary/30 mb-4" />
        <h3 className="text-sm font-bold tracking-[0.3em] uppercase text-muted-foreground/50">Technologies Used</h3>
      </div>
      
      <div className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-5xl mx-auto">
        {tech.map((tag, index) => (
          <motion.div
            key={tag}
            className="flex flex-col items-center group"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.03, duration: 0.4 }}
          >
            <motion.div
              className="w-14 h-14 md:w-16 md:h-16 bg-muted/20 dark:bg-card/40 backdrop-blur-sm rounded-2xl p-3.5 md:p-4 flex items-center justify-center border border-border/50 transition-all duration-300 group-hover:border-primary/30 group-hover:bg-primary/5"
              whileHover={{ y: -5 }}
            >
              {tagIcons[tag] ? (
                <img
                  src={tagIcons[tag]}
                  alt={tag}
                  className="w-full h-full object-contain filter transition-all duration-300 group-hover:brightness-110"
                />
              ) : (
                <div className="w-full h-full bg-primary/10 rounded-md flex items-center justify-center">
                  <span className="text-[10px] font-bold text-primary">{tag.substring(0, 2)}</span>
                </div>
              )}
            </motion.div>
            
            <span className="mt-3 text-[10px] md:text-xs font-bold tracking-widest text-muted-foreground/40 transition-colors duration-300 group-hover:text-primary uppercase">
              {tag}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
});

export default TechStack;
