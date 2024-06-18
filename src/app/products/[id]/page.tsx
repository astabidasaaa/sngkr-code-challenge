import React from "react";
import ProductTemplateView from "@/view/products/product";
import type { Metadata, ResolvingMetadata } from "next";
import { fetchProduct } from "@/view/products/product/section/mainProductSection";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export const generateMetadata = async (
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> => {
  const id = params.id;

  const product = await fetchProduct(id);

  return {
    title: product?.fields.name,
    description: product?.fields.shortDescription,
  };
};

const ProductTemplatePage = ({ params }: { params: { id: string } }) => {
  return (
    <div className="relative flex flex-col items-start justify-start min-h-screen w-full">
      <ProductTemplateView id={params.id} />
    </div>
  );
};

export default ProductTemplatePage;
