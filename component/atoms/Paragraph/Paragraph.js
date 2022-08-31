import React from "react";
import PropTypes from "prop-types";
import { classNameBuilderHelper } from "../../../util/functionHelper";
import styles from "./Paragraph.module.css";

const Paragraph = ({ children, font, margin, ...props }) => {
  const classNames = classNameBuilderHelper([font, margin], styles);
  return <div className={classNames}>{children}</div>;
};

Paragraph.propTypes = {
  font: PropTypes.string,
  margin: PropTypes.string,
};

export default Paragraph;
