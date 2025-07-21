import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-6 px-10 bg-card relative border-t border-border mt-7 pt-4 flex flex-wrap justify-between items-center">
      {" "}
      <p className="text-sm text-muted-foreground text-center md:text-left">
  Designed & Developed by <span className="text-primary font-medium">Simerdeep Singh</span>
</p>
      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
