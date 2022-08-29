import styles from "./Navbar.module.css";
import Proptypes from "prop-types";

const Navbar = ({ children, ...props }) => {
  console.log(props.className, styles.nav);
  console.log(children);
  return <div className={`${styles.nav} ${props.className}`}>{children}</div>;
};

Navbar.propTypes = {};
export default Navbar;
