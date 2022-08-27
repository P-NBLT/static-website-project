import styles from "./Button.module.css";

const Button = ({ children, variant, ...props }) => {
  const arrVariant = variant
    .split(" ")
    .map((v) => {
      v = styles[v];
      return v;
    })
    .join(" ");

  return (
    <button className={`${arrVariant} ${props.className}`}>{children}</button>
  );
};

export default Button;
