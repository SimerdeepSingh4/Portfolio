import { ArrowDown, Sparkles, Code, Zap } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

export const HeroSection = () => {
  const [ref, inView] = useInView();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="hero"
      ref={ref}
      className={`relative min-h-screen flex flex-col items-center justify-center px-4 section-fade${inView ? " in-view" : ""}`}
    >
      {/* Floating Icons */}
      <motion.div
        className="absolute top-1/4 left-10 text-primary/30"
        animate={{ 
          y: [-10, 10, -10],
          rotate: [0, 5, 0, -5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Code size={40} />
      </motion.div>
      
      <motion.div
        className="absolute top-1/3 right-10 text-primary/20"
        animate={{ 
          y: [10, -10, 10],
          rotate: [0, -5, 0, 5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <Sparkles size={32} />
      </motion.div>
      
      <motion.div
        className="absolute bottom-1/3 left-1/4 text-primary/25"
        animate={{ 
          x: [-5, 5, -5],
          y: [-5, 5, -5],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        <Zap size={28} />
      </motion.div>

      <motion.div 
        className="container max-w-4xl mx-auto text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <div className="space-y-6">
          <motion.div variants={itemVariants}>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="text-foreground">Hi, I'm </span>
              <span className="text-primary">
                Simerdeep
              </span>
              <br />
              <span className="gradient-text from-primary via-purple-600 to-blue-600 dark:from-primary dark:via-purple-400 dark:to-blue-400 bg-clip-text text-transparent font-bold">
                Singh Gandhi
              </span>
            </h1>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto h-16 pt-4"
          >
            <Typewriter
              options={{
                strings: [
                  "I'm a Full-Stack Web Developer passionate about building seamless digital experiences",
"I build responsive, scalable, user-friendly web apps",
"I love turning ideas into elegant, functional solutions through code",
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
                pauseFor: 3000,
              }}
            />
          </motion.div>

          <motion.div variants={itemVariants} className="pt-5">
            <motion.a 
              href="#projects" 
              className="cosmic-button inline-flex items-center gap-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Sparkles size={16} />
              View My Work
            </motion.a>
          </motion.div>
          
          {/* Tech Stack Icons */}
          <motion.div 
            variants={itemVariants}
            className="flex justify-center items-center gap-6 pt-8"
          >
            {[
              { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
              { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
              { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
              { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
            ].map((tech, index) => (
              <motion.img
                key={tech.name}
                src={tech.icon}
                alt={tech.name}
                className="w-8 h-8 opacity-60 hover:opacity-100 transition-opacity"
                whileHover={{ 
                  scale: 1.2,
                  y: -5,
                  transition: { type: "spring", stiffness: 300 }
                }}
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>

      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <motion.div
          animate={{
            y: [0, 5, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          <ArrowDown className="h-5 w-5 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};
export default HeroSection;