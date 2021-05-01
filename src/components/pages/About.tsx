import { NextPage } from "next";
import parse from "html-react-parser";
import Layout from "../Layout";

interface Props {
  content: { attributes: AboutAttributes; html: string };
}
interface AboutAttributes {
  title: string;
  subtitle: string;
  description: string;
  image: string;
}
export const About: NextPage<Props> = ({ content }) => {
  const { attributes, html } = content;
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-full">
        <span className="font-bold text-6xl text-blue-600">
          {attributes.title}
        </span>
        <div className="h-2 w-full" />
        <p className="text-5xl">{attributes.subtitle}</p>
        <div className="h-2 w-full" />
        <p>{attributes.description}</p>
        <div className="prose">{parse(html)}</div>
      </div>
    </Layout>
  );
};