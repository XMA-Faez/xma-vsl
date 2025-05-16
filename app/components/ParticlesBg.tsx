"use client";

import { useCallback, useEffect, useRef } from "react";
import type { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBg() {
  const containerRef = useRef<HTMLDivElement>(null);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  useEffect(() => {
    // Create a promise to track when particles are loaded
    let cleanup: (() => void) | undefined;
    let isMounted = true;

    // Dynamically import to avoid SSR issues
    const loadParticles = async () => {
      try {
        const { default: ReactParticles } = await import("react-tsparticles");
        
        if (!isMounted || !containerRef.current) return;

        const instance = await ReactParticles.init({
          id: "tsparticles",
          container: containerRef.current,
          options: {
            fullScreen: {
              enable: false, // Important: let us control the container
              zIndex: 0
            },
            background: {
              color: {
                value: "transparent",
              },
            },
            fpsLimit: 60,
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
                value: 50,
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
          },
        });

        // Ensure we have a proper cleanup function
        if (instance) {
          cleanup = () => {
            if (instance instanceof Container) {
              instance.destroy();
            }
          };
        }
        
        // Log success for debugging
        console.log("Particles background initialized successfully");
      } catch (error) {
        console.error("Failed to initialize particles:", error);
      }
    };

    loadParticles();

    // Cleanup function
    return () => {
      isMounted = false;
      if (cleanup) cleanup();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-full z-0 blur-fix"
      style={{
        willChange: "transform",
        transform: "translateZ(0)",
        backfaceVisibility: "hidden",
        pointerEvents: "none", // Make sure it doesn't interfere with clicks
      }}
      aria-hidden="true"
    />
  );
}