import { Briefcase, Code, User } from "lucide-react";
import { useInView } from "@/hooks/useInView";

export const AboutSection = () => {
  const [ref, inView] = useInView();
  return (
    <section id="about" ref={ref} className={`py-24 px-4 relative section-fade${inView ? " in-view" : ""}`}>
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="space-y-6 mb-12 max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold">
            Full-Stack Web Developer & Quick Learner
          </h3>
          <p className="text-muted-foreground">
            I'm a BCA graduate with a strong foundation in full-stack 
            web development, I specialize in creating responsive, accessible, and performant web
            applications using modern technologies like using React.js, Node.js, and MongoDB.
          </p>
          <p className="text-muted-foreground">
            I've worked on multiple freelance and personal projects, including a ride-sharing app, a multilingual transcription web app, and a learning management system. I enjoy solving complex problems and am always exploring new technologies like Docker, and automation tools to grow as a developer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
            <a href="#contact" className="cosmic-button">
              Get In Touch
            </a>
            <a
              href="https://drive.google.com/file/d/1fwKopCS-DvXjCuQYAfZRPSxzxmpAnZsQ/view?usp=sharing"
              className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto mt-8">
          <h3 className="text-xl font-bold mb-6 text-primary text-center">Timeline</h3>
          <ol className="relative border-l-2 border-primary/30 ml-4">
            <li className="mb-8 ml-6">
              <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-primary rounded-full ring-4 ring-primary/20">
                <User className="w-4 h-4 text-white" />
              </span>
              <h4 className="font-semibold text-lg">BCA Student, GLA University, Mathura</h4>
              <p className="text-muted-foreground text-sm">2022 – 2025</p>
              <p className="text-muted-foreground text-sm">Completed Bachelor of Computer Applications with a focus on full-stack development and software engineering.</p>
            </li>
            <li className="mb-8 ml-6">
              <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-primary rounded-full ring-4 ring-primary/20">
                <Briefcase className="w-4 h-4 text-white" />
              </span>
              <h4 className="font-semibold text-lg">Freelance Web Developer</h4>
              <p className="text-muted-foreground text-sm">Dec 2023 – Oct 2024</p>
              <p className="text-muted-foreground text-sm">Worked on projects like <span className='font-medium'>Dimple Collection</span> (e-commerce site) and personal freelance tasks.</p>
            </li>
            <li className="ml-6">
              <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-primary rounded-full ring-4 ring-primary/20">
                <Code className="w-4 h-4 text-white" />
              </span>
              <h4 className="font-semibold text-lg">Personal Projects & Continuous Learning</h4>
              <p className="text-muted-foreground text-sm">Ongoing</p>
              <p className="text-muted-foreground text-sm">Actively building full-stack applications, exploring AI integrations, and staying updated with modern development tools.</p>
            </li>
          </ol>
        </div>

        {/* Skills/Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg"> Web Development</h4>
                <p className="text-muted-foreground">
                  Creating responsive websites and web applications with
                  modern frameworks.
                </p>
              </div>
            </div>
          </div>
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <User className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">Backend Development</h4>
                <p className="text-muted-foreground">
                   Building RESTful APIs, working with databases like MongoDB and MySQL, and implementing server-side logic using Node.js and Express.
                </p>
              </div>
            </div>
          </div>
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>

              <div className="text-left">
                <h4 className="font-semibold text-lg">Project Experience</h4>
                <p className="text-muted-foreground">
                   Built and deployed real-world projects including LMS (Mentora), V.O.L.T transcription app, and JOYTRIP ride-booking platform using multiple Modern Technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
