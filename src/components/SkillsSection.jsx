import { useState } from "react";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";


const skills = [
  // Primary Stack
  {
    name: "React.js",
    level: 80,
    category: "primary",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    experience: "2+ years",
  },
  {
    name: "Node.js",
    level: 80,
    category: "primary",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    experience: "2+ years",
  },
  {
    name: "JavaScript",
    level: 85,
    category: "primary",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    experience: "2+ years",
  },
  {
    name: "HTML/CSS",
    level: 90,
    category: "primary",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    experience: "3+ years",
  },

  {
    name: "Express.js",
    level: 75,
    category: "primary",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    experience: "2+ years",
  },
  {
    name: "Tailwind CSS",
    level: 75,
    category: "primary",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    experience: "1.5+ years",
  },
  {
    name: "VS Code",
    level: 90,
    category: "primary",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    experience: "3+ years",
  },
  {
    name: "Git & GitHub",
    level: 85,
    category: "primary",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    experience: "2+ years",
  },
  {
    name: "MongoDB",
    level: 70,
    category: "primary",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    experience: "1.5+ years",
  },
  // Working Knowledge
  {
    name: "Postman",
    level: 80,
    category: "working",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
    experience: "2+ years",
  },
  {
    name: "Java",
    level: 90,
    category: "working",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    experience: "2+ years",
  },
  {
    name: "Python",
    level: 70,
    category: "working",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    experience: "1+ year",
  },
  {
    name: "Firebase",
    level: 70,
    category: "working",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    experience: "1+ year",
  },
  {
    name: "MySQL",
    level: 65,
    category: "working",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    experience: "1+ year",
  },

  {
    name: "PHP",
    level: 60,
    category: "working",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    experience: "8+ months",
  },

  // Currently Exploring
  {
    name: "Angular",
    level: 65,
    category: "exploring",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
    experience: "1+ year",
  },
  {
    name: "C#",
    level: 50,
    category: "exploring",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    experience: "Learning",
  },
  {
    name: "Docker",
    level: 50,
    category: "exploring",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    experience: "Learning",
  },
];


const categories = [
  { id: "all", name: "All Skills", icon: "🚀" },
  { id: "primary", name: "Primary Stack", icon: "🔥" },
  { id: "working", name: "Working Knowledge", icon: "💼" },
  { id: "exploring", name: "Currently Exploring", icon: "🌱" },
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [ref, inView] = useInView();

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };
  return (
    <section id="skills" ref={ref} className={`py-24 px-4 relative bg-secondary/30 section-fade${inView ? " in-view" : ""}`}>
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <motion.button
              key={key}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-6 py-3 rounded-full transition-all duration-300 capitalize cursor-pointer flex items-center gap-2 font-medium",
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-lg scale-105"
                  : "bg-card text-foreground hover:bg-card/80 hover:scale-105 border border-border"
              )}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              layout
            >
              <span className="text-lg">{category.icon}</span>
              {category.name}
            </motion.button>
          ))}
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          key={activeCategory}
        >
          {filteredSkills.map((skill, key) => (
            <motion.div
              key={key}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <div className="bg-card p-4 rounded-2xl shadow-xs card-hover relative overflow-hidden border border-border/50">

                {/* Top Accent Line */}
                <div className={`absolute top-0 left-0 w-full h-1 
      ${skill.category === "primary"
                    ? "bg-gradient-to-r from-primary to-blue-500"
                    : skill.category === "working"
                      ? "bg-gradient-to-r from-yellow-400 to-orange-400"
                      : "bg-gradient-to-r from-green-400 to-emerald-500"
                  }`}
                />

                {/* Content */}
                <div className="flex flex-col items-center text-center space-y-3 mt-2 h-full justify-between">

                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 3 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-12 h-12 flex items-center justify-center rounded-2xl bg-secondary/50 border border-border/50"
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-6 h-6 object-contain"
                    />
                  </motion.div>

                  <div className="w-full">
                    <h3 className="font-bold text-base mb-1">
                      {skill.name}
                    </h3>

                    <div className="flex items-center justify-center text-xs text-muted-foreground mb-1">
                    </div>

                    <span className={cn(
                      "inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-medium border bg-opacity-10",
                      skill.category === "primary"
                        ? "bg-blue-500/10 text-blue-600 border-blue-500/20 dark:text-blue-400"
                        : skill.category === "working"
                          ? "bg-yellow-500/10 border-yellow-500/20 text-yellow-600  dark:text-yellow-400"
                          : "bg-green-500/10 text-green-600 border-green-500/20 dark:text-green-600"
                    )}>
                      {skill.category === "primary"
                        ? "Primary Stack"
                        : skill.category === "working"
                          ? "Working Knowledge"
                          : "Exploring"}
                    </span>
                  </div>

                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-lg" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
