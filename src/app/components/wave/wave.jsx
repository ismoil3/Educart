"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function WaveEffect() {
  const waveRef = useRef(null);

  useEffect(() => {
    if (!waveRef.current) return;

    // Create wave animations
    const waves = waveRef.current.querySelectorAll(".wave");

    waves.forEach((wave, index) => {
      // Reset position before animation
      gsap.set(wave, { x: 0 });

      // Horizontal wave motion
      gsap.to(wave, {
        x: "-50%",
        y: index * 10, // Add vertical offset for variety
        duration: 10 + index * 2,
        repeat: -1,
        ease: "sine.inOut",
        yoyo: true,
      });

      // Vertical scaling for dramatic effect
      gsap.to(wave, {
        scaleY: 1.5 + index * 0.3,
        duration: 6 + index,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    return () => {
      gsap.killTweensOf(waves);
    };
  }, []);

  return (
    <div
      className="relative h-[80px]  sm:h-[250px] md:h-[300px] w-full overflow-hidden"
      ref={waveRef}
    >
      {/* Wave container */}
      <div className="absolute bottom-0  left-0 w-full">
        {/* Multiple wave layers with enhanced curves */}
        <svg
          className="wave absolute bottom-0 left-0 w-[200%]"
          viewBox="0 0 2880 320"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            className="fill-purple-300/10"
            d="M0,160 
               C300,260 600,60 900,160 
               C1200,260 1500,60 1800,160 
               C2100,260 2400,60 2700,160 
               L2880,320 L0,320 Z"
          />
        </svg>
        <svg
          className="wave absolute bottom-0 left-0 w-[200%]"
          viewBox="0 0 2880 320"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            className="fill-purple-300/20"
            d="M0,200
               C300,300 600,100 900,200
               C1200,300 1500,100 1800,200
               C2100,300 2400,100 2700,200
               L2880,320 L0,320 Z"
          />
        </svg>
        <svg
          className="wave absolute bottom-0 left-0 w-[200%]"
          viewBox="0 0 2880 320"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            className="fill-purple-300/30"
            d="M0,240
               C300,320 600,160 900,240
               C1200,320 1500,160 1800,240
               C2100,320 2400,160 2700,240
               L2880,320 L0,320 Z"
          />
        </svg>
        <svg
          className="wave absolute bottom-0 left-0 w-[200%]"
          viewBox="0 0 2880 320"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            className="fill-purple-400"
            d="M0,280
               C300,340 600,220 900,280
               C1200,340 1500,220 1800,280
               C2100,340 2400,220 2700,280
               L2880,320 L0,320 Z"
          />
        </svg>
      </div>
    </div>
  );
}
