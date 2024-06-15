import type { Asset, Entry, EntryFields } from "contentful";

type T = {
  contentTypeId: string;
  // fields: Record<string, any>;
  fields: {
    name: EntryFields.Symbol;
    image: Asset;
    shortDescription: EntryFields.Symbol;
    longDescription: EntryFields.RichText;
    price: EntryFields.Integer;
    slug: EntryFields.Symbol;
  };
};

export interface TypeTestimonialsFields {
  contentTypeId: "testimonials";
  fields: {
    name: EntryFields.Symbol;
    testimony: EntryFields.Symbol;
    product: Entry<T>;
  };
}

export type TypeTestimonials = Entry<TypeTestimonialsFields>;
