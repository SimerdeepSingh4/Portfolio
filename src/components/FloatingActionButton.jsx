import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Mail, Github, Linkedin } from "lucide-react";

export const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [bottomPosition, setBottomPosition] = useState(24);

  const footerRef = useRef(null);
  const rafRef = useRef(null);

  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      href: "mailto:simerdeepsingh567@gmail.com",
      color: "bg-blue-500 hover:bg-blue-600",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/SimerdeepSingh4",
      color: "bg-gray-700 hover:bg-gray-800",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/simerdeep-singh-gandhi/",
      color: "bg-blue-600 hover:bg-blue-700",
    },
  ];

  const measure = useCallback(() => {
    if (!footerRef.current) return;

    const rect = footerRef.current.getBoundingClientRect();
    const overlap = window.innerHeight - rect.top;

    const newBottom =
      overlap > 0 ? Math.max(24, 24 + overlap + 16) : 24;

    setBottomPosition(prev => (prev !== newBottom ? newBottom : prev));
  }, []);

  useEffect(() => {
    footerRef.current = document.querySelector("footer");

    const handleScroll = () => {
      if (rafRef.current) return;

      rafRef.current = requestAnimationFrame(() => {
        measure();
        rafRef.current = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    measure();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [measure]);

  return (
    <motion.div
      className="fixed right-6 z-50"
      style={{ bottom: bottomPosition }}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute bottom-16 right-0 flex flex-col gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {socialLinks.map(link => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${link.color} text-white p-3 rounded-full shadow-lg flex items-center gap-2 group min-w-[48px] hover:rounded-2xl`}
                whileHover={{ scale: 1.08, x: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                <link.icon size={20} />
                <span className="max-w-0 group-hover:max-w-20 opacity-0 group-hover:opacity-100 overflow-hidden transition-all duration-300 text-sm font-medium whitespace-nowrap pr-2">
                  {link.label}
                </span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(prev => !prev)}
        className={`${
          isOpen
            ? "bg-red-500 hover:bg-red-600"
            : "bg-primary hover:bg-primary/90"
        } text-white p-4 rounded-full shadow-lg border-2 border-white/20`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
        animate={{ rotate: isOpen ? 90 : 0 }}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>
    </motion.div>
  );
};
