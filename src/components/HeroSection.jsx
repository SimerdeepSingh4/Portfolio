import { ArrowDown } from "lucide-react";
import { useInView } from "@/hooks/useInView";

export const HeroSection = () => {
  const [ref, inView] = useInView();
  return (
    <section
      id="hero"
      ref={ref}
      className={`relative min-h-screen flex flex-col items-center justify-center px-4 section-fade${inView ? " in-view" : ""}`}
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Simerdeep
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Singh Gandhi
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I’m a passionate full-stack web developer skilled in React.js, Node.js, MongoDB, and Java. I love building modern, scalable applications and solving real-world problems through code.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-[17px] text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
