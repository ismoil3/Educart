'use client';

import { useEffect } from "react";
import gsap from "gsap";
import styles from '../../Wave.module.css';

export default function Wave() {
  useEffect(() => {
    const waves = document.querySelectorAll(`.${styles.parallax} use`);
    
    // Smooth wave movement and opacity animation
    waves.forEach((wave, i) => {
      // Animation for wave movement
      gsap.to(wave, {
        x: "-200%", // Moves the waves horizontally
        duration: 12 + i * 1.5, // Slower waves have more time to animate
        repeat: -1, // Infinite loop
        ease: "sine.inOut", // Smooth easing for natural motion
      });

      // Animation for wave opacity
      gsap.to(wave, {
        opacity: 0.7 + i * 0.3, // Varying opacity for each wave
        duration: 6 + i, // Different duration for each wave
        repeat: -1, // Infinite loop
        yoyo: true, // Return to original opacity
        ease: "sine.inOut", // Smooth easing for opacity
      });
    });
  }, []);

  return (
    <div className={styles.container}>
    <svg
  className={styles.waves}
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  viewBox="0 24 150 28"
  preserveAspectRatio="none"
  shapeRendering="auto"
>
  <defs>
    <path
      id="gentle-wave"
      d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
    />
  </defs>
  <g className={styles.parallax}>
    <use href="#gentle-wave" x="48" y="0" fill="rgba(100, 200, 255, 0.7)" />
    <use href="#gentle-wave" x="48" y="3" fill="rgba(100, 180, 240, 0.5)" />
    <use href="#gentle-wave" x="48" y="6" fill="rgba(100, 160, 220, 0.3)" />
    <use href="#gentle-wave" x="48" y="9" fill="rgba(100, 140, 200, 0.1)" />
  </g>
</svg>

    </div>
  );
}
