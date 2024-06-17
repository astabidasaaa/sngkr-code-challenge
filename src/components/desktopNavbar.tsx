"use client";

import React, { useLayoutEffect, useState } from "react";
import MainLogo from "./mainLogo";
import Link from "next/link";
import { Button } from "./ui/button";
import ModeToggle from "./themeToggle";
import MobileMenu from "./mobileMenu";
import Cart from "./cart";

const DesktopNavbar = () => {
  const TOP_OFFSET = 200;
  const [showBackground, setShowBackground] = useState<boolean>(false);

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-screen flex flex-row justify-between items-center px-4 sm:px-10 md:px-16 lg:px-20 z-50 ${
        showBackground ? "bg-background" : "bg-transparent sm:translate-y-16"
      } transition-all duration-300`}
    >
      <div className="w-full flex flex-row justify-between items-center py-2 sm:py-4">
        <Link href="/">
          <MainLogo
            className={`${
              showBackground
                ? "w-20 h-8 md:w-32 md:h-10"
                : "w-24 h-12 md:w-36 md:h-14"
            } transition-all duration-500 fill-primary/60 stroke-primary/60`}
          />
        </Link>
        <div className="flex flex-row">
          <nav className="hidden md:flex flex-row gap-16">
            <Button asChild variant="link" className="text-lg p-0">
              <Link href="/products">Products</Link>
            </Button>
            <Button asChild variant="link" className="text-lg p-0">
              <Link href="/about-us">About</Link>
            </Button>
            <Button asChild variant="link" className="text-lg p-0">
              <Link href="/teams">Teams</Link>
            </Button>
            <ModeToggle />
          </nav>
          <Cart />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default DesktopNavbar;
