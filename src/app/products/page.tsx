import React from "react";
import ProductsView from "@/view/products";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse Brushscape's extensive selection of premium paintbrushes. Find detailed specifications, product stories, usage tips, and prices for each brush in our collection.",
};

const ProductsPage = () => {
  return (
    <div className="relative flex flex-col items-start justify-start min-h-screen w-full">
      <ProductsView />
    </div>
  );
};

export default ProductsPage;
