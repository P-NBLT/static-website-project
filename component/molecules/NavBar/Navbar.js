import styles from "./Navbar.module.css";
import Proptypes from "prop-types";
import { classNameBuilderHelper } from "../../../util/functionHelper";
import { Button, Logo } from "../../atoms";

const Navbar = ({ children, contentful, margin, ...props }) => {
  const classNames = classNameBuilderHelper([margin], styles);
  console.log(classNames);
  return (
    <div className={`${styles.nav} ${classNames} ${props.className}`}>
      <Logo variant="dark" size="logo-pic" />
      <Button font="buttonFont" variant="defaultSmall primary">
        {contentful}
      </Button>
    </div>
  );
};

Navbar.propTypes = {};
export default Navbar;
