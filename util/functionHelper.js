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
    console.log("testy");
    classNameResult = param
      .map((el, idx) => {
        console.log(el);
        el = styles[el];
        console.log(el);
        return el;
      })
      .join(" ");
  }
  console.log(classNameResult);
  return classNameResult;
}

console.log(classNameBuilderHelper(["test1", "test2"], "styles"));
