import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Mail, Github, Linkedin, MessageSquareText } from "lucide-react";
import { cn } from "@/lib/utils";

const SOCIAL_LINKS = [
  {
    icon: Mail,
    label: "Email",
    href: "mailto:simerdeepsingh567@gmail.com",
    bg: "bg-[#ea4335]",
    glow: "shadow-[0_0_15px_rgba(234,67,53,0.4)]",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/SimerdeepSingh4",
    bg: "bg-[#24292f]",
    glow: "shadow-[0_0_15px_rgba(36,41,47,0.4)]",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/simerdeep-singh-gandhi/",
    bg: "bg-[#0077b5]",
    glow: "shadow-[0_0_15px_rgba(0,119,181,0.4)]",
  },
];

export const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [bottomPosition, setBottomPosition] = useState(24);
  const footerRef = useRef(null);
  const rafRef = useRef(null);

  const measure = useCallback(() => {
    if (!footerRef.current) {
      footerRef.current = document.querySelector("footer");
      if (!footerRef.current) return;
    }

    const rect = footerRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const footerVisibleHeight = Math.max(0, viewportHeight - rect.top);

    const newBottom = footerVisibleHeight > 0 
      ? footerVisibleHeight + 24 
      : 24;

    setBottomPosition(prev => {
      if (Math.abs(prev - newBottom) < 0.5) return prev;
      return newBottom;
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        measure();
        rafRef.current = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    measure(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [measure]);

  const listVariants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.1 }
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };

  const itemVariants = {
    open: { opacity: 1, y: 0, scale: 1 },
    closed: { opacity: 0, y: 20, scale: 0.5 }
  };

  return (
    <div
      className="fixed right-6 z-50 flex flex-col items-center gap-4"
      style={{ bottom: bottomPosition }}
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="flex flex-col items-center gap-3 mb-2"
          >
            {SOCIAL_LINKS.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                className={cn(
                  "relative group flex items-center justify-center p-3.5 rounded-2xl",
                  "bg-card/40 backdrop-blur-xl border border-white/10 shadow-xl",
                  "hover:scale-110 hover:border-primary/40 transition-all duration-300 active:scale-95"
                )}
                whileHover={{ x: -5 }}
              >
                <div className={cn("absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity", link.bg)} />
                <link.icon className="w-5 h-5 text-foreground/80 group-hover:text-primary transition-colors" />
                
                {/* Floating Tooltip/Label */}
                <span className="absolute right-[120%] px-3 py-1.5 rounded-lg bg-card/80 backdrop-blur-md border border-white/5 text-[11px] font-bold tracking-widest uppercase text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap pointer-events-none shadow-2xl">
                  {link.label}
                </span>

                {/* Ambient Glow */}
                <div className={cn("absolute inset-0 rounded-2xl blur-md -z-10 opacity-0 group-hover:opacity-40 transition-opacity", link.glow)} />
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "relative w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500",
          "bg-gradient-to-br from-primary via-primary/80 to-secondary/80",
          "border border-white/20 shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)]",
          isOpen ? "rotate-90 scale-90 bg-red-500" : "hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.5)] hover:scale-105"
        )}
        whileTap={{ scale: 0.9 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
            >
              <X className="w-6 h-6 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.5 }}
              className="relative"
            >
              <MessageSquareText className="w-6 h-6 text-white" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Outer Pulsar Glow */}
        {!isOpen && (
          <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-xl animate-pulse-slow -z-10" />
        )}
      </motion.button>
    </div>
  );
};
