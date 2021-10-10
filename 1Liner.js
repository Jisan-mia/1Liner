// 1. Convert RGB to HEX
const rgbToHex = (r, g, b) => 
  "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

console.log(rgbToHex(255, 23, 12)) // #ff170c


// 2. Copy to clipboard using navigator.clipboard.writeText
// const copyToClipboard = (text) => navigator.clipboard.writeText(text);
// copyToClipboard("Hello world!");

// 3. Check if Data is valid
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
isDateValid('January 14, 2021 12:00:00'); // true

// 4. Capitalize a string
const capitalizeStr = str => str.charAt(0).toUpperCase() + str.slice(1)

console.log(capitalizeStr('jisan is my name')) // Jisan is my name

// 5. Clear all cookies
const clearCookies = document.cookie.split(":").forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/` ));
