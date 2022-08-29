import React from "react";
import PropTypes from "prop-types";
import styles from "./Card.module.css";

function Card({ children, variant, data, ...props }) {
  props.className = props.className ? props.className : "";
  return (
    <div {...props} className={`${styles[variant]} ${props.className}`}>
      {children}
    </div>
  );
}

Card.propTypes = {};

export default Card;
