import React from "react";
import matter from "gray-matter";
import PageLayout from "@/modules/shared/layout/PageLayout";
import Article from "@/modules/shared/article/Article";
import Values from "@/modules/pages/home/values/Values";

function Over({ content, homepage }) {
  const basePath = `/content/over/nl/over`;

  const SEOProps = {
    ...content.meta_tags
  };

  return (
    <PageLayout className="darkmodeContainer" {...SEOProps}>
      <Article content={content} basePath={basePath} />
      <Values content={homepage.quality} />
    </PageLayout>
  );
}

export async function getStaticProps() {
  const data = await import(`public/content/over/nl/over/over.md`);
  const content = matter(data.default).data;

  const homeContent = await import(`public/content/home/nl/home.md`);
  const parsedContent = matter(homeContent.default);
  const homepage = parsedContent.data;

  return {
    props: { content, homepage }
  };
}

export default Over;
