import React, { useEffect, useState } from 'react'; 
import Lottie from 'lottie-react';
import heroAnimation from '../assets/loading.json';

const Intro = ({ onComplete }) => {
  const [scale, setScale] = useState(1);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // 1) Wait 1s before zoom
    const zoomTimer = setTimeout(() => {
      setScale(10);  // zoom in over 0.5s via CSS transition
    }, 1000);

    // 2) After zoom completes (1s + 0.5s = 1.5s), start fade out
    const fadeTimer = setTimeout(() => {
      setFadeOut(true); // fade out over 0.5s
    }, 1500);

    // 3) After fade out (1.5s + 0.5s = 2s), call onComplete to unmount
    const cleanupTimer = setTimeout(() => {
      onComplete();
    }, 2000);

    return () => {
      clearTimeout(zoomTimer);
      clearTimeout(fadeTimer);
      clearTimeout(cleanupTimer);
    };
  }, [onComplete]);

  return (
    <div
      style={{
        backgroundColor: '#0f2031',
        transform: `scale(${scale})`,
        opacity: fadeOut ? 0 : 1,
        transition: 'transform 0.5s ease, opacity 0.5s ease',
        transformOrigin: 'center center',
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Lottie animationData={heroAnimation} loop autoplay style={{ width: 300, height: 300 }} />
    </div>
  );
};

export default Intro;
