const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
 let newArray = []
let indexArr = []
 for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    newArray.push(arr[i])
  } 
  else {
  // sort.splice(i, 0, arr[i])
 indexArr.push(i)
  }
 }
 let sort = newArray.sort((a, b) => a - b);
 for (let j = 0; j < indexArr.length; j++) {
 sort.splice(indexArr[j], 0, -1)
  
 }
 return sort
}

module.exports = {
  sortByHeight
};
