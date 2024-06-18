import TeamsView from "@/view/teams";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teams",
  description:
    "Get to know the talented team at Brushscape. Learn about their expertise, experience, and the roles they play in crafting our exceptional paintbrushes.",
};

const TeamsPage = () => {
  return (
    <div className="relative flex flex-col items-start justify-start min-h-screen w-full">
      <TeamsView />
    </div>
  );
};

export default TeamsPage;
