import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ZoomOut, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";

export const ImageLightbox = ({
  isOpen,
  onClose,
  src,
  alt,
  title,
  onPrevious,
  onNext,
  hasPrevious,
  hasNext,
}) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const imageRef = useRef(null);

  // ✅ Reset zoom when image changes
  useEffect(() => {
    setIsZoomed(false);
    setIsLoaded(false);
  }, [src]);

  // ✅ Preload next/previous image for smoother navigation
  useEffect(() => {
    if (hasNext && typeof onNext === "function") {
      const nextImg = new Image();
      nextImg.src = src;
    }
  }, [src, hasNext, onNext]);

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", damping: 25, stiffness: 300 },
    },
    exit: { scale: 0.9, opacity: 0, transition: { duration: 0.2 } },
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-2 sm:p-4"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={handleBackdropClick}
        >
          <motion.div
            className="relative max-w-6xl max-h-[95vh] sm:max-h-[90vh] w-full flex flex-col"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Navigation Buttons */}
            {hasPrevious && (
              <motion.button
                onClick={onPrevious}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-3 bg-black/50 text-white rounded-full hover:bg-black/70 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <ChevronLeft size={22} />
              </motion.button>
            )}

            {hasNext && (
              <motion.button
                onClick={onNext}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-3 bg-black/50 text-white rounded-full hover:bg-black/70 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <ChevronRight size={22} />
              </motion.button>
            )}

            {/* Top Controls */}
            <div className="absolute top-2 sm:top-4 right-2 sm:right-4 z-10 flex gap-2">
              <motion.button
                onClick={() => setIsZoomed((prev) => !prev)}
                className="p-1.5 sm:p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isZoomed ? (
                  <ZoomOut size={18} />
                ) : (
                  <ZoomIn size={18} />
                )}
              </motion.button>

              <motion.button
                onClick={onClose}
                className="p-1.5 sm:p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={18} />
              </motion.button>
            </div>

            {/* Image Container */}
            <div className="relative flex-1 min-h-0 mb-2 flex items-center justify-center overflow-hidden rounded-lg">
              {!isLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-900/50">
                  <div className="w-12 h-12 border-4 border-gray-300 border-t-transparent rounded-full animate-spin" />
                </div>
              )}

              <motion.img
                ref={imageRef}
                src={src}
                alt={alt}
                loading="lazy"
                decoding="async"
                onLoad={() => setIsLoaded(true)}
                className={`max-h-[85vh] w-auto object-contain rounded-lg transition-transform duration-300 ${
                  isZoomed ? "scale-150 cursor-zoom-out" : "cursor-zoom-in"
                }`}
                onClick={() => setIsZoomed((prev) => !prev)}
                initial={{ opacity: 0 }}
                animate={{ opacity: isLoaded ? 1 : 0 }}
                transition={{ duration: 0.4 }}
              />
            </div>

            {/* Title */}
            {title && (
              <motion.div
                className="flex-shrink-0 px-2 sm:px-4 pb-2 sm:pb-4 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-white text-base sm:text-xl font-semibold bg-black/50 rounded-lg px-3 sm:px-4 py-1.5 sm:py-2 backdrop-blur-sm">
                  {title}
                </h3>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

};

export default ImageLightbox;
