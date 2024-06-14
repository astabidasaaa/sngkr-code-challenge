import React from "react";
import { client } from "@/utils/contentful";
import { TypeBlogFields } from "@/types/contentful";
import RichText from "../components/richText";

export const fetchArticle = async () => {
  try {
    const data = await client.getEntries<TypeBlogFields>({
      content_type: "blog",
    });

    return data.items;
  } catch (error) {
    console.log(error);
  }
};

const ArticleSection = async () => {
  const articles = await fetchArticle();

  // console.log(articles);
  return (
    <div>
      {articles?.map((article) => {
        return (
          <div key={article.sys.id} className="mb-16">
            <h2>{article.fields.title}</h2>
            <p>{article.fields.summary}</p>
            <div className="">
              <RichText document={article.fields.content} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ArticleSection;
