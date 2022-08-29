const SubTitle = ({ children, ...props }) => {
  return (
    <h3 className="test" {...props}>
      {children}
    </h3>
  );
};

export default SubTitle;
