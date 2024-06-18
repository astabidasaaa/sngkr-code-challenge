import { Separator } from "@/components/ui/separator";
import React from "react";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <div className="relative w-full h-screen flex flex-col justify-end items-start px-4 sm:px-10 md:px-16 lg:px-20 py-28 md:pt-36 md:pb-12">
      <video
        // width="320"
        // height="240"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute top-0 left-0 block w-full h-full object-cover brightness-110 dark:brightness-50 z-0"
      >
        <source src="/home/brush.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <div className="w-full z-10">
        <p className="max-w-screen-md text-xl md:text-3xl font-light text-primary tracking-wide md:leading-normal">
          Where craftsmanship meets creativity, we provide artists with the
          finest tools to bring their visions to life. Rooted in excellence, our
          mission is to inspire creativity and enhance the artistic experience.
        </p>
        {/* <Separator className="bg-muted-foreground my-6 md:my-12" /> */}
      </div>
    </div>
  );
};

export default HeroSection;
