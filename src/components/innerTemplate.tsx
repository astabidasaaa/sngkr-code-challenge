"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const InnerTemplate = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <motion.main
      //   key={pathName}
      className="relative flex flex-col items-center justify-start w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 1 }}
    >
      {children}
    </motion.main>
  );
};

export default InnerTemplate;
