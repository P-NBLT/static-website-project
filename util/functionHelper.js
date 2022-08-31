export function variantclassNameHelper(variant, styles) {
  const arrVariant = variant
    .split(" ")
    .map((v) => {
      v = styles[v];
      return v;
    })
    .join(" ");
  return arrVariant;
}

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
