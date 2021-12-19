import Head from "next/head";
import Link from "next/link";
import Date from "../components/date";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import utilStyles from "../styles/utils.module.css";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      {/* User Bio Section */}
      <section className={utilStyles.headingMd}>
        <p>
          Hi, I am{" "}
          <a href="https://rosekamallove.vercel.app" target="_blank">
            Rose Kamal Love
          </a>{" "}
          a friendly ambivert who loves writing software, with a crave to create
          music and yeah I take photos too. <br />
          <br />
          Connect with me on{" "}
          <a
            href="https://www.linkedin.com/in/rose-kamal-love-1146141b0/"
            target="_blank"
          >
            LinkedIn
          </a>
          {" | "}
          <a href="https://github.com/rosekamallove" target="_blank">
            GitHub
          </a>
          {" | "}
          <a href="https://twitter.com/RoseKamalLove1/" target="_blank">
            Twitter
          </a>
        </p>
      </section>

      {/* Blogs Section */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blogs</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
