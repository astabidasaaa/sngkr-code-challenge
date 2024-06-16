"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Loader2 } from "lucide-react";

type Props = {};

const Loading = (props: Props) => {
  return (
    <motion.div
      className="w-full h-screen flex justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 0.3 }}
    >
      <Loader2 className="size-16 animate-spin text-primary" />
    </motion.div>
  );
};

export default Loading;
