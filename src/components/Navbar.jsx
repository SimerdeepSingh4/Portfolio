import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, Copy, Check } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "All Projects", href: "/projects", isRoute: true },
  { name: "Contact", href: "#contact" },
];

export const Navbar = React.memo(() => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isMenuOpen]);

  const handleNavClick = async (e, href, isRoute = false) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    setIsMenuOpen(false);

    if (isRoute) {
      navigate(href);
      return;
    }

    const scrollToSection = () => {
      const section = document.getElementById(targetId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(scrollToSection, 500);
    } else {
      scrollToSection();
    }
  };

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-500",
        isScrolled 
          ? "py-3 bg-background/60 backdrop-blur-xl border-b border-white/5 dark:border-white/[0.05] shadow-[0_2px_20px_-10px_rgba(0,0,0,0.3)]" 
          : "py-6 bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between max-w-7xl">
        <a
          className="group flex items-center gap-2 cursor-pointer"
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="text-xl font-black tracking-tighter text-foreground relative">
              <span className="text-primary italic">S S G</span>
            </span>
          </div>
          <span className="text-sm font-bold tracking-[0.2em] relative uppercase hidden sm:block overflow-hidden">
            <span className="block group-hover:-translate-y-full transition-transform duration-500">Portfolio</span>
            <span className="absolute inset-0 block translate-y-full group-hover:translate-y-0 transition-transform duration-500 text-primary">Simerdeep</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item, key) => (
            <motion.a
              key={key}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href, item.isRoute)}
              className="relative px-5 py-2 text-[11px] font-bold tracking-[0.2em] uppercase text-muted-foreground/70 hover:text-foreground transition-colors group"
            >
              <span className="relative z-10">{item.name}</span>
              <motion.div
                className="absolute inset-0 bg-muted/50 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"
              />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          ))}
          <div className="pl-4 ml-4 border-l border-border/40">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="p-2.5 rounded-xl bg-muted/30 text-foreground z-50 hover:bg-muted transition-colors"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-0 bg-background/98 backdrop-blur-2xl z-40 md:hidden flex flex-col justify-center px-12"
            >
              <div className="space-y-4">
                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.5em] text-primary/40 block mb-8">Navigation Registry</span>
                {navItems.map((item, key) => (
                  <motion.a
                    key={key}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href, item.isRoute)}
                    className="block text-4xl font-black tracking-tighter text-foreground hover:text-primary transition-colors py-2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + key * 0.05 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
              
              <div className="mt-20 pt-8 border-t border-border/20">
                <p className="text-[10px] font-mono text-muted-foreground/40 uppercase tracking-widest">
                  © {new Date().getFullYear()} // System Active
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
});

export default Navbar;