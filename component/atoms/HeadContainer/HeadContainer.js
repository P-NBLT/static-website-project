import styles from "./HeadContainer.module.css";
import Proptypes from "prop-types";

const HeadContainer = ({ children, ...props }) => {
  return (
    <section className={`${styles.card} ${props.className}`}>
      {children}
    </section>
  );
};

HeadContainer.propTypes = {
  className: Proptypes.string,
};
export default HeadContainer;
