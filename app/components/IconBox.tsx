import React, { ReactNode } from "react";

interface IconBoxProps {
  icon: ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function IconBox({ 
  icon, 
  size = "md", 
  className = ""
}: IconBoxProps) {
  const sizeClasses = {
    sm: "w-12 h-12",
    md: "w-16 h-16",
    lg: "w-20 h-20"
  };

  return (
    <div 
      className={`flex items-center justify-center ${sizeClasses[size]} bg-gradient-to-br from-red-400 to-red-600 rounded-lg shadow-lg ${className}`}
    >
      <div className="text-white">
        {icon}
      </div>
    </div>
  );
}