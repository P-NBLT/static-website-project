import { classNameBuilderHelper } from "../../../util/functionHelper";
import styles from "./SubTitle.module.css";

const SubTitle = ({ children, font, margin, ...props }) => {
  const classNames = classNameBuilderHelper([font, margin], styles);

  return (
    <h3 className={classNames} {...props}>
      {children}
    </h3>
  );
};

export default SubTitle;
