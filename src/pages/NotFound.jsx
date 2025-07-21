import React from "react";
import { Navbar } from "../components/Navbar";
import { StarBackground } from "@/components/StarBackground";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden flex flex-col">
      {/* Background Effects */}
      <StarBackground />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4">
        <div className="z-10 max-w-xl animate-fade-in">
          <h1 className="text-xl md:text-2xl mb-2 text-yellow-400 font-semibold">
            Houston, we have a problem.
          </h1>
          <h2 className="text-7xl md:text-9xl font-bold text-white mb-4">404</h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-6">
            The page you're looking for doesn't exist.
          </p>
          <Link
            to="/"
            className="cosmic-button text-lg py-3 px-8 rounded-full shadow-lg hover:scale-105 focus-visible:outline-2 focus-visible:outline-primary transition-all duration-300 inline-block"
          >
            Go Back Home
          </Link>
        </div>

        {/* Astronaut Image */}
        <img
          src="/projects/astronaut.svg"
          alt="Illustration of astronaut floating in space"
          loading="lazy"
          className="w-60 md:w-96 absolute bottom-0 right-0 opacity-90 pointer-events-none float-lr"
        />
        <img
          src="/projects/astronaut2.svg"
          alt="Illustration of astronaut in top left corner"
          loading="lazy"
          className="w-40 md:w-80 absolute top-20 left-0 opacity-90 pointer-events-none animate-float"
        />
      </main>
      <Footer />
    </div>
  );
};
