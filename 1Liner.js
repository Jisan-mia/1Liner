// 1. Convert RGB to HEX
const rgbToHex = (r, g, b) => {
  "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
console.log(rgbToHex(255, 23, 12))
