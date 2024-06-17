import { TypeTestimonialsFields } from "@/types/contentful";
import { client } from "@/utils/contentful";
import React from "react";

export const fetchTestimonies = async (id: string) => {
  try {
    const testimonies_data = await client.getEntries<TypeTestimonialsFields>({
      content_type: "testimonials",
      order: ["sys.createdAt"],
    });

    const filtered = testimonies_data.items.filter((item) => {
      return item.fields.product.sys.id === id;
    });

    return filtered;
  } catch (error) {
    console.log(error);
  }
};

const TestimoniesSection = async ({ id }: { id: string }) => {
  const testimonies = await fetchTestimonies(id);

  return (
    <div className="flex flex-col justify-start items-center w-full px-4 sm:px-10 md:px-16 lg:px-20 py-28 md:pt-48 md:pb-32">
      <div className="flex flex-col justify-start items- start max-w-screen-md gap-28">
        <span className="w-fit font-lato font-bold text-xl text-muted-foreground/60 tracking-widest">
          Review(s)
        </span>
        {testimonies?.map((testimony, index) => {
          return (
            <div key={`${id}-${index}`}>
              <h2>{testimony.fields.name}</h2>
              <p className="font-light">{testimony.fields.testimony}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TestimoniesSection;
