import React from "react";
import PropTypes from "prop-types";
import { Card, Title, Paragraph } from "../../atoms";
import styles from "./CardContainer.module.css";
import { classNameBuilderHelper } from "../../../util/functionHelper";

const CardContainer = ({ children, margin, masterMargin, data, ...props }) => {
  const classNames = classNameBuilderHelper([margin, masterMargin], styles);
  let content;
  if (data) {
    content = data.titles.map((el, idx) => {
      return (
        <Card style={{ position: "relative" }} variant="card-white" key={idx}>
          <img className="mg-logo" src={data.pic[idx].src} />
          <Title font="headingCard" margin="mg-title-card">
            {data.titles[idx]}
          </Title>
          <Paragraph font="bodyCard" margin="mg-text-card">
            {data.paragraphs[idx]}
          </Paragraph>
          <Paragraph font="cta" margin="mg-cta-card">
            {data.cta}
          </Paragraph>
        </Card>
      );
    });
  } else content = "";

  return (
    <div {...props} className={`${styles.container} ${classNames}`}>
      <Card variant="card-colourful">
        <Paragraph font="headingCard-title-only">{data.paragraph}</Paragraph>
      </Card>
      {content}
    </div>
  );
};

CardContainer.propTypes = {
  margin: PropTypes.string,
  masterMargin: PropTypes.string,
  data: PropTypes.object.isRequired,
};

export default CardContainer;
