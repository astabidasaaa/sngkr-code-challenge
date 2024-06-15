import React from "react";

const CompanyOverviewSection = () => {
  return (
    <div className="relative flex flex-col md:flex-row justify-start items-start w-full px-4 sm:px-10 md:px-16 lg:px-20 py-28 md:py-40 gap-4 md:gap-8">
      <h1 className="w-full tracking-wide text-primary">
        Crafting Excellence, Inspiring Creativity
      </h1>
      <div className="md:max-w-sm xl:max-w-lg font-light space-y-4">
        <p>
          Founded in 2003, Brushscape has been at the forefront of the
          paintbrush industry for over 21 years. Our journey began with a
          passion for art and a commitment to quality, and today, we are proud
          to be a trusted name among artists worldwide.
        </p>
        <p>
          From humble beginnings in a small workshop, we have grown into a
          renowned brand known for our innovative designs and superior
          craftsmanship. Our brushes are crafted using the finest materials,
          ensuring durability and precision for every stroke.
        </p>
      </div>
    </div>
  );
};

export default CompanyOverviewSection;
