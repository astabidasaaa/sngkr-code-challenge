import React from "react";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center items-center px-4 sm:px-10 md:px-16 lg:px-20 py-28 md:pt-36 md:pb-12 overflow-hidden">
      <h1 className="tracking-wide text-primary">Meet Our Team</h1>
      <p className="font-light text-2xl text-center md:text-3xl">
        The Creative Minds Behind Brushscape&apos;s Excellence
      </p>
    </div>
  );
};

export default HeroSection;
