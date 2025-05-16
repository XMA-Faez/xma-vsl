"use client";

interface RadialGradientProps {
  position: string;
  size: string;
  color: string;
  opacity?: string;
  blur?: string;
}

export default function RadialGradient({
  position,
  size,
  color,
  opacity = "opacity-20",
  blur = "blur-3xl",
}: RadialGradientProps) {
  return (
    <div 
      className={`absolute ${position} ${size} ${opacity} ${blur} rounded-full bg-gradient-radial ${color} to-transparent pointer-events-none blur-fix`}
      style={{ 
        transform: "translateZ(0)",
        backfaceVisibility: "hidden",
        willChange: "transform",
        // Ensure even dimensions (helps with some rendering issues)
        width: size.includes("w-") ? "" : "100%",
        height: size.includes("h-") ? "" : "100%"
      }}
    ></div>
  );
}