import { useParams } from "react-router-dom";
import React from "react";
import { Navbar } from "../components/Navbar";
import { StarBackground } from "@/components/StarBackground";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) return <p className="text-center mt-10">Project not found</p>;

  const isDemoAvailable = project.demoUrl && project.demoUrl !== "#";
  const isGithubAvailable = project.githubUrl && project.githubUrl !== "#";

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
    "Redux": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
    "Whisper API": "https://www.svgrepo.com/show/306500/openai.svg",


  };
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden flex flex-col">
      {/* Background Effects */}
      <StarBackground />

      {/* Navbar */}
      <Navbar />



      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4 pt-24 md:pt-20">
        <div className="p-6 md:p-12 max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">{project.title}</h1>
          <p className="text-muted-foreground mb-8">{project.description}</p>

          <h2 className="text-2xl font-semibold mt-8 mb-2 text-primary">Features</h2>
          {project.features && (
            <ul className="mb-6 text-left list-disc list-inside mx-auto max-w-xl">
              {project.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          )}
          {project.challenges && (
            <>
              <h2 className="text-2xl font-semibold mt-8 mb-2 text-primary">Challenges</h2>
              <ul className="mb-6 text-left list-disc list-inside mx-auto max-w-xl">
                {project.challenges.map((challenge, i) => (
                  <li key={i}>{challenge}</li>
                ))}
              </ul>
            </>
          )}
          {/* YouTube Demo Video */}
{project.videoUrl && (
  <div className="mb-12">
    <h2 className="text-2xl font-semibold mb-4 text-primary">Project Video Demo</h2>
    <div className="aspect-w-16 aspect-h-9">
      <iframe
        className="w-full h-96 rounded-lg shadow-lg"
        src={project.videoUrl}
        title={`${project.title} Demo Video`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  </div>
)}

          {/* Project Links/Buttons or Error Message */}
          <div className="flex flex-col items-center gap-4 mb-8">
            {!isDemoAvailable && !isGithubAvailable && (
              <span className="text-muted-foreground text-center">This project is not live and the source code is not public.</span>
            )}
            {!isDemoAvailable && isGithubAvailable && (
              <span className="text-muted-foreground text-center">This project is not live, but the source code is available below.</span>
            )}
            {isDemoAvailable && !isGithubAvailable && (
              <span className="text-muted-foreground text-center">This project is live, but the source code is not public.</span>
            )}
            <div className="flex flex-wrap gap-4 justify-center">
              {isDemoAvailable && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cosmic-button"
                >
                  Live Demo
                </a>
              )}
              {isGithubAvailable && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cosmic-button"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>

          {/* Render if project has sections */}
          {project.sections?.length > 0 ? (
            project.sections.map((section, index) => (
              <div key={index} className="mb-12">
                <h2 className="text-2xl font-semibold mb-2">{section.title}</h2>
                <p className="text-muted-foreground mb-4">{section.content}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {section.images.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`Screenshot of ${project.title} - ${section.title} (${idx + 1})`}
                      loading="lazy"
                      className="rounded-lg border"
                    />
                  ))}
                </div>
              </div>
            ))
          ) : (
            // Fallback for simple projects with just images
            <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 mb-8">
              {project.images?.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Screenshot of ${project.title} (${idx + 1})`}
                  loading="lazy"
                  className="rounded-xl border shadow-lg w-full object-cover max-h-[600px]"
                />
              ))}
            </div>
          )}

          {/* Tech stack */}
          <div className="mt-12 bg-muted/40 p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-bold mb-4 text-primary">Technologies Used</h3>

            <div className="flex flex-wrap gap-3">
              {project.tech.map((tag, i) => (
                <span
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-secondary hover:bg-secondary/80 transition rounded-full text-secondary-foreground border border-border shadow-sm"
                >
                  {tagIcons[tag] && (
                    <img src={tagIcons[tag]} alt={tag} className="w-4 h-4 object-contain bounce-on-hover" />
                  )}
                  {tag}
                </span>
              ))}
            </div>
          </div>


        </div>
      </main>
      {/* Extra Note for project 3 */}
      {project.id === "3" && (
        <div className="mt-8 mx-auto max-w-2xl rounded-xl border border-border bg-muted/50 p-4 shadow-sm text-center">
          <p className="text-base text-muted-foreground">
            ⚠️ <span className="font-medium text-primary">Note:</span> This project's backend is hosted on
            Render's free tier server. The first response may be delayed due to server cold start.
          </p>
        </div>
      )}


      <Footer />
    </div>
  );
};
