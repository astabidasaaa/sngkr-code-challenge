import type {
  Asset,
  AssetFile,
  AssetLink,
  Entry,
  EntryFieldTypes,
  EntryFields,
  Link,
} from "contentful";

export interface TypeProductsFields {
  contentTypeId: "products";
  fields: {
    name: EntryFields.Symbol;
    image: Asset;
    shortDescription: EntryFields.Symbol;
    longDescription: EntryFields.RichText;
    price: EntryFields.Integer;
    slug: EntryFields.Symbol;
  };
}

export type TypeProducts = Entry<TypeProductsFields>;
