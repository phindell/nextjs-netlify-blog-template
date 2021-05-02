import { language } from "gray-matter";
import { GetStaticPaths, GetStaticProps } from "next";
import {
  Article,
  Props as ArticleProps,
} from "../../../components/pages/Article";
import { getArticlesAttributes } from "../../../lib/files";
import { FR, getUrlPrefix } from "../../../lib/language";
import { ARTICLES } from "../../../lib/routes";

export const getStaticProps: GetStaticProps<ArticleProps> = async ({
  params,
}) => {
  const slug = params.article as string;
  const content = await import(`../../../../content/articles_${FR}/${slug}.md`);
  return { props: { content: content.default, language: FR } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getArticlesAttributes(`articles_${FR}`).map(
    (article) => `${getUrlPrefix(FR)}${ARTICLES}/${article.slug}`
  );
  return {
    paths,
    fallback: false,
  };
};

export default Article;
