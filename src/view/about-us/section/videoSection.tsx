import React from "react";

const VideoSection = () => {
  return (
    <div className="relative flex flex-col justify-start items-start w-full px-4 sm:px-10 md:px-16 lg:px-20 py-10 md:py-36 gap-2">
      <video
        loop
        playsInline
        controls
        preload="auto"
        className="block w-full h-full object-cover z-0"
      >
        <source src="/about-us/about-us-video-2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <span className="text-sm font-lato font-light tracking-wide">
        Video by{" "}
        <a
          href="https://www.pexels.com/video/man-painting-inside-a-house-7885674/"
          target="_blank"
          className="underline hover:no-underline"
        >
          cottonbro studio
        </a>
      </span>
    </div>
  );
};

export default VideoSection;
