import { useState, useEffect, useContext } from "react";
import { GGCContext } from "../context/context";

export default function VideoPreloader({ onVideoEnd } : { onVideoEnd: () => void }) {
  const [isVideoEnded, setIsVideoEnded] = useState(false);
  const [isStorageChecked, setIsStorageChecked] = useState(false);

  const context = useContext(GGCContext);
  const { handleactive } = context;
  
  useEffect(() => {
    // Check if video has been played before
    const videoPlayed = localStorage.getItem("videoPlayed");
    
    if (videoPlayed) {
      // If video has been played, hide the preloader
      setIsVideoEnded(true);
      onVideoEnd();
    handleactive(true);
    }

    setIsStorageChecked(true);
  }, [handleactive, onVideoEnd]);

  const handleVideoEnd = () => {
    setIsVideoEnded(true);
    localStorage.setItem("videoPlayed", "true"); // Store that video has been played
    onVideoEnd(); // Call the function passed from the parent to render the content
    handleactive(true);
  };

  if (!isStorageChecked) {
    return null; // Don't render anything until the check is complete
  }

  return (
    <div style={{ display: isVideoEnded ? "none" : "flex" }} className="w-[100vw] h-[calc(100vh-88px)] justify-center items-center overflow-hidden">
      <video
        src="/assets/GGC (6).mp4"
        autoPlay
        muted
        onEnded={handleVideoEnd}
        style={{ width: "50vw", height: "50vh" }}
        className="object-contain"
      />
    </div>
  );
}

