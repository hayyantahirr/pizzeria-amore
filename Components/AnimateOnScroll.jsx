"use client";

import React, { useEffect, useRef, useState } from "react";
import "animate.css";

/**
 * AnimateOnScroll - A wrapper component that applies animate.css animations when elements enter the viewport
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Child elements to be animated
 * @param {string} props.animation - Animation name from animate.css (e.g., "fadeInUp", "fadeIn")
 * @param {number} props.duration - Animation duration in seconds (default: 1)
 * @param {number} props.delay - Animation delay in seconds (default: 0)
 * @param {number} props.threshold - Viewport threshold to trigger animation (0-1, default: 0.1)
 * @param {boolean} props.once - Whether to animate only once (default: true)
 * @param {string} props.className - Additional CSS classes
 * @returns {JSX.Element}
 */
const AnimateOnScroll = ({
  children,
  animation = "fadeIn",
  duration = 1,
  delay = 0,
  threshold = 0.1,
  once = true,
  className = "",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    // Skip if already animated and once is true
    if (hasAnimated && once) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update visibility state based on intersection
        if (entry.isIntersecting) {
          setIsVisible(true);
          setHasAnimated(true);

          // If once is true, unobserve after animation is triggered
          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          // If not once, hide when out of view
          setIsVisible(false);
        }
      },
      { threshold }
    );

    // Start observing the element
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    // Cleanup observer on unmount
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [threshold, once]);

  // Prepare animation classes
  const animationClass = isVisible
    ? `animate__animated animate__${animation}`
    : "";

  // Prepare animation style
  const animationStyle = {
    animationDuration: `${duration}s`,
    animationDelay: `${delay}s`,
    // Ensure the element is invisible before animation starts
    opacity: isVisible || hasAnimated ? 1 : 0,
  };

  return (
    <div
      ref={elementRef}
      className={`${animationClass} ${className}`}
      style={animationStyle}
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll;
