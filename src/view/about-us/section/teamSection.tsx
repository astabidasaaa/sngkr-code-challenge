import React from "react";
import Image from "next/image";
import { shimmer, toBase64 } from "@/utils/imagePlaceholder";
import { team_data } from "@/components/team_data";

export interface ITeam {
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

  return (
    <div className="relative flex flex-col justify-start items-start w-full px-4 sm:px-10 md:px-16 lg:px-20 py-28 md:py-40 gap-12 md:gap-16">
      <h3 className="w-full text-center">The Team</h3>
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
