import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/SimerdeepSingh4",
      color: "#0077B5",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/simerdeep-singh-gandhi/",
      color: "#1DA1F2",
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:simerdeepsingh567@gmail.com",
      color: "#5b6abf",
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
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-1.5 sm:p-2 rounded-full bg-primary/10 text-muted-foreground transition-all duration-300 ${social.color} hover:bg-primary/20`}
                    aria-label={`Visit my ${social.name} profile`}
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
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
