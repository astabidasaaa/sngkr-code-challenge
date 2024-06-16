import React from "react";
import Image from "next/image";
import { client } from "@/utils/contentful";
import {
  TypeProducts,
  TypeProductsFields,
  TypeTestimonialsFields,
} from "@/types/contentful";
import { shimmer, toBase64 } from "@/utils/imagePlaceholder";
import RichText from "@/components/richText";

export const fetchProduct = async (id: string) => {
  try {
    const data = await client.getEntry<TypeProductsFields>(id);

    const testimonies_data = await client.getEntries<TypeTestimonialsFields>({
      content_type: "testimonials",
      // limit: 2,
      order: ["sys.createdAt"],
      // select: ["sys.id", "fields.name", "fields.testimony", "fields.product"],
    });

    const filtered = testimonies_data.items.filter((item) => {
      return item.fields.product.sys.id === id;
    });

    return { data, filtered };

    // const res = await fetch(
    //   `https://cdn.contentful.com/spaces/${String(
    //     process.env.CONTENTFUL_SPACE_ID
    //   )}/entries?content_type=products&fields.slug[match]=${slug}`,
    //   {
    //     method: "GET",
    //     headers: {
    //       Authorization: `Bearer ${String(
    //         process.env.CONTENTFUL_ACCESS_TOKEN
    //       )}`,
    //     },
    //   }
    // );

    // const data = await res.json();

    // return data.items[0];
  } catch (error) {
    console.log(error);
  }
};

const MainProductSection = async ({ id }: { id: string }) => {
  const product = await fetchProduct(id);

  // console.log(product);
  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center items-start px-4 sm:px-10 md:px-16 lg:px-20 py-28 md:pt-48 md:pb-32 overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-16">
        <div className="relative w-full">
          <Image
            src={`https:${product?.data.fields.image?.fields.file.url}`}
            alt={`${product?.data.fields.name} image`}
            width={480}
            height={480}
            placeholder={`data:image/svg+xml;base64,${toBase64(
              shimmer(480, 480)
            )}`}
            className="lg:w-full dark:brightness-75"
          />
        </div>
        <div className="flex flex-col gap-2 justify-start items-start w-full z-10">
          <h1 className="w-full mb-4 select-none">
            {product?.data.fields.name}
          </h1>
          <span className="w-full text-xl sm:text-2xl lg:text-3xl mb-4 font-lato select-none">
            IDR {product?.data.fields.price}
          </span>
          <div className="*:font-light *:mb-4">
            <p className="w-full font-light select-none">
              {product?.data.fields.shortDescription}
            </p>
            <RichText document={product?.data.fields.longDescription} />
          </div>
        </div>
      </div>
      <div className="w-full mt-40 flex flex-col justify-start items-center">
        <div className="flex flex-col justify-start items- start gap-28">
          <span className="w-fit font-lato font-bold text-xl text-muted-foreground/60 tracking-widest">
            Review(s)
          </span>
          {product?.filtered.map((testimony, index) => {
            return (
              <div key={`${id}-${index}`}>
                <h2>{testimony.fields.name}</h2>
                <p className="font-light max-w-screen-lg">
                  {testimony.fields.testimony}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MainProductSection;
