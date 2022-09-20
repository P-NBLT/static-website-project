export function classNameBuilderHelper(param, styles) {
  let classNameResult;
  if (typeof param == "object") {
    classNameResult = param
      .map((el) => {
        el = styles[el];

        return el;
      })
      .join(" ");
  }
  return classNameResult;
}
