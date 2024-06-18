import HomeView from "@/view/home";
import type { Metadata } from "next";

export const metadata: Metadata = {
  description:
    "Discover Brushscape's exceptional range of paintbrushes designed for artists of all levels. Explore our collection and find the perfect tools to bring your creative visions to life.",
};

const HomePage = () => {
  return (
    <div className="relative flex flex-col items-start justify-start min-h-screen w-full">
      <HomeView />
    </div>
  );
};

export default HomePage;
