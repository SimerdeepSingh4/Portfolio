import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const Testimonial = React.memo(({ testimonial }) => {
  if (!testimonial) return null;

  const quoteText = testimonial.quote;
  const authorName = testimonial.author;
  const authorRole = testimonial.role;
  const authorCompany = testimonial.company;

  return (
    <motion.div
      className="max-w-4xl mx-auto mb-16 px-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="relative p-[1px] rounded-3xl overflow-hidden bg-gradient-to-br from-primary/30 via-purple-500/10 to-transparent shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
        <div className="bg-white/90 dark:bg-card/40 backdrop-blur-xl p-8 md:p-12 rounded-[23px] relative overflow-hidden group">
          {/* Background Ambient Glow */}
          <div className="absolute -top-12 -left-12 w-40 h-40 bg-primary/10 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />
          
          <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-8 items-start">
            <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center shrink-0">
              <Quote className="h-8 w-8 rotate-180" />
            </div>

            <div className="flex-grow">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-primary/70">Client Feedback</span>
                <div className="h-[1px] flex-1 bg-border/30" />
              </div>

              <blockquote className="text-lg md:text-xl text-foreground font-medium italic leading-relaxed mb-6">
                "{quoteText}"
              </blockquote>

              <div className="flex flex-col">
                <cite className="not-italic font-bold text-foreground text-base tracking-wide font-display">
                  {authorName}
                </cite>
                <span className="text-xs text-muted-foreground mt-0.5">
                  {authorRole} • <span className="text-primary/80 font-medium">{authorCompany}</span>
                </span>
              </div>
            </div>
          </div>

          {/* Decorative Corner Lines */}
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/20 rounded-tr-[23px]" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary/20 rounded-bl-[23px]" />
        </div>
      </div>
    </motion.div>
  );
});

export default Testimonial;
