const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let resultStr = []
  let miniStr = []
  if (typeof(str) != 'String') {
    str = String(str)
  }
  
  let repeat = (options.hasOwnProperty('repeatTimes')) ? options.repeatTimes : 1;
  let separBig = (options.hasOwnProperty('separator')) ? options.separator : '+';
  let addition = (options.hasOwnProperty('addition')) ? options.addition : '';
  let addRepeat = (options.hasOwnProperty('additionRepeatTimes')) ? options.additionRepeatTimes : 1;
  let addSepar = (options.hasOwnProperty('additionSeparator')) ? options.additionSeparator : '|'; 
  if (typeof(addition) != 'String') {
    addition = String(addition)
  }
  for (let i = 0; i < addRepeat; i++) {
   miniStr.push(addition)
  }
  let miniStrResult = miniStr.join(`${addSepar}`)
  if (miniStrResult.length > 0) {
    for (let j = 0; j < repeat; j++) {
      resultStr.push(str.concat(miniStrResult))
     }
  } else {
    for (let j = 0; j < repeat; j++) {
      resultStr.push(str)
     }
  }

 return resultStr.join(`${separBig}`)
}

module.exports = {
  repeater
};
