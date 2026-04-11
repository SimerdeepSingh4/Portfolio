import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react"; 
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Toaster as HotToaster } from "react-hot-toast";
import { FloatingActionButton } from "./components/FloatingActionButton";
import { Spinner } from "./components/ui/Spinner";

// Lazy Loaded Pages
const Home = lazy(() => import("./pages/Home"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const Projects = lazy(() => import("./pages/otherProjects"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <>
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
