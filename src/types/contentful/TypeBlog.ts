import type { Asset, Entry, EntryFields } from "contentful";

export interface TypeBlogFields {
  contentTypeId: "blog";
  fields: {
    title: EntryFields.Symbol;
    summary: EntryFields.Symbol;
    content?: EntryFields.RichText;
    thumbnail?: Asset;
    author?: EntryFields.Symbol;
    tag?: EntryFields.Symbol[];
    publishDate: EntryFields.Date;
    slug: EntryFields.Symbol;
  };
}

export type TypeBlog = Entry<TypeBlogFields>;
