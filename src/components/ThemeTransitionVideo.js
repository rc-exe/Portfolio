import { useEffect, useRef } from "react";

const ThemeTransitionVideo = ({ isDarkMode }) => {
  const videoRef = useRef(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Skip on first render to prevent initial flash
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    // Ensure video is loaded
    if (!video.src) {
      video.src = "/videos/theme-transition.mp4";
    }

    // Configure playback based on direction
    if (isDarkMode) {
      // Play forward (light → dark)
      video.currentTime = 0;
      video.playbackRate = 1;
    } else {
      // Play in reverse (dark → light)
      video.currentTime = video.duration || 1.5; // Fallback to 1.5s if duration not loaded
      video.playbackRate = -1;
    }

    video.style.opacity = '1';
    video.play()
      .catch(error => {
        console.log("Video play error:", error);
        video.style.opacity = '0';
      });

    const handleEnded = () => {
      video.style.opacity = '0';
    };

    video.addEventListener('ended', handleEnded);
    return () => video.removeEventListener('ended', handleEnded);
  }, [isDarkMode]);

  return (
    <video
      ref={videoRef}
      className="fixed inset-0 w-full h-full object-cover z-[9999] pointer-events-none transition-opacity duration-300 opacity-0"
      muted
      playsInline
      preload="auto"
    />
  );
};

export default ThemeTransitionVideo;