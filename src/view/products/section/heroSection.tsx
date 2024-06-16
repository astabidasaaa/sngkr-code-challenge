import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center items-start px-4 sm:px-10 md:px-16 lg:px-20 py-28 md:pt-36 md:pb-12 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full select-none z-0">
        <Image
          src="/products/artbrush-collection.webp"
          alt="About us banner image"
          //   width={2000}
          //   height={1333}
          fill
          priority={true}
          className="brightness-150 blur-sm saturate-50 contrast-50 opacity-60 object-cover z-0"
        />
      </div>
      <div className="w-full z-10">
        <h1 className="w-full tracking-wide text-primary">
          Our Finest Collection
        </h1>
        <p className="font-light text-2xl md:text-3xl">
          Discover the Artistry in Every Brush - Crafted for Precision, Designed
          for Excellence
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
