import type { Entry, EntryFields } from "contentful";

type T = {
  contentTypeId: string;
  fields: Record<string, any>;
};

export interface TypeTestimonialsFields {
  contentTypeId: "testimonials";
  fields: {
    name: EntryFields.Symbol;
    testimoni: EntryFields.Symbol;
    product: Entry<T>;
  };
}

export type TypeTestimonials = Entry<TypeTestimonialsFields>;
