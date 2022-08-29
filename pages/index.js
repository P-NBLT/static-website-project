import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import {
  Title,
  SubTitle,
  Button,
  HeadContainer,
  Navbar,
  Card,
  CardContainer,
  Paragraph,
} from "../component/atoms";
import { fetchContentul } from "../util/contentfulPost";
import logoDark from "../media/logo-dark.svg";
import logoLight from "../media/logo-light.svg";
import animation from "../media/icon-animation.svg";
import design from "../media/icon-design.svg";
import photography from "../media/icon-photography.svg";
import crypto from "../media/icon-crypto.svg";
import business from "../media/icon-business.svg";
import Footer from "../component/molecules/Footer/Footer";

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
        <img src={logoDark.src} className="logo-pic" />
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
      <CardContainer
        className="mg-card-container masterContainerCourse"
        data={{
          title: contentful.title,
          paragraph: contentful.paragraph,
          pic: [animation, design, photography, crypto, business],
          cta: contentful.textButton,
        }}
      >
        <Card variant="card-colourful">
          <Paragraph className="headingCard-title-only">
            {contentful.paragraphAlone}
          </Paragraph>
        </Card>
      </CardContainer>
      <Footer className="footer">
        <img src={logoLight.src} className="logo-pic" />
        <Button className="buttonFont" variant="defaultSmall ternary">
          {contentful.textButton}
        </Button>
      </Footer>
    </div>
  );
}
