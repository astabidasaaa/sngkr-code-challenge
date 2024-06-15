import { Separator } from "@/components/ui/separator";
import React from "react";

const milestones_data = [
  {
    title: "2003 - First Brush Release",
    content:
      "The release of the first line of brushes was met with critical acclaim, gaining a reputation for their precision and durability.",
  },
  {
    title: "2008 - Expansion",
    content:
      "Due to increasing demand, the company expanded its operations, moving into a larger facility and hiring skilled artisans to join the team.",
  },
  {
    title: "2010 - Innovation",
    content:
      "Brushscape introduced its first line of synthetic brushes, offering an animal-friendly alternative without compromising on quality.",
  },
  {
    title: "2012 - Global Reach",
    content:
      "Brushscape expanded its market internationally, establishing a presence in major art supply stores around the world.",
  },
  {
    title: "2016 - Sustainability Initiative",
    content:
      "The company launched its sustainability initiative, focusing on eco-friendly materials and production processes.",
  },
  {
    title: "2019 - Awards and Recognition",
    content:
      "Brushscape received numerous awards for its contribution to the art community and its commitment to quality.",
  },
];

const HistorySection = () => {
  return (
    <div className="relative flex flex-col justify-start items-center w-full px-4 sm:px-10 md:px-16 lg:px-20 py-28 md:py-36 gap-12 md:gap-20">
      <h2 className="tracking-wide text-primary text-center">
        Journey Through Our Legacy
      </h2>
      <div className="w-28 h-2 my-12">
        <Separator />
      </div>
      <div className="relative flex flex-col justify-between items-center w-full gap-12 md:gap-20">
        <h3 className="text-center">The Milestones</h3>
        <div className="flex flex-col justify-start items-center gap-8 w-full">
          {milestones_data.map((milestone, index) => {
            return (
              <div
                key={`milestone-${index}`}
                className="group flex justify-center md:odd:justify-end md:even:justify-start w-full max-w-screen-lg"
              >
                <div className="flex flex-col justify-start items-center md:group-even:items-end md:group-odd:items-start text-center md:group-even:text-end md:group-odd:text-start md:w-1/2 md:px-4">
                  <h4>{milestone.title}</h4>
                  <p className="font-light text-muted-foreground">
                    {milestone.content}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <p className="max-w-screen-lg font-light text-center">
          As the company grew, so did its commitment to innovation and
          excellence. Investing in research and development, Brushscape
          continuously improved its products and introduced new lines to meet
          the diverse needs of artists. Today, Brushscape remains dedicated to
          its founding principles of quality, innovation, and customer
          satisfaction. As we look to the future, we continue to push the
          boundaries of what is possible, striving to provide artists with the
          tools they need to create their masterpieces.
        </p>
      </div>
    </div>
  );
};

export default HistorySection;

{
  /* <div className="relative flex flex-col md:flex-row justify-between items-center md:items-start w-full gap-4 md:gap-8">
  <h3 className="md:basis-1/2 text-center md:text-end">Our Milestones</h3>
  <div className="md:basis-1/2 flex flex-col justify-start items-start gap-8 text-center md:text-start">
    {milestones_data.map((milestone, index) => {
      return (
        <div
          key={`milestone-${index}`}
          className="flex flex-col justify-start items-center md:items-start w-full"
        >
          <h4>{milestone.title}</h4>
          <p className="font-light text-base md:text-lg ">
            {milestone.content}
          </p>
        </div>
      );
    })}
  </div>
</div>; */
}
