"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type Props = {};

const ErrorPage = (props: Props) => {
  return (
    <motion.div
      className="w-full h-screen flex flex-col justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 1 }}
    >
      <h2>Not Found</h2>
      <p className="font-light">Could not find requested resource</p>

      <Button asChild variant="link">
        <Link href="/" className="font-lato text-xl font-bold mt-16">
          Return Home
        </Link>
      </Button>
    </motion.div>
  );
};

export default ErrorPage;
