const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let numb = 1;
  let arr = [];
  for (let i=0; i<str.length;i++) {
    if (str[i] !== str[i+1]) {
      if (numb === 1) {
        arr.push(str[i]);
      } else {
        arr.push(numb, str[i]);
      }
      numb=1
    } else {
      numb++ 
    }
  }
  return arr.join('')
}

module.exports = {
  encodeLine
};
