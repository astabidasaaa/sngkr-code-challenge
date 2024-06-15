import React from "react";
import HeroSection from "./section/heroSection";
import HistorySection from "./section/historySection";
import VideoSection from "./section/videoSection";
import CultureSection from "./section/cultureSection";
import TeamSection from "./section/teamSection";

type Props = {};

const AboutUsView = (props: Props) => {
  return (
    <>
      <HeroSection />
      <VideoSection />
      <HistorySection />
      <CultureSection />
      <TeamSection />
    </>
  );
};

export default AboutUsView;
