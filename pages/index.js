import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Title, SubTitle, Button } from "../component/atoms";
import fetchContentul from "../util/contentfulPost";

async function getStaticProps() {
  const res = await fetchContentul();
  const posts = await res.map((post) => post.fields);

  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts }) {
  console.log(posts);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Static Website" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Button className="bodyM" variant="default primary">
        Get Started
      </Button>
      <Button className="bodyM" variant="default secondary">
        Get Started
      </Button>
      <Button className="bodyM" variant="default ternary">
        Get Started
      </Button>
    </div>
  );
}
