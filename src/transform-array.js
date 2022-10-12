const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  let newArr = []
if (!(arr instanceof Array)) {
    throw Error(`'arr' parameter must be an instance of the Array!`);
}
for (let i = 0; i < arr.length; i++) {
if (arr[i] == `--discard-next`) {
  arr.splice(i, 2);
} else if (arr[i] == `--discard-prev`) {
  if (arr[i-1] !== 0) {
    newArr.pop()
  }
} else if (arr[i] == `--double-next`) {
  if (arr[i+1] !== undefined)  {
    newArr.push(arr[i+1]) 
  }
  
} else if (arr[i] == `--double-prev`) {
  if (arr[i-1] !== undefined && arr[i-2] !== `--discard-prev`) {
    newArr.push(arr[i-1])
  }
} else {
  newArr.push(arr[i])
}
}
return newArr
}

module.exports = {
  transform
};
