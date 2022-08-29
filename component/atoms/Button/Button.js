import styles from "./Button.module.css";
import { variantclassNameHelper } from "../../../util/functionHelper";
import PropTypes from "prop-types";

const Button = ({ children, variant, ...props }) => {
  console.log(props.className);
  const arrVariant = variantclassNameHelper(variant, styles);

  return (
    <button className={`${arrVariant} ${props.className}`}>{children}</button>
  );
};

Button.propTypes = {
  variant: PropTypes.string,
  className: PropTypes.string,
};

export default Button;
