import React from "react";
import MainProductSection from "./section/mainProductSection";
import TestimoniesSection from "./section/testimoniesSection";

const ProductTemplateView = ({ id }: { id: string }) => {
  return (
    <>
      <MainProductSection id={id} />
      <TestimoniesSection id={id} />
    </>
  );
};

export default ProductTemplateView;
