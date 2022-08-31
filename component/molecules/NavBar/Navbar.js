import styles from "./Navbar.module.css";
import Proptypes from "prop-types";
import { classNameBuilderHelper } from "../../../util/functionHelper";
import { Button, Logo } from "../../atoms";

const Navbar = ({ children, contentful, margin, ...props }) => {
  const classNames = classNameBuilderHelper([margin], styles);
  return (
    <div className={`${styles.nav} ${classNames} ${props.className}`}>
      <Logo variant="dark" size="logo-pic" />
      <Button font="buttonFont" variant="defaultSmall primary">
        {contentful}
      </Button>
    </div>
  );
};

Navbar.propTypes = {
  className: Proptypes.string,
  margin: Proptypes.string,
  contentful: Proptypes.string.isRequired,
};
export default Navbar;
