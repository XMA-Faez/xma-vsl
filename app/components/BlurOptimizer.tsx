"use client";

import { useEffect } from 'react';

// This component adds a special script to optimize blur rendering
// and reduce flickering during animations

export default function BlurOptimizer() {
  useEffect(() => {
    // This script adds compositor hints to all elements with blur effects
    const optimizeBlurredElements = () => {
      // Select all elements with backdrop-blur or blur classes
      const blurredElements = document.querySelectorAll(
        '[class*="backdrop-blur"], [class*="blur-"]'
      );
      
      // Apply optimization fixes
      blurredElements.forEach(element => {
        if (element instanceof HTMLElement) {
          // Force hardware acceleration
          element.style.transform = 'translateZ(0)';
          element.style.backfaceVisibility = 'hidden';
          element.style.perspective = '1000px';
          element.style.willChange = 'transform, opacity';
          
          // Ensure rounded corners have even dimensions
          const rect = element.getBoundingClientRect();
          if (rect.width % 2 !== 0) {
            element.style.width = `${Math.floor(rect.width)}px`;
          }
          if (rect.height % 2 !== 0) {
            element.style.height = `${Math.floor(rect.height)}px`;
          }
        }
      });
    };

    // Run optimization on load and after a short delay
    optimizeBlurredElements();
    
    // Add a cleanup delay to ensure elements are fully rendered
    const timeoutId = setTimeout(optimizeBlurredElements, 500);
    
    // Add window resize listener to reoptimize elements
    window.addEventListener('resize', optimizeBlurredElements);
    
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', optimizeBlurredElements);
    };
  }, []);

  return null; // This component doesn't render anything
}