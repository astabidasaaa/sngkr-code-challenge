import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import MainLogo from "./mainLogo";
import { VscMenu } from "react-icons/vsc";
import ModeToggle from "./themeToggle";
import { useCartContext } from "@/utils/useCartContext";

const MobileMenu = () => {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
  const { isCartOpen } = useCartContext();

  useEffect(() => {
    if (isCartOpen) setMenuOpen(false);
  }, [isCartOpen]);

  return (
    <Sheet open={isMenuOpen} onOpenChange={setMenuOpen}>
      <SheetTrigger asChild>
        <Button
          size="icon"
          variant="ghost"
          className="md:hidden outline-none hover:bg-accent/10 text-secondary hover:text-accent-foreground focus:outline-none focus-visible:bg-accent/10"
        >
          <VscMenu className="text-primary size-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="flex flex-col justify-between items-end sm:max-w-xs"
        aria-describedby="Menu for mobile"
      >
        <SheetTitle className="sr-only">
          <span className="!font-light text-3xl md:text-4xl font-prata">
            Menu
          </span>
        </SheetTitle>
        <nav className="flex flex-col gap-6 w-full text-lg font-medium">
          <Link
            href="/"
            className="flex items-center w-max gap-4 px-2.5 focus-visible:bg-accent/80 focus:outline-none"
            onClick={() => setMenuOpen(false)}
          >
            <MainLogo
              className={`w-24 h-12 fill-primary/60 stroke-primary/60`}
            />
            <span className="sr-only">Brushscape logo</span>
          </Link>
          <Link
            href="/products"
            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors focus-visible:bg-accent/80 focus:outline-none"
            onClick={() => setMenuOpen(false)}
          >
            <div className="text-sm font-semibold leading-none">Products</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              Our Finest Collection
            </p>
          </Link>
          <Link
            href="/about-us#"
            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors focus-visible:bg-accent/80 focus:outline-none"
            onClick={() => setMenuOpen(false)}
          >
            <div className="text-sm font-semibold leading-none">About</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              Meet the Artisans Behind the Craft
            </p>
          </Link>
          <Link
            href="/teams#"
            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors focus-visible:bg-accent/80 focus:outline-none"
            onClick={() => setMenuOpen(false)}
          >
            <div className="text-sm font-semibold leading-none">Teams</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              The Creative Minds Behind Brushscape&apos;s Excellence
            </p>
          </Link>
        </nav>
        <ModeToggle />
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
