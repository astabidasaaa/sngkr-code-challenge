import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document as RichTextDocument } from "@contentful/rich-text-types";

type TRichText = {
  document: RichTextDocument | undefined;
};

const RichText = ({ document }: TRichText) => {
  if (!document) {
    return null;
  }

  return <>{documentToReactComponents(document)}</>;
};

export default RichText;
