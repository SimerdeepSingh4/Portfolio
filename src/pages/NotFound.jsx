import React from "react";
import { Navbar } from "../components/Navbar";
import { ThemeBackground } from "@/components/ThemeBackground";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden flex flex-col">
      {/* Background Effects */}
      <ThemeBackground />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4 pt-10 pb-0 relative">
        <div className="z-10 max-w-xl animate-fade-in">
          <h1 className="text-lg sm:text-xl md:text-2xl mb-2 text-yellow-400 font-semibold">
            Houston, we have a problem.
          </h1>
          <h2 className="text-6xl sm:text-7xl md:text-9xl font-bold text-foreground mb-4 leading-none">
            404
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6">
            The page you're looking for doesn't exist.
          </p>
          <Link
            to="/"
            className="cosmic-button text-base sm:text-lg py-3 px-8 rounded-full shadow-lg hover:scale-105 focus-visible:outline-2 focus-visible:outline-primary transition-all duration-300 inline-block"
          >
            Go Back Home
          </Link>
        </div>

        {/* Astronaut Images */}
        <img
          src="https://res.cloudinary.com/dyfjy8kmv/image/upload/v1765220082/astronaut_pszgpe.svg"
          alt="Illustration of astronaut floating in space"
          loading="lazy"
          className="absolute bottom-0 sm:bottom-5 right-0 w-40 sm:w-60 md:w-80 opacity-90 pointer-events-none animate-float"
        />
        <img
          src="https://res.cloudinary.com/dyfjy8kmv/image/upload/v1765220082/astronaut2_vt7li5.svg"
          alt="Illustration of astronaut in top left corner"
          loading="lazy"
          className="absolute top-16 sm:top-20 left-0 w-32 sm:w-48 md:w-72 opacity-90 pointer-events-none animate-float-slow"
        />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
export default NotFound;
