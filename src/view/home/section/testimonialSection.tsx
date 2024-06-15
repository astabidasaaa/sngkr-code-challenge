import { TypeTestimonialsFields } from "@/types/contentful";
import { client } from "@/utils/contentful";
import React, { useState } from "react";

export const fetchTestimonial = async () => {
  try {
    const data = await client.getEntries<TypeTestimonialsFields>({
      content_type: "testimonials",
      limit: 2,
      order: ["sys.createdAt"],
      select: ["sys.id", "fields.name", "fields.testimony", "fields.product"],
    });

    const cleanedData = data.items.map((item) => {
      return {
        id: item.sys.id,
        name: item.fields.name,
        testimony: item.fields.testimony,
        product: item.fields.product,
      };
    });

    return cleanedData;
  } catch (error) {
    console.log(error);
  }
};

const TestimonialSection = async () => {
  const testimonials = await fetchTestimonial();

  // console.log(testimonials);
  return (
    <div className="relative flex flex-col justify-start items-center w-full px-4 sm:px-10 md:px-16 lg:px-20 py-28 md:py-36 gap-4 md:gap-8">
      <div className="flex flex-col justify-start items-start w-full lg:max-w-screen-sm">
        <span className="font-prata w-full text-8xl tracking-wide text-primary mb-12">
          &ldquo; <span className="sr-only">Testimonial section</span>
        </span>
        <div className="flex flex-col gap-16">
          {testimonials?.map((testimony) => {
            console.log(testimony.product);
            return (
              <div
                key={testimony.id}
                className="[&:not(:last-child)]:pb-16 [&:not(:last-child)]:border-b border-primary/20"
              >
                <p className="font-light tracking-wide mb-8">
                  {testimony.testimony}
                </p>
                <span className="text-lg font-prata">{testimony.name}</span>
              </div>
            );
          })}
        </div>
        <span className="font-prata w-full text-8xl tracking-wide text-primary mt-16 text-end">
          &rdquo; <span className="sr-only">Testimonial section</span>
        </span>
      </div>
    </div>
  );
};

export default TestimonialSection;
