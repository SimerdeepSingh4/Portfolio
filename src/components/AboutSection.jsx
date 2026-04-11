import { Briefcase, Code, User, Sparkles, ArrowRight } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const AboutSection = () => {
  const [ref, inView] = useInView();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section 
      id="about" 
      ref={ref} 
      className="py-24 px-4 relative overflow-hidden"
    >

      
      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-16"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary px-6 py-3 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-primary/20">
              <Sparkles className="w-4 h-4" />
              Getting to know me
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
              About <span className="text-primary italic">Me</span>
            </h2>
          </motion.div>

          {/* Bio Card (Restored/Preserved) */}
          <motion.div variants={itemVariants} className="space-y-6 mb-16 max-w-4xl mx-auto">
            <div className="relative bg-card/40 backdrop-blur-sm rounded-2xl p-8 border border-white/5 shadow-lg group">
              <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-xl"></div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground tracking-tight">
                Full-Stack Web Developer & <br/><span className="text-primary italic">Quick Learner</span>
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed font-medium">
                <p>
                  I'm a BCA graduate with a strong foundation in full-stack web development. I specialize in creating responsive, accessible, and performant web applications using modern technologies like React.js, Node.js, and MongoDB.
                </p>
                <p>
                  I've worked on multiple freelance and personal projects, including a ride-sharing app, a multilingual transcription web app, and a learning management system. I enjoy solving complex problems and am always exploring new technologies like Docker and automation tools to grow as a developer.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center">
              <motion.a 
                href="#contact" 
                className="cosmic-button group relative overflow-hidden flex items-center justify-center gap-2 px-8 py-3.5"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="https://drive.google.com/file/d/1fwKopCS-DvXjCuQYAfZRPSxzxmpAnZsQ/view?usp=sharing"
                target="_blank"
                className="px-8 py-3.5 rounded-full border-2 border-primary/30 text-primary font-bold text-sm tracking-widest uppercase hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 backdrop-blur-sm text-center"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Download CV
              </motion.a>
            </div>
          </motion.div>

          {/* Chronological Log: Timeline */}
          <div className="space-y-16 pt-16">
            <div className="text-center space-y-3">
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight">My <span className="text-primary italic">Journey</span></h3>
              <p className="text-muted-foreground text-base">Key milestones in my development career</p>
            </div>

            <div className="relative max-w-5xl mx-auto pl-10 sm:pl-0">
              {/* Vertical Scanning Line */}
              <div className="absolute top-0 bottom-0 left-0 sm:left-1/2 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent sm:-translate-x-1/2" />

              <div className="space-y-16">
                {[
                  {
                    title: "BCA Student, GLA University",
                    date: "2022 – 2025",
                    desc: "Core foundation in full-stack architectural systems and software engineering principles.",
                    icon: User,
                    align: "left"
                  },
                  {
                    title: "Freelance Web Developer",
                    date: "Dec 2023 – Oct 2024",
                    desc: "Deployed custom-built logistical and commercial platforms for high-growth clients.",
                    icon: Briefcase,
                    align: "right"
                  },
                  {
                    title: "R&D & Continuous Learning",
                    date: "Ongoing",
                    desc: "Exploring advanced AI integration, Docker orchestration, and reactive design patterns.",
                    icon: Code,
                    align: "left",
                    isOngoing: true
                  }
                ].map((log, idx) => (
                  <motion.div 
                    key={idx}
                    variants={itemVariants}
                    className={cn(
                      "relative flex flex-col sm:flex-row items-start sm:items-center gap-12",
                      log.align === "left" ? "sm:flex-row-reverse" : ""
                    )}
                  >
                    <div className="absolute left-[-40px] sm:left-1/2 sm:-translate-x-1/2 w-10 h-10 rounded-full bg-background border border-primary/40 flex items-center justify-center z-10 shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)]">
                      <log.icon size={18} className={cn("text-primary", log.isOngoing ? "animate-pulse" : "")} />
                    </div>

                    <div className="w-full sm:w-[45%]">
                      <div className="p-8 rounded-2xl bg-card/20 border border-white/5 hover:border-primary/20 transition-all group backdrop-blur-sm shadow-xl hover:shadow-primary/5">
                        <div className="flex justify-between items-start mb-3">
                          <h4 className="font-bold text-base md:text-lg tracking-tight text-foreground/80 group-hover:text-primary transition-colors">{log.title}</h4>
                          <span className="text-[11px] font-mono font-bold text-primary/70 uppercase pt-1">{log.date}</span>
                        </div>
                        <p className="text-sm leading-relaxed text-muted-foreground font-medium">{log.desc}</p>
                      </div>
                    </div>
                    <div className="hidden sm:block w-[45%]" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Original Feature Cards */}
          <div className="space-y-16 pt-16">
            <div className="text-center space-y-2">
              <h3 className="text-3xl font-bold tracking-tight">What I <span className="text-primary italic">Bring</span> to the Table</h3>
              <p className="text-muted-foreground text-sm">Core competencies that drive my development approach</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Code,
                  title: "Technical Execution",
                  description: "Translating complex blueprints into high-performance web systems using modern frameworks."
                },
                {
                  icon: User,
                  title: "Infrastructure Logic", 
                  description: "Architecting robust backend pipelines with focus on data integrity and real-time synchronization."
                },
                {
                  icon: Briefcase,
                  title: "Production Delivery",
                  description: "From JOYTRIP to V.O.L.T, delivering production-ready platforms that solve real-world logistical friction."
                }
              ].map((skill, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="group relative h-full"
                >
                  <div className="h-full bg-card/30 backdrop-blur-sm border border-white/5 rounded-2xl p-8 transition-all duration-300 group-hover:bg-card/50 group-hover:border-primary/20 overflow-hidden">
                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary/40 rounded-tl-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-primary/40 rounded-tr-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <div className="space-y-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20 group-hover:scale-110 transition-transform">
                        <skill.icon size={22} />
                      </div>
                      <div className="space-y-3">
                        <h4 className="font-bold text-xl group-hover:text-primary transition-colors duration-300">{skill.title}</h4>
                        <p className="text-muted-foreground leading-relaxed text-sm font-medium">{skill.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;


