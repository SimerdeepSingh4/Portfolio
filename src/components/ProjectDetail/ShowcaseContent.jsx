import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layout, Image as ImageIcon, Maximize2, ChevronLeft, ChevronRight } from "lucide-react";

const ShowcaseContent = React.memo(({
  project,
  activeSection,
  currentImageIndex,
  setActiveSection,
  setCurrentImageIndex,
  openLightbox
}) => {
  if (!project.sections || project.sections.length === 0) return null;

  const activeSectionData = project.sections[activeSection];
  const images = activeSectionData.images || [];

  return (
    <div className="mb-20">
      {/* Section Controls - Technical Dock UI */}
      <div className="flex justify-center mb-10">
        <div className="p-1.5 bg-muted/30 backdrop-blur-md rounded-2xl border border-border/50 flex gap-2 overflow-x-auto no-scrollbar max-w-full">
          {project.sections.map((section, index) => (
            <button
              key={index}
              onClick={() => { setActiveSection(index); setCurrentImageIndex(0); }}
              className={`px-5 py-2.5 rounded-xl text-sm font-bold whitespace-nowrap transition-all duration-300 flex items-center gap-2 ${activeSection === index
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-105"
                  : "hover:bg-muted text-muted-foreground"
                }`}
            >
              {index === 0 ? <Layout size={16} /> : <ImageIcon size={16} />}
              {section.title}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          className="space-y-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {/* Section Info */}
          <div className="max-w-3xl mx-auto text-center">
            <h4 className="text-xl font-bold mb-4 tracking-tight">{activeSectionData.title}</h4>
            <p className="text-muted-foreground leading-relaxed">{activeSectionData.content}</p>
          </div>

          {/* Staggered "Orbit" Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 auto-rows-[250px] md:auto-rows-[300px]">
            {images.map((img, index) => {
              // Custom grid spans for the staggered look
              const spanClass = index === 0 ? "lg:col-span-8 lg:row-span-2" :
                index === 1 ? "lg:col-span-4 lg:row-span-1" :
                  index === 2 ? "lg:col-span-4 lg:row-span-1" : "lg:col-span-6";

              return (
                <motion.div
                  key={index}
                  className={`relative group rounded-3xl overflow-hidden cursor-pointer bg-muted ${spanClass}`}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  onClick={() => openLightbox(img, activeSectionData.title, activeSectionData.title, index, images)}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                >
                  <img
                    src={img}
                    alt={`${project.title} - ${activeSectionData.title} view ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <div className="flex items-center gap-2 text-white/90 text-sm font-medium">
                      <Maximize2 size={16} />
                      View Full Resolution
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Gallery Pagination Indicator */}
          {images.length > 1 && (
            <div className="flex justify-center items-center gap-4 pt-4">
              <div className="h-[1px] w-12 bg-border/50" />
              <span className="text-[10px] font-mono tracking-widest text-muted-foreground uppercase">
                IMG {String(currentImageIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
              </span>
              <div className="h-[1px] w-12 bg-border/50" />
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
});

export default ShowcaseContent;
