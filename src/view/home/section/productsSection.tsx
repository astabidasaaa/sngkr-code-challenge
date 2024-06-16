import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { TypeProductsFields } from "@/types/contentful";
import { client } from "@/utils/contentful";
import { PiArrowUpRightThin } from "react-icons/pi";
import { shimmer, toBase64 } from "@/utils/imagePlaceholder";

export const fetchProducts = async () => {
  try {
    const data = await client.getEntries<TypeProductsFields>({
      content_type: "products",
      limit: 4,
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

const ProductsSection = async () => {
  const products = await fetchProducts();
  // console.log(products);

  return (
    <div className="relative flex flex-col justify-start items-start w-full px-4 sm:px-10 md:px-16 lg:px-20 py-4 md:py-10 gap-4 md:gap-8">
      {/* <h2>Products</h2> */}

      <Carousel className="w-full" opts={{ dragFree: true }}>
        <CarouselContent className="ml-0 space-x-6">
          {products?.map((product) => {
            return (
              <CarouselItem
                className="pl-1 sm:basis-2/3 md:basis-3/5 lg:basis-5/12 xl:basis-[30%]"
                key={product.slug}
              >
                <Link href={`/products/${product.slug}`} className="group">
                  <div className="relative w-[320px] md:w-[400px] h-[320px] md:h-[400px] flex justify-start items-end">
                    <div className="size-56 md:size-80 absolute top-0 right-0 z-0 select-none rounded-full overflow-hidden">
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
                      <span className="max-w-[240px] text-xl font-prata select-none">
                        {product.name}
                      </span>
                      <span className="max-w-[240px] font-light font-lato text-lg select-none">
                        {product.shortDescription}
                      </span>
                      <Button
                        variant="link"
                        className="max-w-[240px] p-0 select-none"
                      >
                        See details
                      </Button>
                    </div>
                  </div>
                </Link>
              </CarouselItem>
            );
          })}
          <CarouselItem className="pl-1 md:basis-1/2 xl:basis-1/3 flex justify-start items-end">
            <Link
              href={`/products`}
              className="md:ml-8 text-2xl font-light flex flex-row justify-center items-center gap-2"
            >
              See other products <PiArrowUpRightThin className="size-8" />
            </Link>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default ProductsSection;
