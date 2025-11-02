import { Briefcase, Code, User, Sparkles, ArrowRight } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { motion } from "framer-motion";

export const AboutSection = () => {
  const [ref, inView] = useInView();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" ref={ref} className={`py-24 px-4 relative section-fade${inView ? " in-view" : ""} overflow-hidden`}>
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-50">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-float-gentle"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl animate-float-gentle" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-primary/10 rounded-full blur-2xl animate-pulse-slow"></div>
      </div>
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary px-6 py-3 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-primary/20">
              <Sparkles className="w-4 h-4" />
              Getting to know me
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              About <span className="gradient-text"> Me</span>
            </h2>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6 mb-16 max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-br from-card/50 to-card/80 backdrop-blur-sm rounded-2xl p-8 border border-primary/10 shadow-lg">
              <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-xl"></div>
              <h3 className="text-2xl md:text-3xl gradient-text font-bold mb-6 bg-gradient-to-r from-slate-900 via-purple-700 to-blue-600 dark:from-foreground dark:via-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
                Full-Stack Web Developer & Quick Learner
              </h3>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  I'm a BCA graduate with a strong foundation in full-stack 
                  web development, I specialize in creating responsive, accessible, and performant web
                  applications using modern technologies like using React.js, Node.js, and MongoDB.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I've worked on multiple freelance and personal projects, including a ride-sharing app, a multilingual transcription web app, and a learning management system. I enjoy solving complex problems and am always exploring new technologies like Docker, and automation tools to grow as a developer.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center">
              <motion.a 
                href="#contact" 
                className="cosmic-button group relative overflow-hidden flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Get In Touch
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.a>
              <motion.a
                href="https://drive.google.com/file/d/1fwKopCS-DvXjCuQYAfZRPSxzxmpAnZsQ/view?usp=sharing"
                className="group px-6 py-3 rounded-full border-2 border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 backdrop-blur-sm relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 font-medium">Download CV</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.a>
            </div>
          </motion.div>

          {/* Enhanced Timeline */}
          <motion.div variants={itemVariants} className="max-w-4xl mx-auto mt-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold mb-3 gradient-text">My Journey</h3>
              <p className="text-muted-foreground">Key milestones in my development career</p>
            </div>
            <div className="relative">
              {/* Animated timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary/20"></div>
              <ol className="relative ml-8 space-y-8">
                <motion.li 
                  className="relative group "
                  initial={{ opacity: 0, x: -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <div className="absolute -left-10 flex items-center justify-center w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full ring-4 ring-primary/20 shadow-lg group-hover:ring-primary/40 transition-all duration-300">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-card/50 backdrop-blur-sm border border-primary/10 rounded-xl p-6 ml-4 hover:bg-card/80 hover:border-primary/20 transition-all duration-300 group-hover:shadow-lg group-hover:translate-x-2">
                    <h4 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">BCA Student, GLA University, Mathura</h4>
                    <div className="inline-block bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full mb-3">2022 – 2025</div>
                    <p className="text-muted-foreground text-sm leading-relaxed">Completed Bachelor of Computer Applications with a focus on full-stack development and software engineering.</p>
                  </div>
                </motion.li>
                <motion.li 
                  className="relative group"
                  initial={{ opacity: 0, x: -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <div className="absolute -left-10 flex items-center justify-center w-8 h-8 bg-gradient-to-br from-secondary to-primary rounded-full ring-4 ring-secondary/20 shadow-lg group-hover:ring-secondary/40 transition-all duration-300">
                    <Briefcase className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-card/50 backdrop-blur-sm border border-primary/10 rounded-xl p-6 ml-4 hover:bg-card/80 hover:border-primary/20 transition-all duration-300 group-hover:shadow-lg group-hover:translate-x-2">
                    <h4 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">Freelance Web Developer</h4>
                    <div className="inline-block bg-secondary/10 text-secondary text-xs font-medium px-3 py-1 rounded-full mb-3">Dec 2023 – Oct 2024</div>
                    <p className="text-muted-foreground text-sm leading-relaxed">Worked on projects like <span className='font-semibold text-foreground'>Dimple Collection</span> (e-commerce site) and personal freelance tasks.</p>
                  </div>
                </motion.li>
                <motion.li 
                  className="relative group"
                  initial={{ opacity: 0, x: -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  <div className="absolute -left-10 flex items-center justify-center w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full ring-4 ring-primary/20 shadow-lg group-hover:ring-primary/40 transition-all duration-300">
                    <Code className="w-4 h-4 text-white animate-pulse" />
                  </div>
                  <div className="bg-card/50 backdrop-blur-sm border border-primary/10 rounded-xl p-6 ml-4 hover:bg-card/80 hover:border-primary/20 transition-all duration-300 group-hover:shadow-lg group-hover:translate-x-2">
                    <h4 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">Personal Projects & Continuous Learning</h4>
                    <div className="inline-block bg-gradient-to-r from-primary/10 to-secondary/10 text-primary text-xs font-medium px-3 py-1 rounded-full mb-3">Ongoing</div>
                    <p className="text-muted-foreground text-sm leading-relaxed">Actively building full-stack applications, exploring AI integrations, and staying updated with modern development tools.</p>
                  </div>
                </motion.li>
              </ol>
            </div>
          </motion.div>

          {/* Enhanced Skills/Experience Cards */}
          <motion.div 
            variants={itemVariants} 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
          >
            <div className="text-center mb-8 md:col-span-3">
              <h3 className="text-2xl font-bold gradient-text mb-3">What I Bring to the Table</h3>
              <p className="text-muted-foreground">Core competencies that drive my development approach</p>
            </div>
            
            {[
              {
                icon: Code,
                title: "Web Development",
                description: "Creating responsive websites and web applications with modern frameworks.",
                gradient: "from-blue-500/10 to-cyan-500/10",
                iconBg: "bg-gradient-to-br from-blue-500 to-cyan-500"
              },
              {
                icon: User,
                title: "Backend Development", 
                description: "Building RESTful APIs, working with databases like MongoDB and MySQL, and implementing server-side logic using Node.js and Express.",
                gradient: "from-purple-500/10 to-pink-500/10",
                iconBg: "bg-gradient-to-br from-purple-500 to-pink-500"
              },
              {
                icon: Briefcase,
                title: "Project Experience",
                description: "Built and deployed real-world projects including LMS (Mentora), V.O.L.T transcription app, and JOYTRIP ride-booking platform using multiple Modern Technologies.",
                gradient: "from-green-500/10 to-emerald-500/10",
                iconBg: "bg-gradient-to-br from-green-500 to-emerald-500"
              }
            ].map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <motion.div 
                  key={index}
                  className="group relative"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: 0.8 + (index * 0.1), duration: 0.6 }}
                  whileHover={{ y: -10 }}
                >
                  {/* Background glow effect */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${skill.gradient} rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500`}></div>
                  
                  <div className="relative bg-card/80 backdrop-blur-sm border border-primary/10 rounded-2xl p-8 h-full hover:bg-card hover:border-primary/20 transition-all duration-300 shadow-lg">
                    {/* Floating icon */}
                    <div className="relative mb-6">
                      <div className={`inline-flex p-4 rounded-2xl ${skill.iconBg} shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                        <IconComponent className="h-7 w-7 text-white" />
                      </div>
                      {/* Icon glow */}
                      <div className={`absolute inset-0 ${skill.iconBg} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="font-bold text-xl group-hover:text-primary transition-colors duration-300">
                        {skill.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {skill.description}
                      </p>
                    </div>
                    
                    {/* Decorative corner element */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-primary/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
