import React from "react";
import { TypeProductsFields } from "@/types/contentful";
import { client } from "@/utils/contentful";
import Link from "next/link";
import Image from "next/image";
import { shimmer, toBase64 } from "@/utils/imagePlaceholder";
import { Button } from "@/components/ui/button";

export const fetchProducts = async () => {
  try {
    const data = await client.getEntries<TypeProductsFields>({
      content_type: "products",
      order: ["sys.createdAt"],
      include: 10,
      select: [
        "fields.name",
        "fields.image",
        "fields.shortDescription",
        "fields.price",
        "fields.slug",
      ],
    });

    const cleanedData = data.items.map((item) => {
      return {
        id: item.sys.id,
        name: item.fields.name,
        image: item.fields.image,
        shortDescription: item.fields.shortDescription,
        price: item.fields.price,
        slug: item.fields.slug,
      };
    });

    return cleanedData;
  } catch (error) {
    console.log(error);
  }
};

const ProductListSection = async () => {
  const products = await fetchProducts();

  // console.log(products);

  return (
    <div className="relative flex flex-col justify-start items-center w-full px-4 sm:px-10 md:px-16 lg:px-20 py-28 md:py-36 gap-12 md:gap-20">
      <div className="flex flex-row flex-wrap justify-center md:justify-between gap-4 md:gap-24">
        {products?.map((product, index) => {
          return (
            <Link
              key={product.slug}
              href={`/products/${product.id}`}
              className="group"
            >
              <div className="relative w-full max-w-[360px] flex flex-col justify-start items-end gap-4">
                <div className="relative w-full">
                  <Image
                    src={`https:${product.image.fields.file.url}`}
                    alt={`${product.name} image`}
                    width={360}
                    height={360}
                    placeholder={`data:image/svg+xml;base64,${toBase64(
                      shimmer(320, 320)
                    )}`}
                    className="dark:brightness-75"
                  />
                </div>
                <div className="flex flex-col gap-2 justify-start items-start w-full z-10">
                  <span className="w-full text-2xl font-prata select-none">
                    {product.name}
                  </span>
                  <span className="w-full text-lg font-lato select-none">
                    IDR {product.price}
                  </span>
                  <p className="w-full font-light select-none">
                    {product.shortDescription}
                  </p>
                  <Button variant="link" className="p-0 select-none">
                    See details
                  </Button>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ProductListSection;
