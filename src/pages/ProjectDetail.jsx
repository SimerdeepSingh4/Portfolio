import { useParams } from "react-router-dom";
import React from "react";
import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
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

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden flex flex-col">
    {/* Theme Toggle */}
    <ThemeToggle />

    {/* Background Effects */}
    <StarBackground />

    {/* Navbar */}
    <Navbar />

    {/* Main Content */}
    <main className="flex-grow flex flex-col items-center justify-center text-center px-4">
    <div className="p-6 md:p-12 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
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
        className="px-4 py-2 text-sm font-medium bg-secondary hover:bg-secondary/80 transition rounded-full text-secondary-foreground border border-border shadow-sm"
      >
        {tag}
      </span>
    ))}
  </div>
</div>

    </div>
    </main>
    <Footer />
    </div>
  );
};
