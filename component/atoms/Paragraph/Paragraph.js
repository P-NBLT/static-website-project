import React from "react";
import PropTypes from "prop-types";

const Paragraph = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

Paragraph.propTypes = {};

export default Paragraph;
