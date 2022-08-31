import { classNameBuilderHelper } from "../../../util/functionHelper";
import styles from "./SubTitle.module.css";
import PropTypes from "prop-types";

const SubTitle = ({ children, font, margin, ...props }) => {
  const classNames = classNameBuilderHelper([font, margin], styles);

  return (
    <h3 className={classNames} {...props}>
      {children}
    </h3>
  );
};

SubTitle.propTypes = {
  margin: PropTypes.string,
  font: PropTypes.string,
};

export default SubTitle;
