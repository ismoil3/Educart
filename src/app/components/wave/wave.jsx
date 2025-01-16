import React, { useEffect } from "react";
import { gsap } from "gsap";
import '../../Wave.css';

const WaveAnimation = () => {
  useEffect(() => {
    // Аниматсия барои мавҷҳо
    gsap.to("#wave1", {
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      attr: {
        d: "M0,200 Q360,150 720,200 T1440,200 V320 H0 Z",
      },
      rotation: 5, // Илова кардани гардиш
    });

    gsap.to("#wave2", {
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      attr: {
        d: "M0,180 Q360,220 720,180 T1440,180 V320 H0 Z",
      },
      stagger: {
        amount: 1, // Аниматсияи қатор
      },
    });

    gsap.to("#wave3", {
      duration: 6,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      attr: {
        d: "M0,220 Q360,180 720,220 T1440,220 V320 H0 Z",
      },
    });
  }, []);

  return (
    <div style={{ width: "100%",minHeight:"200px" }}>
      <svg
      className="svg"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: "100%",
        }}
      >
        {/* Мавҷи якум */}
        <path
          id="wave1"
          d="M0,160 Q360,120 720,160 T1440,160 V320 H0 Z"
          fill="rgba(100, 64, 251, 0.4)"
        />
        {/* Мавҷи дуюм */}
        <path
          id="wave2"
          d="M0,180 Q360,140 720,180 T1440,180 V320 H0 Z"
          fill="rgba(100, 64, 251, 0.3)"
        />
        {/* Мавҷи сеюм */}
        <path
          id="wave3"
          d="M0,200 Q360,180 720,200 T1440,200 V320 H0 Z"
          fill="rgba(100, 64, 251, 0.2)"
        />
      </svg>
    </div>
  );
};

export default WaveAnimation;
