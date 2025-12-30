import { useEffect, useRef, useState } from "react";

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const { threshold = 0.1, rootMargin = "0px", triggerOnce = true } = options;
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
};

// Animation variant classes
export const scrollAnimationVariants = {
  fadeUp: "translate-y-8 opacity-0",
  fadeUpVisible: "translate-y-0 opacity-100",
  fadeIn: "opacity-0",
  fadeInVisible: "opacity-100",
  scaleUp: "scale-90 opacity-0",
  scaleUpVisible: "scale-100 opacity-100",
  slideLeft: "translate-x-8 opacity-0",
  slideLeftVisible: "translate-x-0 opacity-100",
  slideRight: "-translate-x-8 opacity-0",
  slideRightVisible: "translate-x-0 opacity-100",
};

export default useScrollAnimation;
