import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { fetchContentul } from "../util/contentfulPost";
import animation from "../media/icon-animation.svg";
import design from "../media/icon-design.svg";
import photography from "../media/icon-photography.svg";
import crypto from "../media/icon-crypto.svg";
import business from "../media/icon-business.svg";
import {
  Footer,
  CardContainer,
  HeadContainer,
  Navbar,
} from "../component/molecules";

export async function getStaticProps() {
  const res = await fetchContentul();
  const contentful = await res.fields;

  return {
    props: {
      contentful,
    },
  };
}

export default function Home({ contentful }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Static Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar
        className="MoleculeGlobal_mg_Hz"
        margin="mg-tp-bt-nav"
        contentful={contentful.textButton}
      />
      <HeadContainer
        className="MoleculeGlobal_mg_Hz"
        titleContent={contentful.titlePage}
        paragraphContent={contentful.paragrapheIntro}
        buttonContent={contentful.textButton}
      />
      <CardContainer
        margin="mg-card-container"
        masterMargin="masterContainerCourse"
        data={{
          titles: contentful.title,
          paragraphs: contentful.paragraph,
          paragraph: contentful.paragraphAlone,
          pic: [animation, design, photography, crypto, business],
          cta: contentful.textButton,
        }}
      />
      <Footer variant="footer" contentful={contentful.textButton} />
    </div>
  );
}
