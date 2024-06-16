"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const PageTransition = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <AnimatePresence mode="wait">?{children}</AnimatePresence>;
};

export default PageTransition;
