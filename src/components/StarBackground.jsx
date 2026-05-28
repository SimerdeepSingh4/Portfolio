import React, { useEffect, useRef } from "react";

export const StarBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let stars = [];
    let meteors = [];
    let nebulae = [];
    let dustParticles = [];
    let planets = [];
    
    let width = window.innerWidth;
    let height = window.innerHeight;

    // Set canvas dimensions with DPR scaling for crisp rendering
    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = window.devicePixelRatio || 1;
      
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      
      ctx.scale(dpr, dpr);
      initStars();
      initNebulae();
      initDust();
      initPlanets();
    };

    const starColors = ["#ffffff", "#fff5e6", "#e6f3ff", "#ffe6f5", "#f0f8ff"];
    const starTypes = ["normal", "bright", "dim", "giant"];

    const initStars = () => {
      stars = [];
      const starDensity = 12000; 
      const numberOfStars = Math.floor((width * height) / starDensity);

      for (let i = 0; i < numberOfStars; i++) {
        const type = starTypes[Math.floor(Math.random() * starTypes.length)];
        const baseSize = type === "giant" ? 2.5 : type === "bright" ? 1.8 : 1.0;
        
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 1.2 + baseSize,
          color: starColors[Math.floor(Math.random() * starColors.length)],
          opacity: type === "dim" ? Math.random() * 0.2 + 0.15 : Math.random() * 0.5 + 0.4,
          speed: Math.random() * 0.008 + 0.003,
          twinkleDir: Math.random() > 0.5 ? 1 : -1,
          type: type,
        });
      }
    };

    const initNebulae = () => {
      nebulae = [
        {
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 250 + 250,
          color: "rgba(99, 102, 241, 0.04)", // Soft Indigo
          vx: Math.random() * 0.15 - 0.075,
          vy: Math.random() * 0.15 - 0.075,
        },
        {
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 300 + 200,
          color: "rgba(6, 182, 212, 0.03)", // Soft Cyan
          vx: Math.random() * 0.1 - 0.05,
          vy: Math.random() * 0.1 - 0.05,
        },
        {
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 200 + 200,
          color: "rgba(236, 72, 153, 0.02)", // Soft Pink
          vx: Math.random() * 0.08 - 0.04,
          vy: Math.random() * 0.08 - 0.04,
        }
      ];
    };

    const initDust = () => {
      dustParticles = [];
      const count = Math.floor((width * height) / 38000); 
      const safeCount = Math.max(20, Math.min(60, count));
      for (let i = 0; i < safeCount; i++) {
        dustParticles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 0.8 + 0.3,
          vx: Math.random() * 0.05 + 0.02, 
          vy: Math.random() * 0.03 - 0.015,
          opacity: Math.random() * 0.25 + 0.1,
          phase: Math.random() * Math.PI * 2,
          phaseSpeed: Math.random() * 0.01 + 0.005,
        });
      }
    };

    const initPlanets = () => {
      planets = [
        {
          x: width * 0.2,
          y: height * 0.25,
          size: 7,
          color: "#dfcfbe",
          ringColor: "rgba(223, 207, 190, 0.35)",
          vx: -0.012, 
          vy: 0.004,
        },
        {
          x: width * 0.8,
          y: height * 0.7,
          size: 4.5,
          color: "#a4b9c9",
          ringColor: "rgba(164, 185, 201, 0.28)",
          vx: 0.008,
          vy: -0.006,
        }
      ];
    };

    const spawnMeteor = () => {
      const spawnFromTop = Math.random() > 0.5;
      return {
        x: spawnFromTop ? Math.random() * width : -50,
        y: spawnFromTop ? -50 : Math.random() * height * 0.6,
        length: Math.random() * 80 + 60,
        speed: Math.random() * 3 + 3.5, // Graceful slow-falling speed
        angle: Math.PI / 4, 
        opacity: Math.random() * 0.5 + 0.5,
        width: Math.random() * 1.5 + 0.8,
      };
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw Nebulae
      nebulae.forEach((nebula) => {
        nebula.x += nebula.vx;
        nebula.y += nebula.vy;

        if (nebula.x < -100 || nebula.x > width + 100) nebula.vx *= -1;
        if (nebula.y < -100 || nebula.y > height + 100) nebula.vy *= -1;

        const grad = ctx.createRadialGradient(
          nebula.x, nebula.y, 0,
          nebula.x, nebula.y, nebula.radius
        );
        grad.addColorStop(0, nebula.color);
        grad.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(nebula.x, nebula.y, nebula.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // 2. Draw Space Dust
      dustParticles.forEach((dust) => {
        dust.x += dust.vx;
        dust.phase += dust.phaseSpeed;
        dust.y += dust.vy + Math.sin(dust.phase) * 0.05;

        // Wrap around boundaries
        if (dust.x > width + 10) dust.x = -10;
        if (dust.y > height + 10) dust.y = -10;
        if (dust.y < -10) dust.y = height + 10;

        ctx.fillStyle = "rgba(255, 255, 255, 0.45)";
        ctx.globalAlpha = dust.opacity;
        ctx.beginPath();
        ctx.arc(dust.x, dust.y, dust.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // 3. Draw Vector Planets (Saturn-like)
      planets.forEach((planet) => {
        planet.x += planet.vx;
        planet.y += planet.vy;

        if (planet.x < -60) planet.x = width + 60;
        if (planet.x > width + 60) planet.x = -60;
        if (planet.y < -60) planet.y = height + 60;
        if (planet.y > height + 60) planet.y = -60;

        // Draw back portion of rings
        ctx.strokeStyle = planet.ringColor;
        ctx.lineWidth = 1.6;
        ctx.globalAlpha = 0.55;
        ctx.save();
        ctx.translate(planet.x, planet.y);
        ctx.rotate(-Math.PI / 8); 
        ctx.scale(2.2, 0.4);
        ctx.beginPath();
        ctx.arc(0, 0, planet.size * 1.5, Math.PI, 0); 
        ctx.stroke();
        ctx.restore();

        // Spherical shadow-shaded body
        const grad = ctx.createRadialGradient(
          planet.x - planet.size * 0.3,
          planet.y - planet.size * 0.3,
          0,
          planet.x,
          planet.y,
          planet.size
        );
        grad.addColorStop(0, "#ffffff");
        grad.addColorStop(0.35, planet.color);
        grad.addColorStop(1, "#121216"); 

        ctx.fillStyle = grad;
        ctx.globalAlpha = 0.75;
        ctx.beginPath();
        ctx.arc(planet.x, planet.y, planet.size, 0, Math.PI * 2);
        ctx.fill();

        // Draw front portion of rings
        ctx.strokeStyle = planet.ringColor;
        ctx.lineWidth = 1.6;
        ctx.globalAlpha = 0.55;
        ctx.save();
        ctx.translate(planet.x, planet.y);
        ctx.rotate(-Math.PI / 8);
        ctx.scale(2.2, 0.4);
        ctx.beginPath();
        ctx.arc(0, 0, planet.size * 1.5, 0, Math.PI); 
        ctx.stroke();
        ctx.restore();
      });

      // 4. Draw Constellations (Subtle links between nearby bright/giant stars)
      ctx.lineWidth = 0.5;
      const connectionDistance = 90;
      const brightStars = stars.filter(s => s.type === "bright" || s.type === "giant");
      
      for (let i = 0; i < brightStars.length; i++) {
        for (let j = i + 1; j < brightStars.length; j++) {
          const s1 = brightStars[i];
          const s2 = brightStars[j];
          
          const dx = s1.x - s2.x;
          const dy = s1.y - s2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const alpha = (1 - dist / connectionDistance) * 0.08 * Math.min(s1.opacity, s2.opacity);
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(s1.x, s1.y);
            ctx.lineTo(s2.x, s2.y);
            ctx.stroke();
          }
        }
      }

      // 5. Draw Stars
      stars.forEach((star) => {
        // Update twinkling opacity
        star.opacity += star.speed * star.twinkleDir;
        if (star.opacity >= 0.9) {
          star.opacity = 0.9;
          star.twinkleDir = -1;
        } else if (star.opacity <= 0.15) {
          star.opacity = 0.15;
          star.twinkleDir = 1;
        }

        // Draw radial glow for bright/giant stars
        if (star.type === "bright" || star.type === "giant") {
          ctx.fillStyle = star.color;
          ctx.globalAlpha = star.opacity * 0.15;
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 2.2, 0, Math.PI * 2);
          ctx.fill();
        }

        // Draw cross flare for giant stars
        if (star.type === "giant") {
          ctx.strokeStyle = star.color;
          ctx.lineWidth = 0.5;
          ctx.globalAlpha = star.opacity * 0.45;
          ctx.beginPath();
          ctx.moveTo(star.x - star.size * 3.5, star.y);
          ctx.lineTo(star.x + star.size * 3.5, star.y);
          ctx.moveTo(star.x, star.y - star.size * 3.5);
          ctx.lineTo(star.x, star.y + star.size * 3.5);
          ctx.stroke();
        }

        // Draw core star
        ctx.fillStyle = star.color;
        ctx.globalAlpha = star.opacity;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // 6. Draw Meteors
      if (Math.random() < 0.016 && meteors.length < 5) {
        meteors.push(spawnMeteor());
      }

      meteors = meteors.filter((meteor) => {
        meteor.x += meteor.speed * Math.cos(meteor.angle);
        meteor.y += meteor.speed * Math.sin(meteor.angle);

        const endX = meteor.x - meteor.length * Math.cos(meteor.angle);
        const endY = meteor.y - meteor.length * Math.sin(meteor.angle);

        const grad = ctx.createLinearGradient(meteor.x, meteor.y, endX, endY);
        grad.addColorStop(0, `rgba(255, 255, 255, ${meteor.opacity})`);
        grad.addColorStop(1, "rgba(255, 255, 255, 0)");

        ctx.strokeStyle = grad;
        ctx.lineWidth = meteor.width;
        ctx.globalAlpha = 1;
        ctx.beginPath();
        ctx.moveTo(meteor.x, meteor.y);
        ctx.lineTo(endX, endY);
        ctx.stroke();

        // Glowing core head spark
        ctx.fillStyle = "rgba(255, 255, 255, 1)";
        ctx.globalAlpha = meteor.opacity;
        ctx.beginPath();
        ctx.arc(meteor.x, meteor.y, meteor.width * 1.4, 0, Math.PI * 2);
        ctx.fill();

        return meteor.y < height + 100 && meteor.x < width + 100;
      });

      // Restore global opacity
      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(draw);
    };

    // Initialize layout and start loop
    resizeCanvas();
    draw();

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full bg-transparent z-0 pointer-events-none"
    />
  );
};

export default StarBackground;
