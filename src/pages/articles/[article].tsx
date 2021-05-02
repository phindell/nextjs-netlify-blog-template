import { GetStaticPaths, GetStaticProps } from "next";
import { Article, Props as ArticleProps } from "../../components/pages/Article";
import { getArticlesAttributes } from "../../lib/files";
import { EN } from "../../lib/language";
import { ARTICLES } from "../../lib/routes";

export const getStaticProps: GetStaticProps<ArticleProps> = async ({
  params,
}) => {
  const slug = params.article as string;
  const content = await import(`../../../content/articles_${EN}/${slug}.md`);
  return {
    props: {
      content: content.default,
      language: EN,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getArticlesAttributes("articles_en").map(
    (article) => `${ARTICLES}/${article.slug}`
  );
  return {
    paths,
    fallback: false,
  };
};

export default Article;