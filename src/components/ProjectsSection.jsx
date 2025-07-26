import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { useInView } from "@/hooks/useInView";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Mentora LMS",
    description: "A full-featured Learning Management System built using MERN stack with role-based dashboards for students, teachers, and admins.",
    image: "/projects/Project1B.png",
    tags: ["React", "Vite", "Node.js", "Express", "Redux", "JWT", "MongoDB", "Shadcn UI", "Cloudinary", "Stripe", ],

    demoUrl: "#",
    githubUrl: "https://github.com/SimerdeepSingh4/Mentora-LMS-",
  },
  {
    id: 2,
    title: "V.O.L.T (Voice-to-Output Language Transcription)",
    description: "An intelligent multilingual speech-to-text app that provides real-time transcription along with emotion detection and tone transformation.",
    image: "/projects/project2C.png",
    tags: ["React", "Node.js", "Firebase", "Google Cloud Speech API"],
    demoUrl: "#",
    githubUrl: "https://github.com/SimerdeepSingh4/V.O.L.T",
  },
  {
    id: 3,
    title: "AI-Powered Code Review Platform",
    description: "An intelligent code review app that uses Google’s Gemini AI to provide real-time feedback on prewritten code with syntax highlighting and markdown-based insights.",
    image: "/projects/project3A.png",
    tags: ["React", "Vite", "Node.js", "PrismJS", "Express", "React Markdown", "Axios", "Google Generative AI (Gemini)"],
    demoUrl: "#",
    githubUrl: "https://github.com/SimerdeepSingh4/Code-Reviewer",
  },
];

  const tagIcons = {
    "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    "Express": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    "Firebase": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    "Vite": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
    "Shadcn UI": "https://ui.shadcn.com/apple-touch-icon.png",
    "Stripe": "https://img.icons8.com/?size=512&id=21246&format=png",
    "JWT": "https://img.icons8.com/?size=512&id=rHpveptSuwDz&format=png",
    "Google Cloud Speech API": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg",
    "Google Generative AI (Gemini)": "https://img.icons8.com/?size=512&id=rnK88i9FvAFO&format=png",
    "React Markdown": "https://www.svgrepo.com/show/446620/markdown.svg",
    "PrismJS": "https://prismjs.com/assets/logo.svg",
    "Cloudinary": "https://us.v-cdn.net/6036703/uploads/623ZP60L4HP4/cloudinary-cloud-glyph-blue-png.png",
    "Axios": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg",
    "Redux": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg"


  };

export const ProjectsSection = () => {
  const [ref, inView] = useInView();
  const [expandedTags, setExpandedTags] = useState({});

  const toggleTags = (id) => {
    setExpandedTags((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="projects" ref={ref} className={`py-24 px-4 relative section-fade${inView ? " in-view" : ""}`}>
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const showAll = expandedTags[project.id];
            const visibleTags = showAll ? project.tags : project.tags.slice(0, 4);
            const hiddenCount = project.tags.length - 4;

            return (
              <div key={project.id} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={`Screenshot of ${project.title}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {visibleTags.map((tag) => (
                      <span
                        key={tag}
                        className="flex items-center gap-1 px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tagIcons[tag] && (
                          <img
                            src={tagIcons[tag]}
                            alt={tag}
                            title={tag}
                            className="w-4 h-4 object-contain bounce-on-hover"
                          />
                        )}
                        {tag}
                      </span>
                    ))}

                    {project.tags.length > 4 && (
                      <button
                        onClick={() => toggleTags(project.id)}
                        className="px-2 py-1 text-xs font-medium border rounded-full bg-muted text-muted-foreground hover:bg-muted/70 transition cursor-pointer"
                      >
                        {showAll ? "Show less" : `+${hiddenCount}`}
                      </button>
                    )}
                  </div>

                  <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                  <div className="flex justify-between items-center">
                    <div className="flex space-x-3">
                      <Link
                        to={`/project/${project.id}`}
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        aria-label={`View details for ${project.title}`}
                      >
                        <ExternalLink size={20} />
                      </Link>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <Github size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/SimerdeepSingh4"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
