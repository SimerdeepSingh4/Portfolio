import { cn } from "@/lib/utils";
import { Menu, X, Copy, Check } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "All Projects", href: "/projects", isRoute: true },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      // Store the current scroll position
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      // Restore scroll position when closing menu
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }

    // Cleanup on unmount
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

const handleNavClick = async (e, href, isRoute = false) => {
  e.preventDefault();
  const targetId = href.replace("#", "");

  // Close menu first (so scroll can work normally)
  setIsMenuOpen(false);

  // Restore body scroll before trying to scroll
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.width = '';
  document.body.style.overflow = '';

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
    navigate("/", { replace: false });

    // Wait for route to render completely
    setTimeout(scrollToSection, 500);
  } else {
    setTimeout(scrollToSection, 200);
  }
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

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.ctrlKey || e.metaKey) {
        switch (e.key) {
          case '1':
            e.preventDefault();
            handleNavClick(e, '#hero');
            break;
          case '2':
            e.preventDefault();
            handleNavClick(e, '#about');
            break;
          case '3':
            e.preventDefault();
            handleNavClick(e, '#skills');
            break;
          case '4':
            e.preventDefault();
            handleNavClick(e, '#projects');
            break;
          case '5':
            e.preventDefault();
            handleNavClick(e, '#contact');
            break;
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <nav
        className={cn(
          "fixed w-full z-40 transition-all duration-200",
          isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
        )}
      >
        <div className="container flex items-center justify-between">
        <a
          className="text-xl font-bold text-primary flex items-center cursor-pointer"
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground">Simerdeep</span>{" "}
            Portfolio
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, key) => (
            <motion.a
              key={key}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href, item.isRoute)}
              className="text-foreground/80 hover:text-primary transition-colors duration-200 cursor-pointer relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.name}
              <motion.div
                className="absolute -bottom-1 left-0 h-0.5 bg-primary"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.2 }}
              />
            </motion.a>
          ))}
          <motion.button
            onClick={copyEmail}
            className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors duration-200 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {copiedEmail ? <Check size={16} /> : <Copy size={16} />}
            <span className="text-sm hidden lg:inline">Email</span>
          </motion.button>
          <ThemeToggle />
        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="p-2 text-foreground z-50"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

{/* Mobile Menu */}
<div
  onClick={() => setIsMenuOpen(false)} // close when background tapped
  className={cn(
    "fixed inset-0 bg-background/95 backdrop-blur-md z-40",
    "flex flex-col items-center justify-center transition-all duration-200 md:hidden",
    isMenuOpen 
      ? "opacity-100 pointer-events-auto"
      : "opacity-0 pointer-events-none"
  )}
  style={{ height: "100dvh" }}
>
  <div
    className="flex flex-col space-y-8 text-xl text-center px-6"
    onClick={(e) => e.stopPropagation()} // prevent closing when clicking links
  >
    {navItems.map((item, key) => (
      <motion.a
        key={key}
        href={item.href}
        onClick={(e) => handleNavClick(e, item.href, item.isRoute)}
        className="text-foreground/80 hover:text-primary transition-colors duration-200 cursor-pointer py-2"
        initial={{ opacity: 0, y: 20 }}
        animate={isMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.3, delay: key * 0.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {item.name}
      </motion.a>
    ))}

    {/* Copy Email Button */}
    <motion.button
      onClick={copyEmail}
      className="flex items-center justify-center gap-2 text-foreground/80 hover:text-primary transition-colors duration-200 cursor-pointer py-2 mt-4"
      initial={{ opacity: 0, y: 20 }}
      animate={isMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {copiedEmail ? <Check size={20} /> : <Copy size={20} />}
      <span>Copy Email</span>
    </motion.button>
  </div>
</div>
        </div>
      </nav>
  );
};
export default Navbar;