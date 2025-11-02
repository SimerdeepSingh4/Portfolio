import { useEffect, useState, useCallback, useRef } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  const [constellationLines, setConstellationLines] = useState([]);

  const rootRef = useRef(null);

  const generateStars = useCallback(() => {
    // Reduce star density for performance
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 12000
    );

    const newStars = [];
    const starTypes = ['normal', 'bright', 'dim', 'giant', 'binary'];
    const starColors = ['#ffffff', '#fff5e6', '#e6f3ff', '#ffe6f5', '#f0f8ff'];

    for (let i = 0; i < numberOfStars; i++) {
      const starType = starTypes[Math.floor(Math.random() * starTypes.length)];
      const baseSize = starType === 'giant' ? 4 : starType === 'bright' ? 2.5 : 1.5;
      const animDuration = Math.random() * 6 + 3;
      
      newStars.push({
        id: i,
        type: starType,
        size: Math.random() * 2 + baseSize,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: starType === 'dim' ? Math.random() * 0.3 + 0.3 : Math.random() * 0.5 + 0.5,
        animationDuration: animDuration,
        color: starColors[Math.floor(Math.random() * starColors.length)],
        twinkleDelay: `${Math.random() * animDuration}s`, // Positive delay for staggered start
        brightness: starType === 'bright' ? Math.random() * 0.4 + 0.6 : Math.random() * 0.3 + 0.3,
      });
    }

    setStars(newStars);
  }, []);

  const generateMeteors = useCallback(() => {
    const numberOfMeteors = 3;
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 2,
        x: Math.random() * 60 - 5, // Spawn from -15% to 45% (top-left to top-center)
        y: Math.random() * 20 - 10, // Spawn from -10% to 10% (off-screen top area)
        delay: Math.random() * 12 + i * 2, // Random delays with staggering
        animationDuration: Math.random() * 6 + 10, // 10-16 seconds duration (slower)
        trail: Math.random() * 60 + 80, // 80-140px trail length
        brightness: Math.random() * 0.3 + 0.7, // 0.7-1.0 brightness
      });
    }

    setMeteors(newMeteors);
  }, []);


  const generateConstellations = useCallback(() => {
    const constellations = [];
    const numberOfConstellations = 3;

    for (let c = 0; c < numberOfConstellations; c++) {
      const starsInConstellation = Math.floor(Math.random() * 4) + 3;
      const constellationStars = [];
      
      // Generate constellation center
      const centerX = 20 + Math.random() * 60;
      const centerY = 20 + Math.random() * 60;
      
      for (let i = 0; i < starsInConstellation; i++) {
        constellationStars.push({
          x: centerX + (Math.random() - 0.5) * 30,
          y: centerY + (Math.random() - 0.5) * 30,
        });
      }
      
      // Generate lines between constellation stars
      const lines = [];
      for (let i = 0; i < constellationStars.length - 1; i++) {
        if (Math.random() > 0.3) { // Not all stars connected
          lines.push({
            from: constellationStars[i],
            to: constellationStars[i + 1],
            opacity: Math.random() * 0.3 + 0.1,
          });
        }
      }
      
      constellations.push({
        id: c,
        lines: lines,
        animationDelay: Math.random() * 10,
      });
    }

    setConstellationLines(constellations);
  }, []);

  useEffect(() => {
    generateStars();
    generateMeteors();
    generateConstellations();

    // Opt this component into scoped forced animation start rules by adding
    // the `bg-animated--active` class on mount. This is cheaper and more
    // reliable than toggling many inline styles on many elements.
    const startTimeout = setTimeout(() => {
      if (rootRef.current) rootRef.current.classList.add("bg-animated--active");
    }, 50);

    // Re-apply the scoped class whenever the document <html> class list
    // changes (theme toggles typically toggle `dark` on <html`). This
    // ensures animations restart immediately after a theme change.
    const htmlEl = document && document.documentElement;
    let mutationObserver = null;
    if (htmlEl && typeof MutationObserver !== "undefined") {
      let toggleTimer = null;
      mutationObserver = new MutationObserver((mutations) => {
        // Debounce rapid mutations
        if (toggleTimer) clearTimeout(toggleTimer);
        toggleTimer = setTimeout(() => {
          if (!rootRef.current) return;
          // briefly remove then re-add the class to restart animations
          rootRef.current.classList.remove("bg-animated--active");
          // force reflow then add back
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          rootRef.current.offsetHeight;
          rootRef.current.classList.add("bg-animated--active");
        }, 60);
      });

      mutationObserver.observe(htmlEl, { attributes: true, attributeFilter: ["class"] });
    }

    // Debounced resize regeneration (preserve original behavior but less noisy)
    let resizeTimer = null;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        generateStars();
        generateConstellations();
      }, 200);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(startTimeout);
      if (mutationObserver) mutationObserver.disconnect();
      if (resizeTimer) clearTimeout(resizeTimer);
    };
  }, [generateStars, generateMeteors, generateConstellations]);

  return (
    <div ref={rootRef} className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Constellation Lines */}
      <svg className="absolute inset-0 w-full h-full">
        {constellationLines.map((constellation) =>
          constellation.lines.map((line, lineIndex) => (
            <line
              key={`constellation-${constellation.id}-${lineIndex}`}
              x1={line.from.x + "%"}
              y1={line.from.y + "%"}
              x2={line.to.x + "%"}
              y2={line.to.y + "%"}
              stroke="#ffffff"
              strokeWidth="0.5"
              opacity={line.opacity}
              className="animate-constellation-fade"
              style={{
                animationDelay: constellation.animationDelay + "s",
                animationDuration: "8s",
              }}
            />
          ))
        )}
      </svg>

      {/* Enhanced Stars */}
      {stars.map((star) => (
        <div
          key={`star-${star.id}`}
          className="absolute rounded-full"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            backgroundColor: star.color,
            opacity: star.opacity,
            boxShadow: star.type === 'bright' 
              ? `0 0 ${star.brightness * 20}px ${star.color}, 0 0 ${star.brightness * 40}px ${star.color}`
              : `0 0 ${star.brightness * 10}px ${star.color}`,
            animationName: `twinkle-${star.type}`,
            animationDuration: star.animationDuration + "s",
            animationTimingFunction: 'ease-in-out',
            animationIterationCount: 'infinite',
            animationDelay: star.twinkleDelay,
            animationFillMode: 'forwards',
            animationPlayState: 'running',
          }}
        />
      ))}

      {/* Enhanced Meteors */}
      {meteors.map((meteor) => (
        <div
          key={`meteor-${meteor.id}`}
          className="meteor-enhanced absolute animate-meteor-enhanced"
          style={{
            width: meteor.trail + "px",
            height: meteor.size + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            opacity: meteor.brightness,
            animationDuration: meteor.animationDuration + "s",
            // animationDelay: meteor.delay + "s",
          }}
        />
      ))}

      {/* Cosmic Dust */}
      <div className="absolute inset-0 opacity-20">
        <div className="cosmic-dust animate-dust-drift" />
      </div>
    </div>
  );
};

export default StarBackground;
