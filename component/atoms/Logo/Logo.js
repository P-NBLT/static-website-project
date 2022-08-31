import React from "react";
import PropTypes from "prop-types";
import logoDark from "../../../media/logo-dark.svg";
import logoLight from "../../../media/logo-light.svg";
import styles from "./Logo.module.css";
import { classNameBuilderHelper } from "../../../util/functionHelper";

const Logo = ({ variant, size, ...props }) => {
  const classNames = classNameBuilderHelper([size], styles);
  const pic = variant === "light" ? logoLight : logoDark;
  return <img src={pic.src} className={classNames} />;
};

Logo.propTypes = {
  variant: PropTypes.oneOf(["light", "dark"]),
  size: PropTypes.string,
};

export default Logo;
