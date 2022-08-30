import Proptypes from "prop-types";
import { classNameBuilderHelper } from "../../../util/functionHelper";
import styles from "./Title.module.css";

const Title = ({ children, font, margin, ...props }) => {
  const classNames = classNameBuilderHelper([font, margin], styles);
  return (
    <h1 {...props} className={classNames}>
      {children}
    </h1>
  );
};

Title.propTypes = {
  font: Proptypes.string,
  className: Proptypes.string,
};

export default Title;
