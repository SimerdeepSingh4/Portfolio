import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export const Footer = () => {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      label: "GitHub", 
      href: "https://github.com/SimerdeepSingh4",
      brandColor: "#9443bf",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      label: "LinkedIn", 
      href: "https://www.linkedin.com/in/simerdeep-singh-gandhi/",
      brandColor: "#0077B5",
    },
    {
      name: "Email",
      icon: Mail,
      label: "Email", 
      href: "mailto:simerdeepsingh567@gmail.com",
      brandColor: "#5b6abf",
    },
  ];

  return (
    <footer className="relative bg-card border-t border-border mt-12">
      {/* Gradient border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

      <div className="py-3 sm:py-4 px-4 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-6 text-center sm:text-left max-w-6xl mx-auto w-full">
          {/* Left section */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-center sm:justify-start gap-2 sm:gap-4 w-full sm:w-auto">
            <div className="text-xs sm:text-sm text-muted-foreground ">
              © {new Date().getFullYear()} Designed & Developed by{" "}
              <span className="text-primary font-medium">
                Simerdeep Singh Gandhi
              </span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                const [isHovered, setIsHovered] = useState(false);
                return (
                  <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${social.label} profile`}
                      className="relative flex items-center justify-center w-12 h-12 rounded-full bg-card border border-border/50 text-muted-foreground transition-all duration-300 group hover:border-primary/20"
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      <social.icon 
                        size={18} 
                        className="transition-all duration-300 group-hover:scale-110" 
                        style={{
                          color: isHovered ? social.brandColor : 'inherit',
                          filter: isHovered ? 
                            `drop-shadow(0 0 6px ${social.brandColor}) drop-shadow(0 0 12px ${social.brandColor}40) brightness(1.2)` : 
                            'none',
                          transition: 'all 0.3s ease'
                        }}
                      />
                      {/* Tooltip */}
                      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-50">
                        {social.label}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900 dark:border-t-gray-100"></div>
                      </div>
                    </motion.a>
                );
              })}
            </div>
          </div>

          {/* Right section */}
          <div className="flex items-center justify-center sm:justify-end gap-2 sm:gap-4 w-full sm:w-auto">
            <div className="text-[10px] sm:text-xs text-muted-foreground">
              Built with <span className="text-primary font-medium">React</span>{" "}
              & <span className="text-primary font-medium">Tailwind CSS</span>
            </div>

            <button
              onClick={handleScrollTop}
              className="p-2 sm:p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 group"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:-translate-y-1" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
