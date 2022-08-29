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
