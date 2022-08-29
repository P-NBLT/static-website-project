import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import {
  Title,
  SubTitle,
  Button,
  HeadContainer,
  Navbar,
} from "../component/atoms";
import { fetchContentul } from "../util/contentfulPost";
import logoDark from "../media/logo-dark.svg";

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
  console.log(contentful);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Static Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar className="MoleculeGlobal_mg_Hz mg-tp-bt-nav">
        <img src={logoDark.src} />
        <Button className="buttonFont" variant="defaultSmall primary">
          {contentful.textButton}
        </Button>
      </Navbar>
      <HeadContainer className="MoleculeGlobal_mg_Hz">
        <Title className="heading">{contentful.titlePage}</Title>
        <SubTitle className="body mg_tp_bt_header">
          {contentful.paragrapheIntro}
        </SubTitle>
        <Button className="buttonFont" variant="default secondary">
          {contentful.textButton}
        </Button>
      </HeadContainer>
    </div>
  );
}
