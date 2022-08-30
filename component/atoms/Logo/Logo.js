import React from "react";
import PropTypes from "prop-types";
import logoDark from "../../../media/logo-dark.svg";
import logoLight from "../../../media/logo-light.svg";

const Logo = ({ variant, ...props }) => {
  const pic =
    variant === "light" ? logoLight : variant === "dark" ? logoDark : "";
  return <img src={pic.src} className="logo-pic" />;
};

Logo.propTypes = {};

export default Logo;
