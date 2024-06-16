import React from "react";
import ProductTemplateView from "@/view/products/product";

const ProductTemplatePage = ({ params }: { params: { id: string } }) => {
  return (
    <div className="relative flex flex-col items-start justify-start min-h-screen w-full">
      <ProductTemplateView id={params.id} />
    </div>
  );
};

export default ProductTemplatePage;
