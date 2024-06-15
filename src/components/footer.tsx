import Image from "next/image";
import React from "react";
import MainLogo from "./mainLogo";

const Footer = () => {
  return (
    <div className="relative flex justify-center items-center min-h-96 w-full">
      <div className="relative flex flex-col justify-center items-center z-10 ">
        <MainLogo className="w-48 md:w-56 fill-primary" />
        <span className="text-sm font-light text-primary font-lato tracking-widest">
          © 2024 Brushscape by sngkr
        </span>
      </div>
      <Image
        src="/footer-bg.webp"
        alt="Footer background"
        fill
        className="absolute top-0 opacity-60 brightness-110 object-cover object-center z-0"
      />
    </div>
  );
};

export default Footer;
