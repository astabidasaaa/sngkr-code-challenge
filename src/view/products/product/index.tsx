import React from "react";
import MainProductSection from "./section/mainProductSection";

type Props = {};

const ProductTemplateView = ({ id }: { id: string }) => {
  return (
    <>
      <MainProductSection id={id} />
    </>
  );
};

export default ProductTemplateView;
