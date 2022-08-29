import React from "react";
import PropTypes from "prop-types";
import Card from "../Card/Card";
import Title from "../Title/Title";
import Paragraph from "../Paragraph/Paragraph";
import styles from "./CardContainer.module.css";

const CardContainer = ({ children, data, ...props }) => {
  console.log(data);
  let content;
  if (data) {
    content = data.title.map((el, idx) => {
      console.log(data.pic[idx].src);
      return (
        <Card
          style={{ position: "relative" }}
          //   className="MoleculeGlobal_mg_Hz"
          variant="card-white"
        >
          <img className="mg-logo" src={data.pic[idx].src} />
          <Title className="headingCard mg-title-card">{data.title[idx]}</Title>
          <Paragraph className="bodyCard mg-text-card">
            {data.paragraph[idx]}
          </Paragraph>
          <Paragraph className="cta mg-cta-card">{data.cta}</Paragraph>
        </Card>
      );
    });
  } else content = "";

  return (
    <div {...props} className={`${styles.container} ${props.className}`}>
      {children}
      {content}
    </div>
  );
};

CardContainer.propTypes = {};

export default CardContainer;
