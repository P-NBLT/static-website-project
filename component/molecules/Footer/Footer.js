import React from "react";
import PropTypes from "prop-types";

const Footer = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

Footer.propTypes = {};

export default Footer;
