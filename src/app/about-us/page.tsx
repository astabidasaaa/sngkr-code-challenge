import AboutUsView from "@/view/about-us";
import React from "react";

type Props = {};

const AboutUsPage = (props: Props) => {
  return (
    <div className="relative flex flex-col items-start justify-start min-h-screen w-full">
      <AboutUsView />
    </div>
  );
};

export default AboutUsPage;
