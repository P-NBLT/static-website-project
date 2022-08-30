import React from "react";
import PropTypes from "prop-types";
import Logo from "../../atoms/Logo/Logo";
import Button from "../../atoms/Button/Button";
import { classNameBuilderHelper } from "../../../util/functionHelper";
import styles from "./Footer.module.css";

const Footer = ({ children, contentful, variant, ...props }) => {
  const classNames = classNameBuilderHelper([variant], styles);

  return (
    <div {...props} className={classNames}>
      <Logo variant="light" size="logo-pic" />
      <Button font="buttonFont" variant="defaultSmall ternary">
        {contentful}
      </Button>
    </div>
  );
};

Footer.propTypes = {};

export default Footer;
