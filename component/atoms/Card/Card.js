import React from "react";
import PropTypes from "prop-types";
import styles from "./Card.module.css";

function Card({ children, variant, data, ...props }) {
  return (
    <div {...props} className={`${styles[variant]} ${props.className || ""}`}>
      {children}
    </div>
  );
}

Card.propTypes = {
  variant: PropTypes.string,
  data: PropTypes.object,
};

export default Card;
