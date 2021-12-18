import Head from "next/head";
import Link from "next/link";
import utilStyles from "../components/utils.module.css";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hi, I am{" "}
          <a href="https://rosekamallove.vercel.app" target="_blank">
            Rose Kamal Love
          </a>{" "}
          a friendly ambivert who loves writing software, with a crave to create
          music and yeah I take photos too. <br />
          Connect with me on{" "}
          <a
            href="https://www.linkedin.com/in/rose-kamal-love-1146141b0/"
            target="_blank"
          >
            LinkedIn
          </a>
        </p>
        <p>
          ( I followed the Next.js{" "}
          <a href="https://nextjs.org/learn/basics/create-nextjs-app">
            Learning path
          </a>{" "}
          to build this simple but website with an effective learning
          experience)
        </p>
      </section>
    </Layout>
  );
}
