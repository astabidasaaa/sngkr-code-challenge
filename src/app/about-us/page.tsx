import React from "react";
import AboutUsView from "@/view/about-us";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Brushscape's journey, mission, and commitment to excellence. Discover the values that drive us to create the finest paintbrushes for artists worldwide.",
};

const AboutUsPage = () => {
  return (
    <div className="relative flex flex-col items-start justify-start min-h-screen w-full">
      <AboutUsView />
    </div>
  );
};

export default AboutUsPage;
