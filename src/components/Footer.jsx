import React, { useState } from "react";
import { ArrowUp, Github, Linkedin, Mail, Copy, Check, Terminal, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";

const SocialLink = React.memo(({ social }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = social.icon;

  return (
    <motion.a
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${social.label} profile`}
      className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-card border border-border/50 text-muted-foreground transition-all duration-300 group hover:border-primary/40 hover:bg-primary/5"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon
        size={18}
        className="transition-all duration-300 group-hover:scale-110"
        style={{
          color: isHovered ? social.brandColor : 'inherit',
          filter: isHovered ?
            `drop-shadow(0 0 8px ${social.brandColor})` :
            'none',
        }}
      />
      {/* Tooltip */}
      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-[10px] px-2 py-1 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-50">
        {social.label}
      </div>
    </motion.a>
  );
});

export const Footer = React.memo(() => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("simerdeepsingh567@gmail.com");
      setCopiedEmail(true);
      toast.success("Email copied to clipboard!");
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch (err) {
      toast.error("Failed to copy email");
    }
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

  ];

  return (
    <footer className="relative bg-background border-t border-border/30 mt-12 pt-6">
      {/* Background Atmosphere - Subtler */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[20vw] bg-primary/2 blur-[80px] -z-10" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-8">
          {/* Identity & Technical Briefing */}
          <div className="space-y-4">
            <h3 className="text-2xl font-black tracking-tighter text-foreground group cursor-default">
              Simerdeep <span className="text-primary italic">Portfolio</span>
            </h3>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              {/* <div className="flex items-center gap-2 text-[9px] font-mono font-bold uppercase tracking-widest text-green-500/80">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                System Nominal
              </div> */}
              <div className="text-[10px] font-mono text-muted-foreground/30 uppercase tracking-[0.15em] flex items-center gap-1.5">
                 © {new Date().getFullYear()} // Built with React, Tailwind & Framer
              </div>
            </div>
          </div>

          {/* Social & Contact Controls */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <SocialLink key={social.label} social={social} />
              ))}
            </div>
            

            <motion.button
              onClick={copyEmail}
              className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-card border border-border/50 text-primary transition-all duration-300 group hover:border-primary/40 hover:bg-primary/5"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {copiedEmail ? (
                  <motion.div key="check" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                    <Check size={18} />
                  </motion.div>
                ) : (
                  <motion.div key="mail" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                    <Mail size={18} />
                  </motion.div>
                )}
              </AnimatePresence>
              {/* Using absolute positioning and higher z-index for tooltip */}
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-[10px] px-2 py-1 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-50">
                Copy Email
              </div>
            </motion.button>
            <div className="h-6 w-px bg-border/20 hidden sm:block mx-1" />

            <button
              onClick={handleScrollTop}
              className="flex items-center gap-2 text-[13px] font-mono font-bold uppercase tracking-widest text-muted-foreground/40 hover:text-primary transition-colors group pl-2"
            >
              Orbit
              <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
});


export default Footer;
