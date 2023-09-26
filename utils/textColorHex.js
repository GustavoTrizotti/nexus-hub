export const changeTextColor = (color, dark, light) => {
  let selectColor = color.charAt(0) === "#" ? color.substring(1, 7) : color;
  let r = parseInt(selectColor.substring(0, 2), 16);
  let g = parseInt(selectColor.substring(2, 4), 16);
  let b = parseInt(selectColor.substring(4, 6), 16);
  return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? light : dark;
};
