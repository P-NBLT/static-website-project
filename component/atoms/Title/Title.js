import Proptypes from "prop-types";

const Title = ({ children, variant, ...props }) => {
  return <h1 {...props}>{children}</h1>;
};

Title.propTypes = {
  variant: Proptypes.string,
  className: Proptypes.string,
};

export default Title;
