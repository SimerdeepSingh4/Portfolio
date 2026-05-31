import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const Testimonial = React.memo(({ testimonial }) => {
  if (!testimonial) return null;

  const quoteText = testimonial.quote;
  const authorName = testimonial.author;
  const authorRole = testimonial.role;
  const authorCompany = testimonial.company;
  const avatarUrl = testimonial.avatar;

  return (
    <motion.div
      className="max-w-4xl mx-auto mb-24 px-4 text-left"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="border-l-2 border-primary/50 pl-6 md:pl-10 py-2 relative flex flex-col gap-6">
        <Quote className="h-6 w-6 text-primary/40" />
        
        <blockquote className="text-lg md:text-xl md:leading-relaxed text-foreground/90 font-medium">
          "{quoteText}"
        </blockquote>

        <div className="flex items-center gap-4">
          {avatarUrl && (
            <img 
              src={avatarUrl} 
              alt={authorName} 
              className="w-12 h-12 rounded-full object-cover border border-border bg-muted/20"
              loading="lazy"
            />
          )}
          <div className="flex flex-col">
            <cite className="not-italic font-bold text-foreground text-sm tracking-wide">
              {authorName}
            </cite>
            <span className="text-xs text-muted-foreground mt-0.5">
              {authorRole} <span className="text-primary/70 mx-1.5">•</span> {authorCompany}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

export default Testimonial;
