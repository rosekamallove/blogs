import Layout from "../../components/layout";
import { getAllPostIds } from "../../lib/posts";

export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post() {
  return <Layout></Layout>;
}
