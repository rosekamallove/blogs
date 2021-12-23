import { getSortedPostsData } from "../lib/posts";
import Date from "../components/date";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export default function Blogs({
  allPostsData,
  isIndex,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
  isIndex: boolean;
}) {
  return (
    <div>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blogs</h2>
        <ul className={utilStyles.list}>
          {isIndex
            ? allPostsData.slice(0, 5).map(({ id, date, title }) => (
                <li className={utilStyles.listItem} key={id}>
                  <Link href={`/posts/${id}`}>
                    <a>{title}</a>
                  </Link>
                  <br />
                  <small className={utilStyles.lightText}>
                    <Date dateString={date} />
                  </small>
                </li>
              ))
            : allPostsData.map(({ id, date, title }) => (
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
    </div>
  );
}

export const getStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
