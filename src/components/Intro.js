import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import heroAnimation from '../assets/loading.json';

const Intro = ({ onComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeOut(true); // trigger fade out + zoom
    }, 3000);

    const cleanupTimer = setTimeout(() => {
      onComplete(); // unmount intro
    }, 3500); // wait until fade out finishes

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(cleanupTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#0f2031] transition-all duration-500 ${
        fadeOut ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
      }`}
    >
      <Lottie
        animationData={heroAnimation}
        loop
        autoplay
        style={{ width: 300, height: 300 }}
      />
    </div>
  );
};

export default Intro;
