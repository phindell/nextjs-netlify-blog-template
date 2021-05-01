import { GetStaticProps } from "next";
import { Home } from "../../components/pages/Home";
import { SECONDARY_LANGUAGE } from "../../components/pages/utils";

export const getStaticProps: GetStaticProps = async () => {
  const content = await import(
    `../../../content/pages/home_${SECONDARY_LANGUAGE}.md`
  );
  return { props: { content: content.default } };
};
export default Home;
