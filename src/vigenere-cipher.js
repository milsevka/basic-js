const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
 
  constructor(type = true) {
    this.type = type
  }
  encrypt(str, key) {
    if (!str || !key) {
      throw new Error("Incorrect arguments!"); 
    }
    key = key.toUpperCase()
    str = str.toUpperCase()
    let arrStr = []
    let bigKey =  key.repeat(Math.ceil(str.length / key.length)).toUpperCase()
   for (let i = 0; i < str.length; i++) {
    let res = str.charCodeAt(i)
    if (str.charCodeAt(i) > 64 && str.charCodeAt(i) < 91) {
      res = bigKey.charCodeAt(i) + str.charCodeAt(i) - 65
      if (res > 90) {
        res = res - 26
      }
    } else {
     let temp1 = bigKey.slice(0, i);
     let temp2 = bigKey.slice(i);
     temp1 = temp1.concat(str[i])
     bigKey = temp1.concat(temp2)
    }
    arrStr.push(String.fromCharCode(res))
   }
   if(this.type){
    return arrStr.join('')
   } else {
    return arrStr.reverse().join('');
   }
  }

  decrypt(encryptStr, key) {
    if (!encryptStr || !key) {
      throw new Error("Incorrect arguments!"); 
    }
    key = key.toUpperCase()
    encryptStr = encryptStr.toUpperCase()
    let arrEnc = []
    let bigKey =  key.repeat(Math.ceil(encryptStr.length / key.length)).toUpperCase()
   for (let i = 0; i < encryptStr.length; i++) {
    let res = encryptStr.charCodeAt(i)
    if (encryptStr.charCodeAt(i) > 64 && encryptStr.charCodeAt(i) < 91) {
      res = encryptStr.charCodeAt(i) - bigKey.charCodeAt(i) + 65
      if (res < 65) {
        res = res + 26
      }
    } else {
     let temp1 = bigKey.slice(0, i);
     let temp2 = bigKey.slice(i);
    temp1 = temp1.concat(encryptStr[i])
     bigKey = temp1.concat(temp2)
    }
    arrEnc.push(String.fromCharCode(res))
   }
   if(this.type){
    return arrEnc.join('')
   } else {
    return arrEnc.reverse().join('');
   }
  }

}

module.exports = {
  VigenereCipheringMachine
};
 
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here