import Image from "next/image";
import React from "react";
import MainLogo from "./mainLogo";
import { Instagram } from "lucide-react";
import { FaInstagram, FaYoutube } from "react-icons/fa6";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="relative flex flex-col justify-center items-center w-full px-4 sm:px-10 md:px-16 lg:px-20">
      <div className="relative flex flex-col md:flex-row justify-center md:justify-center items-center gap-10 min-h-96 w-full z-10">
        <div className="relative flex flex-col justify-center items-center">
          <MainLogo className="w-48 md:w-56 h-16 md:h-20 fill-primary" />
          <span className="text-md text-center font-light text-primary font-lato tracking-widest">
            Crafting Excellence, Inspiring Creativity
          </span>
        </div>
      </div>
      <div className="flex justify-between items-center w-full py-4 z-10">
        <span className="text-center text-sm font-light text-primary font-lato tracking-wide">
          © 2024 Brushscape by sngkr
        </span>
        <div className="flex flex-row gap-2">
          <Button asChild variant="link" className="p-0">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Link to Instagram"
            >
              <FaInstagram className="size-6 text-primary/70" />
            </a>
          </Button>
          <Button asChild variant="link" className="p-0">
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Link to Youtube"
            >
              <FaYoutube className="size-6 text-primary/70" />
            </a>
          </Button>
        </div>
      </div>
      <Image
        src="/footer-bg.webp"
        alt="Footer background"
        fill
        className="absolute top-0 opacity-60 brightness-110 object-cover object-center z-0"
      />
    </footer>
  );
};

export default Footer;
