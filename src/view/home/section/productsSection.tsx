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
                className="pl-1 md:basis-1/2 xl:basis-1/3"
                key={product.slug}
              >
                <Link href={`/products/${product.slug}`} className="group">
                  <div className="relative w-[400px] h-[360px] flex justify-start items-end">
                    <div className="size-80 absolute top-0 right-0 z-0 select-none">
                      <Image
                        src={`https:${product.image.fields.file.url}`}
                        alt={`${product.name} image`}
                        width={360}
                        height={360}
                        // placeholder={<div></div>}
                        placeholder={`data:image/svg+xml;base64,${toBase64(
                          shimmer(320, 320)
                        )}`}
                        className="dark:brightness-75"
                      />
                    </div>
                    <div className="flex flex-col gap-2 justify-start items-start max-w-[240px] z-10">
                      <h3 className="text-lg select-none">{product.name}</h3>
                      <p className="font-light select-none">
                        {product.shortDescription}
                      </p>
                      <Button variant="link" className="p-0 select-none">
                        See details
                      </Button>
                    </div>
                  </div>
                </Link>
              </CarouselItem>
            );
          })}
          {/* {products?.map((product) => {
            return (
              <CarouselItem
                className="pl-1 md:basis-1/2 lg:basis-1/3"
                key={product.slug}
              >
                <Link href={`/products/${product.slug}`} className="group">
                  <div className="flex flex-col md:flex-row justify-start items-start md:items-center gap-4 md:gap-10 max-w-lg px-6 py-4 rounded-lg md:rounded-full bg-secondary/50 group-hover:bg-secondary transition-all duration-500">
                    <Image
                      src={`https:${product.image.fields.file.url}`}
                      alt={`${product.name} image`}
                      width={360}
                      height={360}
                      className="size-48 rounded md:rounded-full"
                    />
                    <div>
                      <h3 className="text-lg select-none">{product.name}</h3>
                      <p className="font-light select-none">
                        {product.shortDescription}
                      </p>
                      <Button variant="link" className="p-0 select-none">
                        <Link href={`/${product.slug}`}>See details</Link>
                        See details
                      </Button>
                    </div>
                  </div>
                </Link>
              </CarouselItem>
            );
          })} */}
          <CarouselItem className="pl-1 md:basis-1/2 xl:basis-1/3 flex justify-start items-center">
            <Link
              href={`/products`}
              className="text-2xl font-light flex flex-row justify-center items-center gap-2"
            >
              See other products <PiArrowUpRightThin className="size-8" />
            </Link>
          </CarouselItem>
        </CarouselContent>
        {/* {products?.map((product) => {
          return (
            <div
              key={product.slug}
              className="flex flex-row justify-start items-center gap-4 max-w-[28rem] px-6 py-4 rounded-full bg-secondary"
            >
              <Image
                src={`https:${product.image.fields.file.url}`}
                alt={`${product.name} image`}
                width={120}
                height={120}
                className="rounded-full"
              />
              <div>
                <h3 className="text-lg">{product.name}</h3>
                <p className="font-light">{product.shortDescription}</p>
                <Button asChild variant="link" className="p-0">
                  <Link href={`/${product.slug}`}>See details</Link>
                </Button>
              </div>
            </div>
          );
        })} */}
      </Carousel>
    </div>
  );
};

export default ProductsSection;

{
  /* <Carousel className="w-full" opts={{ dragFree: true }}>
        <CarouselContent className="-ml-4">
          <CarouselItem className="pl-1 basis-auto">
            <div className="size-20 bg-zinc-200">HELLO</div>
          </CarouselItem>
          <CarouselItem className="pl-1 basis-auto">
            <div className="size-20 bg-zinc-200">HELLO</div>
          </CarouselItem>
          <CarouselItem className="pl-1 basis-auto">
            <div className="size-20 bg-zinc-200">HELLO</div>
          </CarouselItem>
          <CarouselItem className="pl-1 basis-auto">
            <div className="size-20 bg-zinc-200">HELLO</div>
          </CarouselItem>
          <CarouselItem className="pl-1 basis-auto">
            <div className="size-20 bg-zinc-200">HELLO</div>
          </CarouselItem>
        </CarouselContent>
      </Carousel> */
}
