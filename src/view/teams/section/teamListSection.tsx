import React from "react";
import Image from "next/image";
import { team_data } from "@/components/team_data";
import { shimmer, toBase64 } from "@/utils/imagePlaceholder";

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
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: number;
  };
  email: string;
  cell: string;
}

export const fetchTeam = async () => {
  try {
    const data = await fetch(
      "https://randomuser.me/api/?results=4&seed=brushscape&inc=name,picture,location,email,cell"
    );

    const result = await data.json();

    return [...result.results];
  } catch (error) {
    console.log(error);
  }
};

const TeamListSection = async () => {
  const teams = await fetchTeam();

  return (
    <div className="relative flex flex-col justify-start items-center w-full px-4 sm:px-10 md:px-16 lg:px-20 py-28 md:py-16 gap-12 md:gap-20">
      <div className="flex flex-col justify-start items-center w-full gap-40 lg:gap-56">
        {teams?.map((team: ITeam, index: number) => {
          return (
            <div
              key={`team-${index}`}
              className="group flex flex-col lg:flex-row justify-start items-start gap-10 md:gap-16"
            >
              <div className="flex flex-col justify-start items-start lg:group-even:items-end lg:group-even:order-2">
                <Image
                  src={`/teams${team_data[index].image.url}`}
                  alt={`${team.name.first} image`}
                  width={480}
                  height={480}
                  placeholder={`data:image/svg+xml;base64,${toBase64(
                    shimmer(480, 480)
                  )}`}
                  className="min-w-60 min-h-60 object-contain"
                />
                <span className="text-sm font-lato font-light tracking-wide">
                  Photo by{" "}
                  <a
                    href={team_data[index].image.by_url}
                    target="_blank"
                    className="underline hover:no-underline"
                    rel="noopener"
                  >
                    {team_data[index].image.by}
                  </a>
                </span>
              </div>
              <div className="flex flex-col max-w-screen-sm xl:max-w-screen-md lg:group-odd:order-1 lg:group-even:text-right">
                <h2>{`${team.name.first} ${team.name.last}`}</h2>
                <span className="text-xl md:text-2xl font-light text-muted-foreground mb-4">
                  {team_data[index].position}
                </span>
                <p className="font-light mb-8">{team_data[index].brief}</p>
                <p className="mb-8">Experience</p>
                <p className="font-light mb-8">{team_data[index].experience}</p>
                <p className="mb-8">Contact</p>
                <p className="font-light">{team.email}</p>
                <p className="font-light">{team.cell}</p>
                <p className="font-light">
                  {team.location.street.number} {team.location.street.name},{" "}
                  {team.location.city}
                </p>
                <p className="font-light">
                  {team.location.state}, {team.location.country}{" "}
                  {team.location.postcode}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <span className="w-full text-end text-sm font-lato font-light tracking-wide">
        Team profile by{" "}
        <a
          href="https://randomuser.me/"
          target="_blank"
          rel="noopener"
          className="underline hover:no-underline"
        >
          random user generator
        </a>
      </span>
    </div>
  );
};

export default TeamListSection;
