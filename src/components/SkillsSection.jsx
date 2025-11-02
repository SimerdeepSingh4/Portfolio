import { useState } from "react";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";
import { motion } from "framer-motion";
import { Star, Calendar } from "lucide-react";


const skills = [
  // Frontend
  {
    name: "HTML/CSS",
    level: 90,
    category: "frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    experience: "3+ years",
  },
  {
    name: "React.js",
    level: 80,
    category: "frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    experience: "2+ years",
  },
  {
    name: "Angular",
    level: 65,
    category: "frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
    experience: "1+ year",
  },
  {
    name: "Tailwind CSS",
    level: 75,
    category: "frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    experience: "1.5+ years",
  },

  // Backend
  {
    name: "Node.js",
    level: 80,
    category: "backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    experience: "2+ years",
  },
  {
    name: "Express.js",
    level: 75,
    category: "backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    experience: "2+ years",
  },
  {
    name: "MongoDB",
    level: 70,
    category: "backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    experience: "1.5+ years",
  },
  {
    name: "Firebase",
    level: 70,
    category: "backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    experience: "1+ year",
  },
  {
    name: "MySQL",
    level: 65,
    category: "backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    experience: "1+ year",
  },

  // Tools
  {
    name: "Git & GitHub",
    level: 85,
    category: "tools",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    experience: "2+ years",
  },
  {
    name: "Postman",
    level: 80,
    category: "tools",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
    experience: "2+ years",
  },
  {
    name: "VS Code",
    level: 90,
    category: "tools",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    experience: "3+ years",
  },
  {
    name: "Docker (Learning)",
    level: 50,
    category: "tools",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    experience: "6+ months",
  },

  // Programming Languages
  {
    name: "Java",
    level: 90,
    category: "languages",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    experience: "2+ years",
  },
  {
    name: "Python",
    level: 70,
    category: "languages",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    experience: "1+ year",
  },
  {
    name: "JavaScript",
    level: 85,
    category: "languages",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    experience: "2+ years",
  },
  {
    name: "C#",
    level: 50,
    category: "languages",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    experience: "6+ months",
  },
  {
    name: "PHP",
    level: 60,
    category: "languages",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    experience: "8+ months",
  },
];


const categories = [
  { id: "all", name: "All Skills", icon: "🚀" },
  { id: "frontend", name: "Frontend", icon: "🎨" },
  { id: "backend", name: "Backend", icon: "⚙️" },
  { id: "tools", name: "Tools", icon: "🔧" },
  { id: "languages", name: "Languages", icon: "💻" },
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [ref, inView] = useInView();

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  const renderStars = (level) => {
    const stars = Math.round(level / 20); // Convert level to 1-5 stars
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={12}
        className={`${index < stars ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

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
              className="group"
            >
              <div className="bg-card p-6 rounded-lg shadow-xs card-hover relative overflow-hidden border border-border/50">
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">{skill.name}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar size={12} />
                      <span>{skill.experience}</span>
                    </div>
                  </div>
                  <motion.img
                    src={skill.icon}
                    alt={skill.name}
                    title={skill.name}
                    className="w-10 h-10 object-contain ml-3"
                    whileHover={{ 
                      scale: [1, 1.2, 1],
                      y: [0, -5, 0],
                      transition: { duration: 0.4, ease: "easeInOut" }
                    }}
                  />
                </div>

                {/* Star Rating */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    {renderStars(skill.level)}
                  </div>
                  <span className="text-sm font-medium text-primary">
                    {Math.round(skill.level / 20)}/5
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden mb-2">
                  <motion.div
                    className="bg-gradient-to-r from-primary to-blue-500 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ 
                      duration: 1.5, 
                      ease: "easeOut",
                      delay: key * 0.1 + 0.2
                    }}
                  />
                </div>

                {/* Skill Level Text */}
                <div className="text-right">
                  <motion.span 
                    className="text-sm text-muted-foreground font-medium"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: key * 0.1 + 0.5 }}
                  >
                    {skill.level}% Proficiency
                  </motion.span>
                </div>
                
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-lg" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
