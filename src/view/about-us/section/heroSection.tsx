import { shimmer, toBase64 } from "@/utils/imagePlaceholder";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col justify-end lg:justify-between items-start px-4 sm:px-10 md:px-16 lg:px-20 py-28 md:pt-36 md:pb-12">
      <div className="relative hidden lg:flex items-start justify-end w-full lg:h-2 select-none">
        <Image
          src="/about-us/about-us-banner.webp"
          alt="About us banner image"
          width={2000}
          height={1333}
          priority={true}
          placeholder={`data:image/svg+xml;base64,${toBase64(
            shimmer(2000, 1333)
          )}`}
          className="brightness-110 contrast-75 opacity-70 lg:w-[56rem] object-contain z-0"
        />
        <span className="absolute top-0 right-0 p-2 text-sm font-lato font-light tracking-wide">
          Photo by{" "}
          <a
            href="https://www.pexels.com/photo/person-holding-brown-wooden-handle-paint-brush-4786958/"
            target="_blank"
            className="underline hover:no-underline"
          >
            cottonbro studio
          </a>
        </span>
      </div>
      <div className="w-full max-w-screen-md xl:max-w-screen-md z-10">
        <h1 className="w-full tracking-wide text-primary mb-8">
          Meet the Artisans Behind the Craft
        </h1>
        <div className="font-light space-y-4">
          <p>
            Brushscape was founded in 2003 by Oisín Marcello, an artist with a
            vision to revolutionize the paintbrush industry. Starting from a
            small workshop, Marcello combined traditional craftsmanship with
            innovative techniques to create brushes that would set a new
            standard for quality and performance.
          </p>
          <p>
            The journey began when Marcello, frustrated with the lack of
            high-quality brushes available, decided to take matters into their
            own hands. With a deep understanding of artists&apos; needs and a
            passion for excellence, Marcello embarked on a mission to produce
            the best paintbrushes the world had ever seen. The first brushes
            were handcrafted, and word of their superior quality quickly spread
            within the local art community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
