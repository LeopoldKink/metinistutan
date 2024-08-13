"use client"

import { Header } from "./header";
import { VideoColumn } from "./video-column";
import React from "react";

export function BackgroundMain(): React.JSX.Element {
  const [screenWidth, setScreenWidth] = React.useState(0);

  React.useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial screen width
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const leftVideos = [
    "/video/VSGV3325.MP4",
    "/video/Lowkey_Culture_1.mp4",
    "/video/AJ1 POLLEN (wide).mp4",
  ];
  const rightVideos = [
    "/video/Oswald_Soul Drill_Final.mp4",
    "/video/MadeIn1Hour.Bu$hiConcert.mp4",
    "/video/CANT_TRUST_LOWKEY_FINAAL.mp4",
  ];

  return (
    <div className="relative w-full h-screen bg-black flex flex-col items-center justify-center text-center space-y-8 p-8 overflow-hidden">
      <div className="absolute inset-0 flex justify-between items-center px-16">
        {screenWidth > 1220 && (
          <>
            {/* Left Column Videos */}
            <VideoColumn videos={leftVideos} />
            {/* Right Column Videos */}
            <VideoColumn videos={rightVideos} />
          </>
        )}
      </div>
      <Header />
    </div>
  );
}