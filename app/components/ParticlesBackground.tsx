"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full z-0 blur-fix" style={{ willChange: "transform" }}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: {
            enable: true,
            zIndex: 0
          },
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 60, // Reduced FPS limit for better performance
          particles: {
            color: {
              value: "#ef4444",
            },
            links: {
              color: "#ef4444",
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 0.4,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 50, // Reduced number of particles for better performance
            },
            opacity: {
              value: 0.3,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
        className="blur-fix absolute inset-0 w-full h-full"
        style={{ 
          transform: "translateZ(0)",
          position: "fixed", 
          top: 0, 
          left: 0, 
          width: "100%", 
          height: "100%",
          pointerEvents: "none"
        }}
      />
    </div>
  );
}