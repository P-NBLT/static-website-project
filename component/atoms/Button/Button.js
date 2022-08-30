import styles from "./Button.module.css";
import { variantclassNameHelper } from "../../../util/functionHelper";
import PropTypes from "prop-types";

const Button = ({ children, variant, font, ...props }) => {
  const arrVariant = variantclassNameHelper(variant, styles);

  return (
    <button
      {...props}
      className={`${arrVariant} ${styles[font]} ${props.className}`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.string,
  className: PropTypes.string,
};

export default Button;
