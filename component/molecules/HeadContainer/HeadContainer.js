import styles from "./HeadContainer.module.css";
import Proptypes from "prop-types";
import { Title, SubTitle, Button } from "../../atoms";

const HeadContainer = ({
  children,
  titleContent,
  paragraphContent,
  buttonContent,
  ...props
}) => {
  return (
    <section className={`${styles.card} ${props.className}`}>
      <Title font="heading">{titleContent}</Title>
      <SubTitle font="body" margin="mg_tp_bt_header">
        {paragraphContent}
      </SubTitle>
      <Button font="buttonFont" variant="secondary" size="default">
        {buttonContent}
      </Button>
    </section>
  );
};

HeadContainer.propTypes = {
  className: Proptypes.string,
  titleContent: Proptypes.string.isRequired,
  paragraphContent: Proptypes.string.isRequired,
  buttonContent: Proptypes.string.isRequired,
};
export default HeadContainer;
