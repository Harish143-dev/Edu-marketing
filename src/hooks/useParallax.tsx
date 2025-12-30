import { useEffect, useState, useCallback } from "react";

interface ParallaxConfig {
  speed?: number; // Multiplier for parallax intensity (0.1 = slow, 1 = match scroll)
  direction?: "up" | "down";
  maxOffset?: number; // Maximum offset in pixels
}

export const useParallax = (config: ParallaxConfig = {}) => {
  const { speed = 0.3, direction = "up", maxOffset = 200 } = config;
  const [offset, setOffset] = useState(0);

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const multiplier = direction === "up" ? -1 : 1;
    const calculatedOffset = Math.min(scrollY * speed * multiplier, maxOffset);
    setOffset(calculatedOffset);
  }, [speed, direction, maxOffset]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return offset;
};

// Hook for multiple parallax layers with different speeds
export const useMultiLayerParallax = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return {
    scrollY,
    getTransform: (speed: number, direction: "up" | "down" = "up") => {
      const multiplier = direction === "up" ? -1 : 1;
      return `translateY(${scrollY * speed * multiplier}px)`;
    },
    getOffset: (speed: number, direction: "up" | "down" = "up") => {
      const multiplier = direction === "up" ? -1 : 1;
      return scrollY * speed * multiplier;
    },
  };
};

export default useParallax;
