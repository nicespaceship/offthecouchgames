'use client';

import { useRef, useEffect, useState } from 'react';

type AnimationType = 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: AnimationType;
}

export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  animation = 'fadeInUp',
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Add is-visible class when element enters viewport
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            // Keep it visible - don't re-animate on scroll back
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isVisible]);

  const delayClass = delay > 0 ? `delay-${Math.min(Math.round(delay * 100), 500)}` : '';

  return (
    <div
      ref={ref}
      className={`animate-on-scroll ${animation} ${isVisible ? 'is-visible' : ''} ${delayClass} ${className}`}
    >
      {children}
    </div>
  );
}
