import { shimmer, toBase64 } from "@/utils/imagePlaceholder";
import Image from "next/image";
import React from "react";

interface ITeam {
  name: {
    title: string;
    first: string;
    last: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}

export const fetchTeam = async () => {
  try {
    const data = await fetch(
      "https://randomuser.me/api/?results=4&seed=brushscape&inc=name,picture"
    );

    const result = await data.json();

    return [...result.results];
  } catch (error) {
    console.log(error);
  }
};

const TeamSection = async () => {
  const teams = await fetchTeam();

  //   console.log(teams);

  return (
    <div className="relative flex flex-col justify-start items-start w-full px-4 sm:px-10 md:px-16 lg:px-20 py-28 md:py-40 gap-12 md:gap-16">
      <h3 className="text-center">The Team</h3>
      <div className="flex flex-row flex-wrap justify-between gap-x-16 gap-y-28">
        {teams?.map((team: ITeam, index: number) => {
          return (
            <div key={`team-${index}`} className="flex flex-col">
              {/* <div className="mb-8">
                <Image
                  src={team.picture.large}
                  alt={`${team.name.first} image`}
                  width={360}
                  height={360}
                  placeholder={`data:image/svg+xml;base64,${toBase64(
                    shimmer(320, 320)
                  )}`}
                  className=""
                />
              </div> */}
              <div className="flex flex-col">
                <h4>{`${team.name.first} ${team.name.last}`}</h4>
                <span className="text-lg md:text-xl font-light text-muted-foreground mb-4">
                  {team_data[index].position}
                </span>
                <p className="w-full max-w-[360px] font-light">
                  {team_data[index].brief}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TeamSection;

const team_data = [
  {
    position: "Chief Executive Officer",
    brief:
      "Leading Brushscape with vision and passion, the CEO sets the company’s direction, drives innovation, and ensures we stay ahead in the market. They're all about fostering a collaborative culture and pushing for excellence in everything we do.",
    experience:
      "20+ years in the art supplies industry or related fields, with a strong track record of leading companies to growth and profitability. Extensive experience in strategic planning, market expansion, and corporate restructuring. Demonstrated ability to drive innovation and build successful teams.",
  },
  {
    position: "Chief Operating Officer",
    brief:
      "The COO keeps Brushscape running like a well-oiled machine. They oversee daily operations, streamline processes, and ensure our high-quality products get to customers on time. They’re the efficiency expert making sure everything flows smoothly.",
    experience:
      "15+ years in operations management, with significant experience in optimizing supply chains, improving production processes, and enhancing overall operational efficiency. Proven ability to manage large teams and complex projects.",
  },
  {
    position: "Chief Financial Officer",
    brief:
      "The CFO is Brushscape’s financial guardian. They handle budgeting, forecasting, and financial strategy, ensuring the company’s financial health and sustainability. They provide the financial insights that keep us on a steady growth path.",
    experience:
      "20+ years in finance and accounting, with extensive experience in financial planning, risk management, and capital management. Proven ability to drive financial performance and support strategic decision-making.",
  },
  {
    position: "Marketing Director",
    brief:
      "The Marketing Director is the voice of Brushscape. They create and execute marketing strategies that build our brand and engage our customers. From digital campaigns to market research, they ensure our message resonates and drives sales.",
    experience:
      "12+ years in marketing and brand management, with a proven track record of creating and executing successful marketing campaigns. Extensive experience in digital marketing, brand strategy, and market research.",
  },
];
