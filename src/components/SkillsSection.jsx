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
  { id: "primary", name: "Primary Stack", icon: "🔥" },
  { id: "working", name: "Working Knowledge", icon: "💼" },
  { id: "exploring", name: "Currently Exploring", icon: "🌱" },
  { id: "all", name: "All Skills", icon: "🚀" },

];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("primary");
  const [ref, inView] = useInView();

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section 
      id="skills" 
      ref={ref} 
      className="py-32 px-6 relative bg-secondary/5 overflow-hidden"
    >
      {/* HUD-Lite Background Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] dark:opacity-[0.07]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <header className="mb-20 text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              My <span className="text-primary italic">Skills</span>
            </h2>
          </motion.div>
        </header>

        {/* System Mode Selector (Category Switcher) */}
        <div className="flex justify-center mb-16">
          <div className="p-1.5 bg-background/40 backdrop-blur-xl border border-white/5 rounded-2xl flex flex-wrap justify-center gap-1 shadow-[0_8px_32px_rgba(0,0,0,0.1)]">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "relative px-6 py-2.5 rounded-xl transition-all duration-500 ease-out",
                  "text-[10px] sm:text-[11px] font-bold tracking-widest uppercase cursor-pointer",
                  activeCategory === category.id
                    ? "text-primary-foreground"
                    : "text-muted-foreground/60 hover:text-foreground"
                )}
              >
                {activeCategory === category.id && (
                  <motion.div
                    layoutId="active-category"
                    className="absolute inset-0 bg-primary rounded-xl shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Skill Matrix */}
        <motion.div
          key={activeCategory}
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.05 }
            }
          }}
        >
          {filteredSkills.map((skill, key) => (
            <motion.div
              key={skill.name}
              variants={{
                hidden: { opacity: 0, y: 20, rotateX: 15 },
                visible: { opacity: 1, y: 0, rotateX: 0 }
              }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="relative h-full bg-card/30 backdrop-blur-sm border border-white/5 rounded-2xl p-4 sm:p-6 transition-all duration-300 group-hover:bg-card/50 group-hover:border-primary/20 overflow-hidden">
                <div className="flex flex-row items-center gap-3 sm:gap-4">
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 bg-primary/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-background/50 border border-white/5 flex items-center justify-center relative group-hover:border-primary/20 transition-colors">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-5 h-5 sm:w-7 sm:h-7 object-contain opacity-80 group-hover:opacity-100 transition-all duration-500"
                      />
                    </div>
                  </div>
                  <div className="space-y-0.5 min-w-0">
                    <h3 className="text-[12px] sm:text-[13px] font-bold tracking-tight text-foreground transition-colors group-hover:text-primary truncate">
                      {skill.name}
                    </h3>
                  </div>
                </div>

                {/* Animated Power-line */}
                <div className="absolute bottom-0 left-0 h-[1.5px] bg-primary/40 w-0 group-hover:w-full transition-all duration-500 ease-in-out shadow-[0_0_10px_#818cf8]" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
