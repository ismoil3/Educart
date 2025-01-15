'use client';

import { useEffect } from "react";
import gsap from "gsap";
import styles from '../../Wave.module.css';

export default function Wave() {
  useEffect(() => {
    const waves = document.querySelectorAll(`.${styles.parallax} use`);
    
    
    waves.forEach((wave, i) => {
      
      gsap.to(wave, {
        x: "-200%", 
        duration: 12 + i * 1.5, 
        repeat: -1, 
        ease: "sine.inOut", 
      });

      
      gsap.to(wave, {
        opacity: 0.7 + i * 0.3, 
        duration: 6 + i, 
        repeat: -1, 
        yoyo: true, 
        ease: "sine.inOut", 
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
