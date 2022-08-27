const Title = ({ variant, ...props }) => {
  console.log(props);
  return (
    <h1 {...props}>
      lorem ipsumMollit excepteur mollit enim est cillum et minim.Fugiat sit ad
      mollit et nostrud pariatur consequat culpa enim. Mollit mollit mollit elit
      sit anim. Culpa deserunt incididunt excepteur labore velit et nostrud.
    </h1>
  );
};

export default Title;
