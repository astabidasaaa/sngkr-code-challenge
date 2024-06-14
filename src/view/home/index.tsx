import React from "react";
import ArticleSection from "./section/articleSection";
import HeroSection from "./section/heroSection";
import CompanyOverviewSection from "./section/companyOverviewSection";
import ProductsSection from "./section/productsSection";
import TestimonialSection from "./section/testimonialSection";

const HomeView = () => {
  return (
    <>
      <HeroSection />
      <CompanyOverviewSection />
      <ProductsSection />
      <TestimonialSection />
      {/* <ArticleSection /> */}
    </>
  );
};

export default HomeView;
