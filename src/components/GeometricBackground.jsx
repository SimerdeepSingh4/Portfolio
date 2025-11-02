import { useEffect, useState, useCallback } from "react";

export const GeometricBackground = () => {
  const [planets, setPlanets] = useState([]);
  const [moons, setMoons] = useState([]);
  const [comets, setComets] = useState([]);


  // Generate stardust particles




  // Generate cosmic dust clouds
  const generatePlanets = useCallback(() => {
    const dustClouds = [];
    const numberOfClouds = 8;
    const dustColors = ['#FFE4B5', '#F5DEB3', '#DDD0C0', '#E6E6FA', '#F0E68C', '#FFF8DC'];

    for (let i = 0; i < numberOfClouds; i++) {
      dustClouds.push({
        id: i,
        size: Math.random() * 120 + 60,
        x: Math.random() * 100,
        y: Math.random() * 100,
        color: dustColors[Math.floor(Math.random() * dustColors.length)],
        animationDuration: Math.random() * 40 + 25,
        // Lower overall opacity for better readability in light mode
        opacity: Math.random() * 0.08 + 0.03,
        blur: Math.random() * 30 + 20,
        drift: Math.random() * 20 + 10,
      });
    }
    setPlanets(dustClouds);
  }, []);

  // Generate interstellar gas clouds
  const generateMoons = useCallback(() => {
    const gasClouds = [];
    const numberOfGasClouds = 6;
    const gasColors = ['#E0E6FF', '#FFE5D9', '#FFEAA7', '#DDB7AB', '#C7CEEA'];

    for (let i = 0; i < numberOfGasClouds; i++) {
      gasClouds.push({
        id: i,
        size: Math.random() * 200 + 100,
        x: Math.random() * 100,
        y: Math.random() * 100,
        animationDuration: Math.random() * 35 + 20,
        // Lower overall opacity for better readability in light mode
        opacity: Math.random() * 0.08 + 0.02,
        color: gasColors[Math.floor(Math.random() * gasColors.length)],
        blur: Math.random() * 50 + 40,
        stretch: Math.random() * 1.5 + 0.8, // For elliptical shapes
      });
    }
    setMoons(gasClouds);
  }, []);

  // Generate comets (light mode meteors)
  const generateComets = useCallback(() => {
    const comets = [];
    const numberOfComets = 3;

    for (let i = 0; i < numberOfComets; i++) {
      comets.push({
        id: i,
        x: Math.random() * 60 - 5, // Spawn from -15% to 45% (top-left to top-center)
        y: Math.random() * 20 - 10, // Spawn from -10% to 10% (off-screen top area)
        size: Math.random() * 2 + 2,
        trail: Math.random() * 60 + 80, // 80-140px trail length
        animationDuration: Math.random() * 6 + 10, // 10-16 seconds duration (slower)
        brightness: Math.random() * 0.3 + 0.7, // 0.7-1.0 brightness
      });
    }
    setComets(comets);
  }, []);

  // Generate solar rays


  // No direct sun generation - using implied sun through rays

  useEffect(() => {

    generatePlanets();
    generateMoons();
    generateComets();


    const handleResize = () => {
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [ generatePlanets, generateMoons, generateComets]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* All background elements should stay at z-0 or negative to ensure they stay behind content */}
      {/* Solar rays from off-screen sun (top-left) */}
      <div 
        className="absolute -z-10"
        style={{
          left: "-20px",
          top: "-20px",
        }}
      >
        
      </div>

      {/* Cosmic Dust Clouds */}
      {planets.map((dust) => (
        <div
          key={`dust-${dust.id}`}
          className="absolute rounded-full cosmic-dust-cloud animate-dust-drift-gentle -z-10"
          style={{
            width: dust.size + "px",
            height: dust.size + "px",
            left: dust.x + "%",
            top: dust.y + "%",
            backgroundColor: dust.color,
            opacity: dust.opacity,
            filter: `blur(${dust.blur}px)`,
            animationDuration: dust.animationDuration + "s",
          }}
        />
      ))}

      {/* Interstellar Gas Clouds */}
      {moons.map((gas) => (
        <div
          key={`gas-${gas.id}`}
          className="absolute rounded-full gas-cloud animate-gas-flow -z-50"
          style={{
            width: gas.size + "px",
            height: gas.size * gas.stretch + "px",
            left: gas.x + "%",
            top: gas.y + "%",
            backgroundColor: gas.color,
            opacity: gas.opacity,
            filter: `blur(${gas.blur}px)`,
            animationDuration: gas.animationDuration + "s",
            borderRadius: '50%',
          }}
        />
      ))}

      {/* Light comets */}
      {comets.map((comet) => (
        <div
          key={`comet-${comet.id}`}
          className="light-comet animate-light-comet -z-10"
          style={{
            width: comet.trail + "px",
            height: comet.size + "px",
            left: comet.x + "%",
            top: comet.y + "%",
            animationDuration: comet.animationDuration + "s",
            animationTimingFunction: 'linear',
            animationIterationCount: 'infinite',
            animationPlayState: 'running',
            animationFillMode: 'both',
            opacity: comet.brightness,
          }}
        />
      ))}
    </div>
  );
};

export default GeometricBackground;