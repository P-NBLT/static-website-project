import styles from "./Button.module.css";
import { classNameBuilderHelper } from "../../../util/functionHelper";
import PropTypes from "prop-types";

const Button = ({ children, variant, size, font, ...props }) => {
  const arrVariant = classNameBuilderHelper([variant, size], styles);
  console.log(size, variant);
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
  font: PropTypes.string,
};

export default Button;
