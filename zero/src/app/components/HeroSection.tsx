'use client';

import { useEffect, useRef, useState } from 'react';

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const cursorTrailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        setMousePosition({ x, y });
        
        // Update cursor trail position
        if (cursorTrailRef.current) {
          cursorTrailRef.current.style.left = `${x}px`;
          cursorTrailRef.current.style.top = `${y}px`;
        }
      }
    };

    const handleMouseEnter = () => {
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
      section.addEventListener('mouseenter', handleMouseEnter);
      section.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (section) {
        section.removeEventListener('mousemove', handleMouseMove);
        section.removeEventListener('mouseenter', handleMouseEnter);
        section.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden"
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0 animate-gradient-shift"
          style={{
            background: 'linear-gradient(-45deg, #fce7f3, #e9d5ff, #ddd6fe, #e0e7ff, #fce7f3)',
            backgroundSize: '400% 400%',
          }}
        ></div>
      </div>

      {/* RGB Cursor Trail */}
      <div
        ref={cursorTrailRef}
        className={`absolute pointer-events-none transition-opacity duration-300 ${
          isHovering ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          transform: 'translate(-50%, -50%)',
          width: '300px',
          height: '300px',
          background: `radial-gradient(circle, 
            rgba(255, 0, 150, 0.3) 0%, 
            rgba(0, 255, 255, 0.2) 35%, 
            rgba(150, 0, 255, 0.2) 70%, 
            transparent 100%)`,
          borderRadius: '50%',
          filter: 'blur(40px)',
          zIndex: 0,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-6 text-zinc-900">
          Zero Two
        </h1>
        <p className="text-xl md:text-2xl text-zinc-600 font-light max-w-2xl mx-auto leading-relaxed">
          My waifus, so i want to let all of you know about it, sybau
        </p>
        <div className="mt-16 h-px w-24 bg-zinc-300 mx-auto"></div>
      </div>
    </section>
  );
}
