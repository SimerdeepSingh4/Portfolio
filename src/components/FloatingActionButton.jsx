import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Mail, Github, Linkedin } from "lucide-react";

export const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);


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
      href: "https://linkedin.com/in/simerdeepsingh",
      color: "bg-blue-600 hover:bg-blue-700",
    },
  ];

  // Calculate dynamic bottom position to avoid footer overlap
  const [bottomPosition, setBottomPosition] = useState(24); // 24px = 6 in Tailwind (bottom-6)
  const rafIdRef = useRef(null);
  const pendingScrollRef = useRef(false);

  useEffect(() => {
    const measure = () => {
      const footer = document.querySelector('footer');
      if (!footer) return;
      const footerRect = footer.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (footerRect.top < windowHeight) {
        const overlap = windowHeight - footerRect.top;
        const newBottomPosition = Math.max(24, 24 + overlap + 16);
        setBottomPosition(newBottomPosition);
      } else {
        setBottomPosition(24);
      }
    };

    const onScroll = () => {
      if (pendingScrollRef.current) return;
      pendingScrollRef.current = true;
      rafIdRef.current = requestAnimationFrame(() => {
        pendingScrollRef.current = false;
        measure();
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    measure();
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, []);

  const containerVariants = {
    closed: {
      scale: 1,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
        duration: 0.2,
      },
    },
    open: {
      scale: 1,
      transition: {
        staggerChildren: 0.05,
        duration: 0.2,
      },
    },
  };

  const itemVariants = {
    closed: {
      scale: 0.9,
      y: 12,
      opacity: 0,
      transition: { duration: 0.16, ease: "easeOut" },
    },
    open: {
      scale: 1,
      y: 0,
      opacity: 1,
      transition: { duration: 0.18, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="fixed right-6 z-50 "
      style={{ bottom: `${bottomPosition}px`, willChange: "transform, opacity" }}
      variants={containerVariants}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
    >
          {/* Social Links */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="absolute bottom-16 right-0 flex flex-col gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={itemVariants}
                    className={`${link.color} text-white p-3 rounded-full shadow-lg transition-all duration-200 flex items-center gap-2 group min-w-[48px] hover:rounded-2xl `}
                    style={{ willChange: "transform, opacity", backfaceVisibility: "hidden", transform: "translateZ(0)" }}
                    whileHover={{ scale: 1.1, x: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <link.icon size={20} />
                    <span className="max-w-0 group-hover:max-w-20 opacity-0 group-hover:opacity-100 overflow-hidden transition-all duration-300 ease-in-out text-sm font-medium whitespace-nowrap pr-2 ">
                      {link.label}
                    </span>
                  </motion.a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className={`${
              isOpen
                ? "bg-red-500 hover:bg-red-600"
                : "bg-primary hover:bg-primary/90"
            } text-white p-4 rounded-full shadow-lg transition-all duration-100 border-2 border-white/20 cursor-pointer`}
            style={{ willChange: "transform, opacity", backfaceVisibility: "hidden", transform: "translateZ(0)" }}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            animate={{ rotate: isOpen ? 90 : 0 }}
          >
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </motion.button>
    </motion.div>
  );
};