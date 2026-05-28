import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { Suspense, lazy, useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Lottie from "lottie-react";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react"; 
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Toaster as HotToaster } from "react-hot-toast";
import { FloatingActionButton } from "./components/FloatingActionButton";
import { Spinner } from "./components/ui/Spinner";
import loaderAnimation from "../public/loader.json";

// Lazy Loaded Pages
const Home = lazy(() => import("./pages/Home"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const Projects = lazy(() => import("./pages/otherProjects"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    if (document.readyState === "complete") {
      const timer = setTimeout(() => setLoading(false), 1200);
      return () => clearTimeout(timer);
    } else {
      window.addEventListener("load", handleLoad);
      const timer = setTimeout(() => setLoading(false), 3000);
      return () => {
        window.removeEventListener("load", handleLoad);
        clearTimeout(timer);
      };
    }
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0,
              transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
            }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-background pointer-events-auto"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="w-48 h-48 md:w-64 md:h-64 flex items-center justify-center"
            >
              <Lottie 
                animationData={loaderAnimation} 
                loop={true} 
                className="w-full h-full"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <Toaster />
      <HotToaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: 'hsl(var(--card))',
            color: 'hsl(var(--foreground))',
            border: '1px solid hsl(var(--border))',
          },
        }}
      />
      <BrowserRouter>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>

        <div className="hidden sm:block">
          <FloatingActionButton />
        </div>
      </BrowserRouter>
      <Analytics />
      <SpeedInsights />
    </>
  );
}

export default App;
