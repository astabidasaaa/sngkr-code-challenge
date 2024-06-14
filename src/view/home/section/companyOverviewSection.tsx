import React from "react";

type Props = {};

const CompanyOverviewSection = (props: Props) => {
  return (
    <div className="relative flex flex-col md:flex-row justify-start items-start w-full px-4 sm:px-10 md:px-16 lg:px-20 py-28 md:py-36 gap-4 md:gap-8">
      <h1 className="w-full text-2xl md:text-4xl tracking-wide text-primary">
        Crafting Excellence, Inspiring Creativity
      </h1>
      <p className="md:max-w-sm lg:max-w-md text-xl font-light">
        Founded in 2003, Brushscape has been at the forefront of the paintbrush
        industry for over 21 years. Our journey began with a passion for art and
        a commitment to quality, and today, we are proud to be a trusted name
        among artists worldwide.
      </p>
    </div>
  );
};

export default CompanyOverviewSection;
